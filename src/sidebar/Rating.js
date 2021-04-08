import React from 'react';
import './Rating.css';

const rating=[
    {id:1,"rating":"9.7", "name":"Роковая красотка"},
    {id:2,"rating":"9.5", "name":"Назад в будущее"},
    {id:3,"rating":"9.4", "name":"Форсаж 5"},
    {id:4,"rating":"9.0", "name":"Богемная рапсодия"},
    {id:5,"rating":"8.9", "name":"Как приручить дракона 3"},
    {id:6,"rating":"8.7", "name":"Веном"},
    {id:7,"rating":"8.5", "name":"Завтрак у Тиффани"},
    {id:8,"rating":"8.2", "name":"1+1"},
    {id:9,"rating":"7.9", "name":"Зеленая книга"},
    {id:10,"rating":"7.8", "name":"Основатель"},
    {id:11,"rating":"7.5", "name":"Oтряд самоубийц"},
]    

let moviename = React.createRef();

function Rating(){
    return(
        <div id="rating-block">
             <h2 className="rating-title"> Рейтинг фильмов</h2>
            {rating.map(item => <RatingItem key={item.id} name={item.name} data ={item.rating} />)}
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