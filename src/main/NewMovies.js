import './Main.css';

function NewMovies(props){
    return(
        <div id="new-movies">
            <figure className="flex-item">
                <img src= {props.image} alt={props.title}/>
                <figcaption className="movie-title">{props.title}</figcaption>
            </figure> 
        </div>
    )
}

export default NewMovies;
