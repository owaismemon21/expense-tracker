import './App.css';

// import provider
import {TransactionProvider} from './context/GlobalState';

// import components
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';



function App() {
  return (
    <TransactionProvider>
      <div className="container">
        <Header />
        <hr />
        <div className="leftPannel">
          <Balance />
          <IncomeExpenses />
          <AddTransaction />
        </div>
        <div className="historyList">
          <TransactionList />
        </div>
      </div>
    </TransactionProvider>
  );
}

export default App;
