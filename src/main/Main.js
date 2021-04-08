import NewMovies from './NewMovies';
import TopMovies from './TopMovies';
import MovieNews from './MovieNews';
import './Main.css';

import hors_de_prix from './movie-img/hors_de_prix.png';
import back from './movie-img/back.png';
import fast_five from './movie-img/fast_five.png';
import queen from './movie-img/queen.png';
import dragon from './movie-img/dragon.png';
import venom from './movie-img/venom.png';
import ford_vs_ferrari from './movie-img/ford_vs_ferrari.png';
import squad from './movie-img/squad.png';
import one_plus_one from './movie-img/one_plus_one.png';
import green_book from './movie-img/green_book.png';
import founder from './movie-img/founder.png';
import tiffany from './movie-img/tiffany.png';

const movies=[
    {id:1,"image":hors_de_prix, "title":"Роковая красотка"},
    {id:2,"image":back, "title":"Назад в будущее"},
    {id:3,"image":fast_five, "title":"Форсаж 5"},
    {id:4,"image":queen, "title":"Богемная рапсодия"},
    {id:5,"image":dragon, "title":"Как приручить дракона 3"},
    {id:6,"image":venom, "title":"Веном"},
    {id:7,"image":ford_vs_ferrari, "title":"Ford против Ferrari"},
    {id:8,"image":squad, "title":"Oтряд самоубийц"},
    {id:9,"image":one_plus_one, "title":"1+1"},
    {id:10,"image":green_book, "title":"Зеленая книга"},
    {id:11,"image":founder, "title":"Основатель"},
    {id:12,"image":tiffany, "title":"Завтрак у Тиффани"},
  ]

function Main(){
    return(
        <main id="main"> 
            <h2 className="main-title">Новые фильмы</h2>
                {movies.map(item => <NewMovies key={item.id} image ={item.image} alt={item.title} title={item.title}/>)}
            <h2 className="main-title">ТОП за неделю</h2>
                {movies.map(item => <TopMovies key={item.id} image ={item.image} alt={item.title} title={item.title}/>)}
            <h2 className="main-title">Новости кино</h2>
             <MovieNews/>
        </main>
    )
}

export default Main;