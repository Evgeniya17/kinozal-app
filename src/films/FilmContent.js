import './FilmsPage.css';

function FilmContent(){
    return(
        <>
            <div className="film-content">
                <h2 className="title">Иллюзия обмана 2</h2>
                <div className="iframe-video">
                    <iframe 
                        src="https://www.youtube.com/embed/4I8rVcSQbic"
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen 
                    />
                    <div className="iframe-description">
                         <span className="info-title">Год:</span> <span className="info">2016</span>
                         <span className="info-title">Рейтинг:</span> <span className="info">8.8</span>
                         <span className="info-title">Режиссер: </span> <span className="info">Джон М.Чу</span>
                    </div>
                   
                </div>
            </div>
            <div className="film-description">
                <h2 className="title">Описание фильма</h2>
                <p className="description">«Четыре всадника» — команда иллюзионистов, которая смогла не только покорить многомиллионную
                   публику своими выступлениями, но и провернуть пожалуй самую крупную аферу за последние несколько десятилетий. Тогда они 
                   смогли добиться желаемого результата и провести вокруг пальца известного разоблачителя фокусов. Спустя несколько лет группа 
                   иллюзионистов собирается вновь и теперь они готовы удивить зрителя новыми более удивительными номерами. Их магия стала еще 
                   более совершенна, но вместе с ней опасней стали и враги. На этот раз «всадникам» предстоит очень сильно постараться, чтобы 
                   спасти свою репутацию и вывести на «чистую воду» влиятельного и жестокого техномагната...</p>
            </div>
        </>
    )
}

export default FilmContent;