import FilmContent from './FilmContent';
import ComponentList from './ComponentList';
import CommentForm from './CommentForm';
import './FilmsPage.css';

function Films(){
    return(
        < div id="films-block">
            <FilmContent/>
            <ComponentList/>
            <CommentForm/>
        </div>
    )
}

export default Films;