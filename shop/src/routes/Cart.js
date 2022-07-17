import {Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import { setAge } from '../store/userSlice';
import { setStock } from '../store';

function Cart() {

    let state = useSelector(state => state)
    let dispatch = useDispatch()

    return (
        <div>
            <h6>{state.user.name} {state.user.age}의 장바구니</h6>
            <button onClick={() => {
                dispatch(setAge(Math.floor(Math.random() * 10)))
            }}>버튼</button>
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                </tr>
                </thead>
                <tbody>
                {state.stock.map((el, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{el.id+1}</td>
                            <td>{el.name}</td>
                            <td>{el.count}</td>
                            <td><button onClick={() => {
                                dispatch(setStock({el}));
                            }}>+</button></td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </div>
    )
}

export default Cart