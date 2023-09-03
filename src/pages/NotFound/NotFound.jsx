import {Link} from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <div id="error">
                <div class="fof">
                    <h1>Error 404</h1>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Link to='/'>
                        <button className="error__btn">НА ГЛАВНУЮ</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;