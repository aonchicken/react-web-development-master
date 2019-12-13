import React, {Component} from 'react'

class Calculator extends Component {

    showOrders(orders) {
        if (!orders || orders.length === 0) {
            return <li className="text-right text-muted title">No Order</li>
        } else {
            return orders.map(order => {
                return (
                    <li key={order.product.id} className="text-right text-muted title">
                        {order.product.productName} x {order.quantity} = {order.product.unitPrice * order.quantity}
                        <button className="btn btn-light btn-sm"
                                onClick={() => this.props.onDelOrder(order.product)}>X
                        </button>
                    </li>
                )
            })
        }
    }

    render() {

        const {totalPrice, orders} = this.props

        return (
            <div>
                <h1>{totalPrice}</h1>
                <hr/>
                <ul className="list-unstyled">
                    {this.showOrders(orders)}
                </ul>
                <hr/>
                <button className="btn btn-block btn-danger title" onClick={() => {
                    return this.props.onConfirmOrder();
                }}>Submit
                </button>
                <button className="btn btn-block btn-secondary title" onClick={() => {
                    return this.props.onCancelOrder();
                }}>Cancel
                </button>
            </div>
        )
    }
}

export default Calculator
