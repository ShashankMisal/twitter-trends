import React,{useState,useEffect} from 'react'
import SearchIcon from "@material-ui/icons/Search";
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import './Explore.css'
import Trend from './Trend'
import axios from 'axios'





function Explore() {

    const [trends, setTrends] = useState([]) 

    useEffect(()=>{


        axios.get('https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/trends/place.json?id=23424848', {
            headers: {
                'Authorization':`Bearer ${process.env.REACT_APP_KEY}`
            }
            })
            .then((res) => {
            setTrends(res.data[0].trends)
            })
            .catch((error) => {
            console.error(error)
            })
    },[])


    return (
        <div className="explore">
            
            <div className="explore__header">
              
                <div className="explore__sec1">
                    <div className="explore__input">
                        <SearchIcon className="widgets__searchIcon sIcon" />
                        <input placeholder="Search Twitter" type="text" />
                    </div>
                    <SettingsOutlinedIcon className="explore__settingsIcons"/>
              
                </div>

                <div className="explore__sec2">
                    <h4 >For You</h4>
                    <h4 >Covid-19</h4>
                    <h4 style={{color:"var(--twitter-color)",borderBottom:"2.5px solid var(--twitter-color)"}}>Trending</h4>
                    <h4 >News</h4>
                    <h4 >Sports</h4>
                    <h4 >Entertainment</h4>
                </div>

            </div>  

            <h2 className="explore__indiaTrends">India Trends</h2>

            {
                   trends.map((val,index)=>{
                       return <Trend
                                key={index}
                                trendNo={index}
                                trendName={val.name}
                                trendVolume={val.tweet_volume}
                                />
                })
                
                }
          
        </div>
    )
}

export default Explore
