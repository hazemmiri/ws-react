
// import  Navbar from 'react-bootstrap/Navbar';
import { Nav , Container , Navbar , Card , Button } from 'react-bootstrap';
import "./App.css"


function App() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Naruto</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Container</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <img className='myImg'src='https://wallpapers.com/images/high/anime-gaming-rlaztgtywicvpjlp.webp' alt='Naruto'/>
      <div className='Naruto_cards'>
      <Card className='naruto_card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/564x/54/92/c3/5492c30316f180709e6461397dc2c049.jpg" />
      <Card.Body>
        <Card.Title>wanted</Card.Title>
        <Card.Text>
        Kakashi Hatake est un personnage du manga Naruto créé par Masashi Kishimoto. Dans l'univers de la série, Kakashi est un ninja d’élite du village de Konoha
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className='naruto_card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/564x/64/e5/7e/64e57e908953c86d2491b7f3fca103c9.jpg" />
      <Card.Body>
        <Card.Title>wanted</Card.Title>
        <Card.Text>
        Naruto est un shōnen manga écrit et dessiné par Masashi Kishimoto.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card><Card className='naruto_card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/564x/b2/05/76/b20576ef0113d22ff475da6d54560908.jpg" />
      <Card.Body>
        <Card.Title>wanted</Card.Title>
        <Card.Text>
        Obito Uchiwa est l'un des principaux antagonistes du manga Naruto
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card><Card className='naruto_card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/564x/58/3d/92/583d9277c0393c6f7b175a772261c2e7.jpg" />
      <Card.Body>
        <Card.Title>wanted</Card.Title>
        <Card.Text>
        Itachi Uchiwa est un personnage du manga Naruto. Frère aîné de Sasuke Uchiwa et excellent ninja de Konoha,
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
      
      <Card body style={{textAlign:"center"}}>copyright 2023 anime websites.</Card>
    </>
      );
}

export default App;
