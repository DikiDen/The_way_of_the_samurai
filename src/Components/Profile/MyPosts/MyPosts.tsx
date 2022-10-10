import classes from './MyPosts.module.css';
import Post from "./Post/Post.tsx";

const MyPosts = (props) => {
    return (
        <div className={classes.content}>
            {props.hey}
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message='Hi, how are you?' likesCount='0'/>
                <Post message='It is my first post' likesCount='23'/>
            </div>
        </div>
    )
}

export default MyPosts;