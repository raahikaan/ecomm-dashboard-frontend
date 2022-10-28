import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto nav_bar_wrapper">
                        <Link to={'/'}>Home</Link>
                        <Link to={'/register'}>Register</Link>
                        <Link to={'/login'}>Login</Link>
                        <Link to={'/add'}>Add Product</Link>
                        <Link to={'/update'}>Update Product</Link>
                        <Link to={'/contact'}>Contact</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar