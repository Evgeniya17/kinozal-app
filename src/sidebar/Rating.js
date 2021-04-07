import React from 'react';
import './Rating.css';

const rating=[
    {"rating":"9.7", "name":"Роковая красотка"},
    {"rating":"9.5", "name":"Назад в будущее"},
    {"rating":"9.4", "name":"Форсаж 5"},
    {"rating":"9.0", "name":"Богемная рапсодия"},
    {"rating":"8.9", "name":"Как приручить дракона 3"},
    {"rating":"8.7", "name":"Веном"},
    {"rating":"8.5", "name":"Завтрак у Тиффани"},
    {"rating":"8.2", "name":"1+1"},
    {"rating":"7.9", "name":"Зеленая книга"},
    {"rating":"7.8", "name":"Основатель"},
    {"rating":"7.5", "name":"Oтряд самоубийц"},
]    

let moviename = React.createRef();

function Rating(){
    return(
        <div id="rating-block">
             <h2 className="rating-title"> Рейтинг фильмов</h2>
            {rating.map(item => <RatingItem name={item.name} data ={item.rating} />)}
        </div>
    )
}

function RatingItem(props){ 
    return(
        <div className="rating-item">
            <p className="movie-name" ref={moviename}>{props.name}</p>
            <span className="movie-rating">{props.data}</span>
        </div>
    )
}

export default Rating;