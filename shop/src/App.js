import './App.module.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import { useState } from 'react';
import { data, a } from './data'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail'

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }}>ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main shoes={shoes}/>} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/about" element={<About />} >
          <Route path='member' element={<div>멤버임</div>} />
          <Route path='location' element={<div>위치정보임</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path='two' element={<div>생일기념 쿠폰받기</div>} />
        </Route>

        <Route path='/*' element={<div>없는 페이지잉이이익</div>}/>
      </Routes>


    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}


function Main(props) {
  const shoes = props.shoes
  return (
  <>
    <div className={'main-bg'}> </div>
    <div className={'container'}>
      <div className={'row'}>
          {shoes.map((value, idx) => {
            return <Card value={value} i={idx} />

          })}
      </div>
    </div>
  </>
  )
}

function Card(props) {
    const shoes = props.value
  return (
      <div className={'col-md-4'}>
        <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width={'80%'}/>
        <h4>{shoes.title}</h4>
        <p>{shoes.content}</p>
        <p>{shoes.price}</p>
      </div>
  )
}

export default App;
