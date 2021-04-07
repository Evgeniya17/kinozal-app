import './CommentForm.css';

function CommentForm(){
    return(
            <div className="comment-form-block">
                <h2 className="title">Оставить комментарий</h2>
                <form className="comment-form" action="#">
                    <input type="text" name="name" id="user-name" placeholder="Ваше имя"/>
                    <input type="text" id="user-email" name="email" placeholder="Укажите Email"/>
                    <textarea name="comment" id="user-comment" cols="30" rows="10" placeholder="Напишите свой комментарий здесь..."></textarea>
                    <input type="submit" id="send-btn" value="Отправить"/>
                </form>
            </div>
    )
}

export default CommentForm;