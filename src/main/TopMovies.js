import './Main.css';

function TopMovies(props){
    return(
        <div id="top-movies">
            <figure className="flex-item">
                <img src={props.image} alt={props.title}/>
                <figcaption className="movie-title">{props.title}</figcaption>
            </figure>  
        </div>
    )
}

export default TopMovies;