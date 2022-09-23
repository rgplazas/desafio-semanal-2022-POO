
import Col from 'react-bootstrap/Col';

export default function Usuarios(props) {
    const { uid, provider, name, images, email, conectado } = props;
    return (
        <>  
            <Col sm={12} md={6} lg={6} xl={6} id={uid} className="py-4">
                <div className="CardStep_cardStep__2EG0E">
                    <img src={images} alt="Foto de Perfil" style={{'border_radius': '460px'}}/>
                    <h3 className="CardStep_cardStep_title__1oEQ_">{name}</h3>
                    <p className="CardStep_cardStep_description__CVlpV">
                        * Mediante: {provider} <br />
                        * email: {email} <br />
                        * conectado: {conectado} <br />
                    </p>
                </div>
            </Col>
        </>
    )
}
