import React from 'react'
import Followoption from "./Followoption"
import './Widgets.css'


function Whotofollow() {
    return (
        <div className="widgets">
            <div className="widgets__widgetContainer">
            <h2 style={{borderBottom:"1px solid var(--twitter-background)",padding:"10px"}}>Who to Follow</h2>

            <Followoption 
            avatar={'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat3&accessoriesType=Prescription01&hatColor=Heather&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Overall&clotheColor=White&eyeType=Default&eyebrowType=UpDownNatural&mouthType=Vomit&skinColor=Light'}
            name={"TimCook"}
            userName={"Timcook123"}
            />

            <Followoption
            avatar={'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Wayfarers&hairColor=BlondeGolden&facialHairType=BeardMagestic&facialHairColor=Black&clotheType=GraphicShirt&clotheColor=PastelYellow&graphicType=Skull&eyeType=EyeRoll&eyebrowType=UpDown&mouthType=Twinkle&skinColor=Yellow'}
            name={"Sundar"}
            userName={"Sundar231"}
            />
            
             <Followoption
            avatar={'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Prescription01&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Dizzy&eyebrowType=FlatNatural&mouthType=Tongue&skinColor=Pale'}
            name={"Jeff"}
            userName={"Jeff420"}
            />

            <p style={{padding:"10px",color:"var(--twitter-color)"}}>Show more</p>
            </div>

            <p style={{padding:"20px",color:"#5b7083"}}>Terms of Service
                Privacy Policy
                Cookie Policy
                Ads info
                More
                © 2021 Twitter, Inc.
            </p>
            
        </div>
    )
}

export default Whotofollow
