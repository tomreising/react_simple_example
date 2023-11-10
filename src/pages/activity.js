import { Link } from 'react-router-dom';
import ThingsToDo from '../components/inputdata';
function ActivityPage() {
    return (
        <div className='container-body'>
            <div>
                Bored!? Click the Button Below To Get Some Ideas
            </div>
            <ThingsToDo />
            <div>
                <br />
                <Link to="/">home</Link>
            </div>
        </div>
    )
}

export default ActivityPage;