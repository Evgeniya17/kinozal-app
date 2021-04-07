import UserForm from './UserForm';
import News from './News';
import Rating from './Rating';
import SearchForm from './SearchForm';
import  './Sidebar.css';

function Sidebar(){
    return(
        <aside id="sidebar"> 
            <SearchForm/>
            <UserForm/>
            <News/>
            <Rating/>
        </aside>
      
    )
}

export default Sidebar;