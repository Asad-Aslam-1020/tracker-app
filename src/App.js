import "./App.css";
import CurrentBalance from "./components/currentBalance/currentBalance";
import Heading from "./components/heading/heading";
import IEbox from "./components/income-expence-box/IEbox";
import TransactionHistory from "./components/TransactionHistory/TH";
import NewTransaction from "./components/newTransaction/newTransaction";

function App() {
  return (
    <div>
      <div id="container">
        <Heading />
        <CurrentBalance />
        <IEbox />
        <TransactionHistory />
        <NewTransaction />
      </div>
    </div>
  );
}

export default App;
