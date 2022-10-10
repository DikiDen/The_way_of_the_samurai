import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.tsx';

const Profile = () => {
    return (
        <div>
            <div>
                <img src='http://zabavniks.com/wp-content/uploads/Bamboo_24_27110941.jpg'/>
            </div>
            <div>
                Ava + description
            </div>
            <MyPosts hey='yo'/>
        </div>
    )
}

export default Profile;