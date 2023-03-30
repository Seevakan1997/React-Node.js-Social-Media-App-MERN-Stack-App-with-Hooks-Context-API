import React, { useEffect, useState } from 'react'
import './post.css'
import { MoreVert as MoreVertIcon} from '@mui/icons-material';
import axios from "axios";
import * as timeago from 'timeago.js';

export default function Post({post}) {

    const [like,setLike] = useState(post.likes.length);
    const [isLiked,setIsLike] = useState(false);
    const [user,setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const likeHandler =()=>{
        setLike (isLiked ? like-1 : like+1)
        setIsLike(!isLiked)
    }

    useEffect(()=>{
      const fetchUser = async ()=>{
        const res = await axios.get(`users/${post.userId}`);
        setUser(res.data);
      }
      fetchUser();
    },[post.userId])
  

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={user.profilePicture || PF+"no-profile.jpg"}
              alt=""
            />
            <span className="postUsername">
              {user.username}
            </span>
            <span className="postDate">{timeago.format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={`${PF}like.png`} onClick={likeHandler} alt="" />
            <img className="likeIcon" src={`${PF}heart.png`} onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">0 comments</span>
          </div>
        </div>
      </div>
    </div>
    
  )
}
