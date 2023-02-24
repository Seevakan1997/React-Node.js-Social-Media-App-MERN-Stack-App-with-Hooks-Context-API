import React, { useState } from 'react'
import './post.css'
import { MoreVert as MoreVertIcon} from '@mui/icons-material';


export default function Post() {

    const [like,setLike] = useState(0);
    const [isLiked,setIsLike] = useState(false);

    const likeHandler =()=>{
        setLike (isLiked ? like-1 : like+1)
        setIsLike(!isLiked)
    }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src='/assets/2.jpg'
              alt=""
            />
            <span className="postUsername">
              Seevakan
            </span>
            <span className="postDate">2/24/2023</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hiiiii</span>
          <img className="postImg" src='/assets/9.jpg' alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
            <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
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
