import React, { useState, useContext } from 'react'

//import context
import {TransactionContext} from '../context/GlobalState';

function AddTransaction() {
    const {addTrasaction} = useContext(TransactionContext);

    let [amount, setAmount] = useState();
    let [desc, setDesc] = useState();

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            amount: +amount,
            desc
        }

        addTrasaction(newTransaction);
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br /> (negative - expense, positive - income)</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction;
