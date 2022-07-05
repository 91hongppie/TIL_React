import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";



function Detail(props) {

    let [count, setCount] = useState(0);
    let [alertView, setAlertView] = useState(true);
    let [input, setInput] = useState('')

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
            <input type="text" onChange={(e) => {
                setInput(e.target.value)
            }}/>
        </div> 
    )
}

export default Detail