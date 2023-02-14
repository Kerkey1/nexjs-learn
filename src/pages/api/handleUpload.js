import formidable from "formidable";
import fs from "fs";

export const config = {
    api: {
        bodyParser: false
    }
};

const post = async (req, res) => {
    const form = new formidable.IncomingForm();
    form.parse(req, async function (err, fields, files) {
        try {
            await saveFile(files.file).then(() => {
                res.statusCode = 200
                res.end(files.file.originalFilename)
            });
        } catch (e) {
            console.log('Ошибка: ', e);
        }

        return res;
    });
};

const saveFile = async (file) => {
    const newFilename = `./public/${file.originalFilename}`;
    const data = fs.readFileSync(file.filepath); //чтение содержимого временного файла
    fs.writeFileSync(newFilename, data); //сохранени файла
    await fs.unlinkSync(file.filepath); //Удаление временного файла
    return newFilename;
};

export default (req, res) => {
    if (req.method === "POST") post(req, res);
    else res.status(200).send("Invalid method, use POST")
};