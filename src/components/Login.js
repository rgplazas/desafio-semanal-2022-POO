import { useState, useContext } from "react";
import Contexto from "../context/Contexto";
import { useNavigate } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { BsGoogle, BsGithub } from "react-icons/bs";
import "../assets/css/Login.css";

export default function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const { login, loginWithGoogle, resetPassword, loginWithGitHub, documentUserDB} = useContext(Contexto);

    const handleChange = ({ target: { value, name } }) =>
        setUser({ ...user, [name]: value });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const usuarioLogin = await login(user.email, user.password);
            documentUserDB(usuarioLogin);
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleLogin = async () => {
        try {
            const usuarioLoginGoogle = await loginWithGoogle();
            documentUserDB(usuarioLoginGoogle);
            navigate("/");
        } catch (error) {
            setError(error.message);
        }

    }

    const handleLoginGitHub = async () => {
        try {
            const usuarioLoginGitHub = await loginWithGitHub();
            documentUserDB(usuarioLoginGitHub);
            navigate("/");
        } catch (error) {
            setError(error.message);
        }

    }

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!user.email) return setError("Write an email to reset password");
        try {
            await resetPassword(user.email);
            setError('We sent you an email. Check your inbox')
        } catch (error) {
            setError(error.message);
        }
    };
    return (
        <>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <div className="border border-3 border-primary"></div>
                        <Card className="shadow fondoBackground">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    {error && <p style={{ 'color': 'red' }}>{error}</p>}
                                    <h2 className="fw-bold mb-2 text-uppercase ">Retos POO</h2>
                                    <p className=" mb-5">¡Por favor, introduzca su nombre de usuario y contraseña!</p>
                                    <div className="mb-3">
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-center">
                                                    Dirección de correo electrónico
                                                </Form.Label>
                                                <Form.Control name="email" className="fondoInput" type="email" placeholder="Ingresar email" onChange={handleChange} />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                                <Form.Label>Contraseña</Form.Label>
                                                <Form.Control name="password" className="fondoInput" type="password" placeholder="Password" onChange={handleChange} />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicCheckbox"
                                            >
                                                <p className="small">
                                                    <a className="text-primary" href="#!" onClick={handleResetPassword}>
                                                        ¿Olvidó su contraseña?
                                                    </a>
                                                </p>
                                            </Form.Group>
                                            <div className="d-grid">
                                                <Button variant="primary" type="submit">
                                                    Iniciar sesión
                                                </Button>
                                            </div>
                                        </Form>
                                        <div className="mt-3">
                                            <p className="mb-0  text-center">
                                                ¿No tienes una cuenta?{" "}
                                                <a href="/registro" className="text-primary fw-bold">
                                                    Únete
                                                </a>
                                            </p>
                                        </div>
                                        <div className="mt-3 mb-0 text-center">
                                            <Button className="m-4" onClick={handleLogin}><BsGoogle></BsGoogle></Button>
                                            <Button className="m-4" onClick={handleLoginGitHub}><BsGithub></BsGithub></Button>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
