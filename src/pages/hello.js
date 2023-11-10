import { Link } from 'react-router-dom';

function HelloPage() {
    return (
        <div>
            <div>
                Hello world
            </div>
            <br />
            <div>
                <Link to="/">home</Link>
            </div>
        </div>
    )
}

export default HelloPage;