import React from 'react'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './Trend.css'



function format(num) {
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(1) + 'K';
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M';
    }else if(num < 900){
        return num; 
    }
}



function Trend({key,trendNo,trendName,trendVolume}) {
    return (
        <div className="trend">
            
                <div className="trendNo">
                    <p>{trendNo+1} . Trending</p>
                    <MoreHorizIcon className="trend__moreIcon"/>
                </div>

                <h2 className="trendName">
                    {trendName}
                </h2>

                <p className="trendVolume">{format(trendVolume) || "Few K"} Tweets</p>

        </div>
    )
}

export default Trend
