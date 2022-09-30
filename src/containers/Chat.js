import { useContext, useEffect } from "react";
import Contexto from "../context/Contexto";
import Usuarios from "../components/Usuarios";
import "../assets/css/Chat.scss";
import { BsSearch } from 'react-icons/bs';
export default function Chat() {
    const { listameUsuarios, usuarios } = useContext(Contexto);
    useEffect(() => {
        listameUsuarios();
    }, []);

    return (
        <>
            <div className="container" style={{ height: '90vh'}}>
                <div className="people-list" id="people-list">
                    {/* <div className="search">
                        <input type="text" placeholder="Buscar" /><BsSearch className="fa-search" />
                    </div> 
                    https://codepen.io/rgplazas/pen/RwyMBxL */}
                    <ul className="list">
                        {
                            usuarios.map((item) => (
                                <Usuarios {...item} key={item.localId}></Usuarios>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}
