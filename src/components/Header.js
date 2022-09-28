import { useContext } from "react";
import Contexto from "../context/Contexto";
import Present from "./Present";
import { Container, Nav, Navbar } from "react-bootstrap";
import iconoCabecera from "../assets/statics/loading.gif";

export default function Header() {
    const { logout, user, updateUserDBConeccion} = useContext(Contexto);

    const handleLogout = async () => {
        updateUserDBConeccion(user);
        await logout()
    }

    let cabecera = "";

    if (user) {
        cabecera = <>
            <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/"><img alt="" src={iconoCabecera} width="30" height="30" className="d-inline-block align-top" />{' '}Retos de Programación</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/semanales2022">Ejercicios Semanales '22</Nav.Link>
                            <Nav.Link href="/mensuales2022">Apps Mensuales '22</Nav.Link>
                            <Nav.Link href="https://github.com/rgplazas/desafio-semanal-2022-POO">Proyecto en GitHub</Nav.Link>
                            <Nav.Link style={{ 'color': 'red' }} onClick={handleLogout}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Present></Present>
        </>;
    }

    return (cabecera);
}
