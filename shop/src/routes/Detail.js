import {useContext, useEffect, useState} from 'react';
import { Nav } from 'react-bootstrap';
import { useParams } from "react-router-dom";

import { Context1 } from './../App.js';

function Detail(props) {

    let {재고, shoes} = useContext(Context1)
    console.log(재고, shoes)
    let [count, setCount] = useState(0);
    let [alertView, setAlertView] = useState(true);
    let [input, setInput] = useState('');
    let [tab, setTab] = useState(0);

    useEffect(() => {
        let a = setTimeout(() => {
            setAlertView(!alertView)
        }, 2000)
        return () => {
            clearTimeout(a);
        }
    }, [])

    useEffect(() => {
        if (isNaN(input)) {
            alert('숫자만 입력해주세요')
        }
    }, [input])
    // useEffect(() => { })  // 1. 재렌더링마다 코드실행하고 싶으면
    // useEffect(() => { }, []) // 2. mount시 1회 코드실행하고 싶으면
    // useEffect(() => {
    //     return  () => {
    //         // 3. unmount시 1회 코드실행하고 싶으면
    //     }
    // }, [])

    let {id} = useParams()
    let shoe = props.shoes.find((value) => value.id === parseInt(id))

    return (
        <div className="container">
            { alertView
                ?   <div className={'alert alert-warning'}>
                        2초이내 구매시 할인
                    </div>
                : null
            }
            {재고}
            { count }
            <button onClick={() => {
                setCount(count+1)
            }}>버튼</button>
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${shoe.id+1}.jpg`} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{shoe.title}</h4>
                    <p>{shoe.content}</p>
                    <p>{shoe.price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0">
                {[0, 1, 2].map((value) => {
                    
                return <Nav.Item>
                    <Nav.Link eventKey={`link${value}`} onClick={() => {
                        setTab(value)
                    }}>{`버튼${value}`}</Nav.Link>
                </Nav.Item>
                })}
            </Nav>
            <TabContent tab={tab}/>
        </div> 
    )
}

function TabContent({tab}) {

    let [fade, setFade] = useState('')
    let { 재고 } = useContext(Context1);
    useEffect(() => {
        setTimeout(() => { setFade('end') }, 100)
        return () => { setFade('') }
    }, [tab])

    return <div className={`start ${fade}`}>
        {[ <div>{재고}</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
}


export default Detail