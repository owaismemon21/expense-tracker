import React, {useContext} from 'react';

//import context
import {TransactionContext} from '../context/GlobalState';

//import transaction list
import Transaction from './Transaction';

function TransactionList() {
    const {transactions} = useContext(TransactionContext);
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                    )
                )}
            </ul>
        </>
    )
}

export default TransactionList;
