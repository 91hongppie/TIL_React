import './App.css';
import { Button, Navbar, Container, Nav, Row, Col, Toast } from 'react-bootstrap'
import {createContext, useEffect, useState} from 'react';
import { data, a } from './data'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail'
import axios from 'axios'
import Cart from "./routes/Cart";

export let Context1 = createContext()

function App() {

  useEffect(() => {
    if (!localStorage.getItem('watched')) {
      localStorage.setItem('watched', JSON.stringify([]))
    }
  }, [])



  let [shoes, setShoes] = useState(data);
  let [재고] = useState([10, 11, 12])
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }}>ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main shoes={shoes} setShoes={setShoes}/>} />
        <Route path="/detail/:id" element={
            <Context1.Provider value={{ 재고 }}>
                <Detail shoes={shoes} />
            </Context1.Provider>
        } />
        <Route path="/about" element={<About />} >
          <Route path='member' element={<div>멤버임</div>} />
          <Route path='location' element={<div>위치정보임</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path='two' element={<div>생일기념 쿠폰받기</div>} />
        </Route>

        <Route path='/*' element={<div>없는 페이지잉이이익</div>}/>

          <Route path="/cart" element={<Cart />} />
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
  const setShoes = props.setShoes
  const [count, setCount] = useState(0)
  return (
  <>
    <div className={'main-bg'}> </div>
    <div className={'container'}>
      <div className={'row'}>
          {shoes.map((value, idx) => {
            return <Card value={value} i={idx} key={idx}/>

          })}
      </div>
    </div>
    <button onClick={() => {
      if (count < 2) {

        axios.get(`https://codingapple1.github.io/shop/data${count+2}.json`).then((res) => {
          setShoes([...shoes, ...res.data])
          setCount(count+1)
        }).catch((e) => {
          console.log(e)
        }).finally(() => {
          
        })
        
      } else {

        alert('더 이상 신발이 없습니다.')
      }
    }}>더보기</button>
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
