import React from 'react';
import './News.css';
import news_img from './news-img/news_img.png';

const news=[
    {id:1,"image":news_img, "alt":"news", "text":"Мы запустили новый сервис...", "date":"5 декабря 2021"},
    {id:2,"image":news_img, "alt":"news", "text":"На сайте добавлен новый функционал...", "date":"6 декабря 2021"},
    {id:3,"image":news_img, "alt":"news", "text":"Скорость скачиваня...", "date":"7 декабря 2021"},
    {id:4,"image":news_img, "alt":"news", "text":"Добавлены новые фильмы...", "date":"8 декабря 2021"},
    {id:5,"image":news_img, "alt":"news", "text":"Количество пользователей...", "date":"9 декабря 2021"},
]    

function News(){
    return(
        <div className="news-block">
             <h2 className="news-header"> Новости сайта</h2>
            {news.map(item => <NewsItem key={item.id} image ={item.image} alt={item.alt} link={item.text} text ={item.date} />)}
        </div>
    )
}


function NewsItem(props){
     return(
        <div className="news-item">
            <div className="news-content" >
                <img className="news-img" src={props.image} alt={props.alt}/>
                <a className="news-link" href="#">{props.link}</a>
            </div>
            <span className="news-date">{props.text}</span>
        </div>
    )
}

export default News;

