import {BrowserRouter as  NavLink} from 'react-router-dom';
import { Link } from "react-scroll";
import './Nav.css';

function Nav(){       
    return(
        <nav id="navigation">
            <ul className="left-links">
                <li className="nav-item "> 
                    <NavLink className="nav-link" activeclass="active" exact to="/main">Главная</NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink className="nav-link" to="/films">Фильмы</NavLink>
                </li>
                <li className="nav-item "> 
                    <Link className="nav-link" activeclass="active" to="/#" spy={true} smooth={true} offset={-50} duration={500}>Сериалы</Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link" to="contacts" spy={true} smooth={true} offset={-50} duration={500}>Контакты</Link>
                </li> 
            </ul>
            <ul className="right-links">
                <li className="nav-item"> 
                    <Link className="nav-link" to="new-movies" spy={true} smooth={true} offset={-50} duration={500}>Новинки</Link> 
                </li>
                <li className="nav-item"> 
                    <Link className="nav-link" to="rating-block" spy={true} smooth={true} offset={-50} duration={500}>Рейтинг</Link> 
                </li>
                <li className="nav-item"> 
                    <Link className="nav-link" activeclass="active" to="/#" spy={true} smooth={true} offset={-50} duration={500}>Раздачи</Link>
                </li>
            </ul>
        </nav>

    )
}

export default Nav;