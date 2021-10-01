import React, { useState } from 'react'
import crypto from 'crypto'

import './HomeScreen.css'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import fileCreater from '../../utility/fileCreater'

function LinkGenerator() {
    const [linkCount, setLinkCount] = useState('')
    const [link, setLink] = useState('')

    const linkHandler = () => {
        let uniqueLinks = ''
        let uniqueCodes = ''
        let postCodeArr = []
        let postCodeStr = ''
        let timeStamp = new Date()
        for (let i=linkCount.length; i>=1; i--) {
            postCodeArr.push(postCodeStr)
            postCodeStr = postCodeStr + '0'
        }
        postCodeArr.reverse()

        for (let i = 1; i <= linkCount; i++) {
            let currentTime = timeStamp.getTime()
            currentTime = currentTime.toString(36)

            let prefix = crypto.randomBytes(3).toString('hex');

            let postfix = postCodeArr[String(i).length - 1] + i

            uniqueCodes = uniqueCodes + `${prefix}${currentTime}${postfix}\n`
            uniqueLinks = uniqueLinks + `${link}${prefix}${currentTime}${postfix}\n`
        }
        
        fileCreater(uniqueCodes)
        if (link) {
            fileCreater(uniqueLinks)
        }

    }
    return (
        <div className="homeScreen">
            <div className="form">
                <div className="form__container"> 
                    <Input heading="Total links *" 
                        type="number" 
                        value={linkCount} 
                        changed={(e) => setLinkCount(e.target.value)}/>
                    <Input heading="Survey Link" 
                        type="text" 
                        value={link} 
                        changed={(e) => setLink(e.target.value)}/>
                    <Button isActive={!linkCount} 
                        text="Generate Codes" 
                        animation={linkCount} 
                        clicked={linkHandler}/>
                </div>
            </div>
        </div>
    )
}

export default LinkGenerator
