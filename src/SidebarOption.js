import React from 'react'
import './SidebarOption.css'

function SidebarOption({Icon,text}) {
    return (
        <div className={"sidebarOption"}>
            {Icon}
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption
