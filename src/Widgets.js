import React from 'react'
import { TwitterTimelineEmbed} from "react-twitter-embed"
import SearchIcon from "@material-ui/icons/Search";
import Whotofollow from "./Whotofollow"


function Widgets() {
    return (
        <div className="widgets">
            
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>


            <div className="widgets__widgetContainer">

        

            <h2 style={{marginBottom:"10px"}}>What's happening</h2>

            

                    {/* {/* <TwitterTweetEmbed tweetId={"858551177860055040"} /> */}

                    <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="benlionelscott1"
                    options={{ height: 320 }}
                    className="embededTweets"
                    /> 

        
            </div>
            <Whotofollow/>


        </div>
    )
}

export default Widgets
