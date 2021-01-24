import { Button } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import "./TweetBox.css"
import { Avatar } from '@material-ui/core'
import AddPhotoAlternateOutlinedIcon from '@material-ui/icons/AddPhotoAlternateOutlined';
import GifIcon from '@material-ui/icons/Gif';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import InsertChartOutlinedOutlinedIcon from '@material-ui/icons/InsertChartOutlinedOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import db from './firebase'

function TweetBox() {


    const [TweetText, setTweetText] = useState("")
    const [TweetImage, setTweetImage] = useState("")
    const [displayName, setdisplayName] = useState("")
    const [showDisplayName, setshowDisplayName] = useState(true)
    const [showImageInput, setshowImageInput] = useState(false)

    
    
    
    useEffect(()=>{
        const displayName = localStorage.getItem("displayName"); 
        if(displayName){
            setdisplayName(JSON.parse(displayName));
        } 

        const showDisplayName = localStorage.getItem("showDisplayName"); 
        if(showDisplayName){
            setshowDisplayName(JSON.parse(showDisplayName));
        }
    },[]);
    
    
    useEffect(()=>{
        localStorage.setItem("displayName",JSON.stringify(displayName))
        localStorage.setItem("showDisplayName",JSON.stringify(showDisplayName))     
    })

    const sendTweet = (e) =>{

        e.preventDefault();

      if(displayName!=="")
      {  
          if(TweetText!=="")
            {
                db.collection('posts').add({
                        displayName: displayName,
                        userName:displayName + "321",
                        verified: true,
                        text: TweetText,
                        image:TweetImage,
                        createdAt:new Date(),
                        avatar:"https://avataaars.io/?avatarStyle=Circle&topType=Turban&accessoriesType=Wayfarers&hatColor=Red&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Wink&eyebrowType=UpDownNatural&mouthType=Serious&skinColor=Pale"
                })
                setTweetText("");
                setTweetImage("");
            }else{
                alert("Add Some Text")
            }
        }else{
            alert("Add Display Name")
        }
        
    } 



    const displayNameInput = e =>{
        e.preventDefault();
        displayName!==""?
        setshowDisplayName(false)
        :alert("Please Enter Display Name\nYour Tweet will Be visible by this name.")
    }


    const handleAddImage = () =>{
        setshowImageInput((prev) => !prev)
    }


    return (
        <div className="tweetBox">
            

           { (showDisplayName===true)?
                <div> 
                    <input  
                    required
                    className="tweetBox__nameInput"
                    value={displayName}
                    placeholder="Enter Display Name"
                    type="text"
                    onChange={e => setdisplayName(e.target.value)}
                    />
                
                    <Button className="tweetBox__okButton" onClick={displayNameInput}>
                        <CheckCircleIcon/>
                    </Button>
        
                </div>:""
            }

            <form >
                <div className="tweetBox__input">
                    <Avatar src ="https://avataaars.io/?avatarStyle=Circle&topType=Turban&accessoriesType=Wayfarers&hatColor=Red&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Wink&eyebrowType=UpDownNatural&mouthType=Serious&skinColor=Pale" />  
                    <input 
                    placeholder="What's Happening..." 
                    value={TweetText}
                    onChange={ e => setTweetText(e.target.value)}
                    />
                </div> 

                
                { 
                
                showImageInput?
                <input  
                className="tweetBox__imageInput"
                value={TweetImage}
                placeholder="Enter Image URL"
                type="text"
                onChange={e => setTweetImage(e.target.value)}
                />:"" 
                
                }
                
                <div className="tweetBox__footer">
                  
                    <AddPhotoAlternateOutlinedIcon className="tweetBox__Icon tweetBox__addImageIcon" onClick={handleAddImage}/>
                    <GifIcon className="tweetBox__Icon tweetBox__gifIcon" onClick={handleAddImage}/>
                    <InsertChartOutlinedOutlinedIcon className="tweetBox__Icon"/>
                    <SentimentSatisfiedOutlinedIcon className="tweetBox__Icon tweetBox__emojiIcon"/>
                    <EventOutlinedIcon className="tweetBox__Icon "/>

                <Button className="tweetBox__tweetButton" type="submit" onClick={sendTweet}>
                    Tweet 
                </Button>

                </div>
            </form>
        </div>
    )
}

export default TweetBox
