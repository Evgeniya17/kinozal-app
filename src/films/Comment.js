
function Comment(props){
    return(
        <div className="review">
            <h3 className="user-name">{props.username}</h3>
            <p className="comment">{props.comment}</p>
        </div>
    )
}

export default Comment;