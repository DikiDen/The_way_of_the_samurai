import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://coolsen.ru/wp-content/uploads/2021/06/149-7.jpg'/>
            {props.message}
            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>

    )
}

export default Post;