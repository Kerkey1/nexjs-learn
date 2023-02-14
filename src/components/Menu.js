import React, {useEffect} from 'react'
import Link from "next/link";

const Menu = () => {
    useEffect(() => {
        let user = sessionStorage.getItem('user');
        if (user === null) {
            while (user === null) {
                user = prompt("Введите ваше имя пользователя");
                if (!user) {
                    alert('Обязательно!');
                } else {
                    sessionStorage.setItem('user', user);
                }
            }
        }
    }, []);

    const logout = () => {
        sessionStorage.clear();
    }

    return <div className="header-wrapper">
        <nav className="menu">
            <Link href="/lostPets">Lost pets</Link>
            <Link href="/findMyPet">Find my pet</Link>
        </nav>
        <button onClick={logout} style={{cursor: "pointer"}}>logout</button>
    </div>
}
export default Menu;