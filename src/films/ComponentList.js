import Comment from './Comment';

import './FilmsPage.css';

const comments=[
    {"postId": 1,
     "id": 1,
     "username": "Владимир",
     "comment":"Фильм реализован неплохо, однако удивления и особой радости как от первой части лично у меня не возникло. Возможно, это связано с тем, что все ходы и весь концепт фильма кочует из первого фильма и не изменяется, но что поделаешь, видимо, это беда всех сиквелов. Кому-то фильм может показаться затянутым и очень сложным для восприятия, так оно и есть. Сценаристы запихали туда очень много поворотов и не раскрыли их до конца. Слишком много вопросов у зрителя возникает по ходу сюжета и слишком мало ответов он получает. Хотя, может в этом и есть фокус, ведь настоящие фокусники секретов не раскрывают."
    },
    { "postId": 2,
     "id": 2,
     "username":"Евгения",
    "comment":"Я очень люблю фильмы о фокусах и людях, которые владеют их секретами. Искусство создавать хитрые иллюзии, которые невозможно понять с ходу, поневоле вызывает уважение, даже если это простая ловкость рук. Таких фильмов я знаю совсем немного, но все они хорошие. А в 2013 году режиссер Луи Летерье представил миру красочный и захватывающий блокбастер «Иллюзия обмана» — мой фаворит в данном жанровом сегменте."
    },
]

function ComponentList(){
    return(
            <div className="reviews-block">
                <h2 className="title">Отзывы о фильме</h2>
                {comments.map(item => <Comment key={item.id} username={item.username} comment={item.comment}/>)}
            </div>
    )
}

export default ComponentList;