import './MovieNews.css';

import news_1 from './movie-news-img/news_1.png';
import news_2 from './movie-news-img/news_2.png';
import news_3 from './movie-news-img/news_3.png';

const mainNews =[
    {id:1,
     "news_title":'Кейт Бекинсейл представила фильм "Другой мир: Войны крови"', 
     "image":news_1, 
     "alt":"news_image", 
     "preview":'Кейт Бекинсейл представила в Мексике свой новый фильм "Другой мир: Войны крови". На красной дорожке актриса позировала фотографам в роскошном красном платье. В фильме речь пойдет о Селене - Воительница-вампир Селена вступает в свой последний и решающий бой между оборотнями и кланом вампиров, который предал ее. В украинских кинотеатрах картину можно увидеть с 1 декабря...'},
    {id:2,
      "news_title":'Критики Нью-Йорка выбрали лучший фильм 2016 года',
      "image":news_2, 
      "alt":"news_image",
      "preview":'Им стал мюзикл "Ла-Ла Ленд", который снял режиссер Дэмьен Шазелл. Лучшим актером года был признан Кейси Аффлек, сыгравший в картине "Манчестер у моря", а в аналогичной женской категории победа была присуждена Изабель Юппер снимавшаяся в фильме "Она". Лучшей актрисой второго плана названа Мишель Уильямс, сыгравшая в драме "Некоторые женщины", а лучшим актером второго плана - Махершалалхашбаз Али за роль в картине "Лунный свет"...'},
    {id:3,
     "news_title":'Крис Прэтт и Дженнифер Лоуренс представили "Пассажиров" в Париже',
     "image":news_3,
      "alt":"news_image",
      "preview":'Хотя до премьеры "Пассажиров" остается еще почти месяц, промо-тур в поддержку нового фильма уже начался: Крис Прэтт и Дженнифер Лоуренс, исполнившие в фильме главные роли, представили "Пассажиров" в рамках фотоколла в Париже. В кинотеатрах "Пассажиры" появятся под занавес 2016 года – 22 декабря...'},
]

function MovieNews(){
    return(
        <div className="movie-news-block">
            {mainNews.map(item => <MovieNewsItem key={item.id} title={item.news_title} image ={item.image} alt={item.alt} text={item.preview} />)}
        </div>
    )
}

function MovieNewsItem(props){
    return(
        <div className="movie-news-item">
            <a className="news-title" href="/#">{props.title}</a>
            <div className="content">
                <img className="movie-news-img" src={props.image} alt={props.alt}/>
                <p className="preview-text">{props.text}</p>
                <button className="detail-btn" type="button">Подробней</button>
            </div>
        </div>
    )
}

export default MovieNews;