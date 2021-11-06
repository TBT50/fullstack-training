import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Bookkeaper</h1>
      <nav>
        <ul>
          <li>
            <Link to="/invoices">Invoices</Link>
          </li>
          <li>
            <Link to="/expenses">Expenses</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
