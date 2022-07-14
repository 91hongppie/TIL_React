import {Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import { setUser, setStock } from '../store'

function Cart() {

    let state = useSelector(state => state)
    let dispatch = useDispatch()

    return (
        <div>
            {state.user}의 장바구니
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
                            <td>{idx+1}</td>
                            <td>{el.name}</td>
                            <td>{el.count}</td>
                            <td><button onClick={() => {
                                dispatch(setStock({el, idx}));
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