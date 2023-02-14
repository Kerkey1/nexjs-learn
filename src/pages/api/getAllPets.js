import fs from "fs";

export const config = {
    api: {
        bodyParser: true
    }
};

const get = async (req, res) => {
    fs.readFile("./public/pets.json", {encoding: 'utf-8'}, function (err, data) {
        if (!err) {
            res.statusCode = 200
            res.end(JSON.stringify(data));
        } else {
            res.end(JSON.stringify([]))
        }
    });

    return res
};

export default (req, res) => {
    if (req.method === "GET") get(req, res)
    else res.status(200).send("Invalid method, use POST")
};