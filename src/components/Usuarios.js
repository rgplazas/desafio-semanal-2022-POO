
import { HiStatusOnline, HiStatusOffline } from 'react-icons/hi';

export default function Usuarios(props) {
    const { uid, provider, name, images, email, conectado, ultimoInicioSesion } = props;
    let linea = "";

    if (conectado) {
        linea = <><HiStatusOnline style={{ color: "green" }} /> En Linea</>
    } else {
        linea = <>
        <HiStatusOffline style={{ color: "red" }} /> Fuera de Linea - [{new Intl.DateTimeFormat('es-ES', { dateStyle: "full", timeStyle: "full" }).format(ultimoInicioSesion)}]
        </>
    }

    return (
        <>
            <li className="clearfix" id={uid}>
                <img src={images} alt="Foto de Perfil" className="img_usuarios" />
                <div className="about">
                    <div className="name">{name} <a href={{}} className="status">[{provider}] - [{email}]</a></div>
                    <div className="status">{linea}</div>
                </div>
            </li>
        </>
    );
}
