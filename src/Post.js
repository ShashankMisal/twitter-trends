import React, { forwardRef } from 'react'
import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import InputIcon from '@material-ui/icons/Input';
import moment from 'moment'
import './Post.css'


const Post = forwardRef( ({displayName,userName,verified,text,image,avatar,date},ref) => {
    return (
        <div className="post" ref={ref}>
            
            <div className="post__avatar">
            <Avatar src ={avatar} />  
            </div>
        
            <div className="post__body">
                
                <div className="header">
                    
                    <div className="post__headerText">
                        <h3>
                            {displayName}{" "}
                            <span className="post__headerSpecial">
                               {verified && <VerifiedUserIcon className="post__badge"/>}
                                @{userName}{" "}
                                <span style={{marginLeft:"100px"}}>{moment(date.toDate()).calendar()}</span>
                            </span>
                        </h3>
                    </div>

                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>

                </div>

                <img  src={image} alt=""/>

                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" className="post__icon post__commentsIcon"/>
                    <RepeatIcon fontSize="small" className="post__icon post__retweetIcon"/>
                    <FavoriteBorderIcon fontSize="small" className="post__icon post__favIcon"/>
                    <InputIcon fontSize="small" className="post__icon post__shareIcon"/>
                </div>

            </div>
        </div>
    )
}
)
export default Post
