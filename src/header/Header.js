import './Header.css';
import Nav from './Nav';

function Header(){
    return(
        <header id="title">
            <h1 className="header-title">КиноЗал</h1>
            <h2 className="header-about" >Найди свое кино</h2>
            <Nav/>
        </header>
      
    )
}

export default Header;