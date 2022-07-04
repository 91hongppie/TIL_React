import './App.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import { useState } from 'react';
import { data, a } from './data'

function App() {

  let [shoes] = useState(data);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#pricing">Cart</Nav.Link>
          </Nav>
        </Container>

      </Navbar>
      <div className={'main-bg'}> </div>

      <div className={'container'}>
        <div className={'row'}>
            {shoes.map((value) => {
              return <Card value={value} />

            })}

          </div>
        </div>
    </div>
  );
}

function Card(props) {
    const shoes = props.value
  return (
      <div className={'col-md-4'}>
        <img src={`https://codingapple1.github.io/shop/shoes${shoes.id + 1}.jpg`} width={'80%'}/>
        <h4>{shoes.title}</h4>
        <p>{shoes.content}</p>
        <p>{shoes.price}</p>
      </div>
  )
}

export default App;
