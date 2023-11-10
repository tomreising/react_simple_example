import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='container-body'>
      <div>
        Welcome to my simple page
      </div>
      <ul>
        <li>
          <Link to="/activity">Get something to do</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
