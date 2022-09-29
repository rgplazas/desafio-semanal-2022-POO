
import { Col } from 'react-bootstrap';
import { HiStatusOnline, HiStatusOffline } from 'react-icons/hi';

export default function Usuarios(props) {
    const { uid, provider, name, images, email, conectado, ultimoInicioSesion} = props;
    let linea = "";
    if (conectado) {
        linea = <>
            <Col sm={12} md={12} lg={6} xl={6} id={uid} className="py-2">
                <div className="CardStep_cardStep__2EG0E" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={images} alt="Foto de Perfil" style={{ borderRadius: '200px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 4px 4px' }} />
                    <p className="CardStep_cardStep_description__CVlpV p-4">
                        Usuario: {name} <br />
                        Mediante: {provider} <br />
                        email: {email} <br />
                        <HiStatusOnline style={{color:"green"}}/> En Linea
                    </p>
                
                </div>
            </Col>
        </>
    } else {
        linea = <> <Col sm={12} md={12} lg={6} xl={6} id={uid} className="py-2">
            <div className="CardStep_cardStep__2EG0E" style={{ display: 'flex', alignItems: 'center' }}>
                <img src={images} alt="Foto de Perfil" style={{ maxHeight: '160px', borderRadius: '100px', boxShadow: '0px 4px 4px rgb(0 0 0 / 25%)' }} />
                <p className="CardStep_cardStep_description__CVlpV p-4">
                    Usuario: {name} <br />
                    Mediante: {provider} <br />
                    email: {email} <br />
                     Ultima Conexión: {new Intl.DateTimeFormat('es-ES',{dateStyle: "full" , timeStyle: "full"}).format(ultimoInicioSesion)} <br /> <HiStatusOffline style={{color:"red"}}/> Fuera de Linea
                </p>
            </div>
        </Col>
        </>
    }

    return (linea);
}
