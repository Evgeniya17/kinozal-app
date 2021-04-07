import FilmContent from './FilmContent';
import Comments from './Comments';
import CommentForm from './CommentForm';
import './FilmsPage.css';

function Films(){
    return(
        < div id="films-block">
            <FilmContent/>
            <Comments/>
            <CommentForm/>
        </div>
    )
}

export default Films;