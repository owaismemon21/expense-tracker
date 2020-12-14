import React, {useContext} from 'react';
//import context
import {TransactionContext} from '../context/GlobalState';

function Transaction({transaction}) {
    const {deleteTrasaction} = useContext(TransactionContext);
    const sign = transaction.amount < 0 ? '-': '+';
    return (
        <li className={transaction.amount < 0 ? 'minus': 'plus'}>
            {transaction.desc}
    <span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn" onClick={() => deleteTrasaction(transaction.id)}>x</button>
        </li>
    )
}

export default Transaction;
