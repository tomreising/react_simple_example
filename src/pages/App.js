import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <div>
        Welcome to my simple page
      </div>
      <ul>
        <li>
          <Link to="/hello">hello</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
