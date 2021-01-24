import React from 'react'
import { Avatar } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import './Followoption.css'

function Followoption({avatar,name,userName}) {
    return (
        <div className="followoption">   

            <Avatar src={avatar} />

                <div className="name">
                    <h3>{name}</h3>
                    <h4>@{userName}</h4>
                </div>

                <Button variant="outlined" className="followButton" size="small">
                    FOLLOW
                </Button>

        </div>
    )
}

export default Followoption

