import React, {useContext} from 'react';

//import context
import {TransactionContext} from '../context/GlobalState';


function Balance() {
    const {transactions} = useContext(TransactionContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    )
}

export default Balance;
