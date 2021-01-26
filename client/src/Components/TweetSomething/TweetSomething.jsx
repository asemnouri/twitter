import React from "react"
import Avatar from '@material-ui/core/Avatar';
import ProfileImage from "../../assets/girl.jpg"
import WhatisHappenSearch from "../WhatIsHappenSearch/WhatisHappenSearch"
import ImageIcon from '@material-ui/icons/Image';
import PublicIcon from '@material-ui/icons/Public';
import Button from '@material-ui/core/Button';
import "./TweetSomething.css"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CloudImage from "../uploadImage/uploadImage"
const TweetSomething = () => {
    const isActive=useMediaQuery('(max-width:900px)')

    return (
        <div className="tweet-something">
            <h3 className='tweet-something__text'>Tweet Something </h3>
            <div className='tweet-something__body' >
                <Avatar ><img className='avatar__image'  src={ProfileImage} /></Avatar>
                <div className='text__input'>
                    <WhatisHappenSearch />
                    <div className='last__line'>
                        <div className='last__center'>
                            <CloudImage/>
                            {/* <ImageIcon color="primary" /> */}
                            <div className='everyone'>
                                <PublicIcon color="primary" />
                                {
                                    !isActive?
                                    <small style={{ paddingLeft: "5px" }}>Everyone can reply</small>
                                    :
                                    <></>
                                }
                            </div>
                        </div>
                        <Button variant="contained" color="primary" style={{marginRight:"0.5rem"}}>
                            Tweet
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )

}
export default TweetSomething