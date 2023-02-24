import React from 'react'
import './share.css'
import { PermMedia as PermMediaIcon, Label as LabelIcon, Room as RoomIcon, EmojiEmotions  as EmojiEmotionsIcon } from '@mui/icons-material';


export default function Share() {
    return (
        <div className="share">
          <div className="shareWrapper">
            <div className="shareTop">
              <img className="shareProfileImg" src="/assets/2.jpg" alt="" />
              <input
                placeholder="What's in your mind ?"
                className="shareInput"
              />
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMediaIcon htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <LabelIcon htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <RoomIcon htmlColor="green" className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon"/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
          </div>
        </div>
      );
}
