import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 

function App() {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Contato</li>
      </ul>
      <p>Footer</p>
    </Router>
  );
}

export default App;
