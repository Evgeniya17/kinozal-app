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
    {"image":hors_de_prix, "title":"Роковая красотка"},
    {"image":back, "title":"Назад в будущее"},
    {"image":fast_five, "title":"Форсаж 5"},
    {"image":queen, "title":"Богемная рапсодия"},
    {"image":dragon, "title":"Как приручить дракона 3"},
    {"image":venom, "title":"Веном"},
    {"image":ford_vs_ferrari, "title":"Ford против Ferrari"},
    {"image":squad, "title":"Oтряд самоубийц"},
    {"image":one_plus_one, "title":"1+1"},
    {"image":green_book, "title":"Зеленая книга"},
    {"image":founder, "title":"Основатель"},
    {"image":tiffany, "title":"Завтрак у Тиффани"},
  ]


function Main(){
    return(
        <main id="main"> 
            <h2 className="main-title">Новые фильмы</h2>
                {movies.map(item => <NewMovies image ={item.image} alt={item.title} title={item.title}/>)}
            <h2 className="main-title">ТОП за неделю</h2>
                {movies.map(item => <TopMovies image ={item.image} alt={item.title} title={item.title}/>)}
            <h2 className="main-title">Новости кино</h2>
             <MovieNews/>
        </main>
    )
}

export default Main;