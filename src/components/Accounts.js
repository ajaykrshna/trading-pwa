import React from 'react'
import spot from '../images/Spotifylogo.png'
import Navbar from './Navbar'

export default function Accounts() {
    return (
        <>
            <div className='accounts'>
                <div className="accounts--head">
                    <div className="accounts--head--wrap">
                        <ion-icon name="person" id='person--icon'></ion-icon>
                        <h3>Accounts</h3>
                    </div>
                </div>
                <div className='accounts--info'>
                    <div className='accounts--info--wrap'>
                        <img src={spot} />
                        <div className='accounts--info--name'>
                            <h3>Andrew</h3>
                            <p>jk@gmail.com</p>
                        </div>
                    </div>
                    <ion-icon name="pencil-outline" id='pencil--icon'></ion-icon>
                </div>
            </div>
            <Navbar />
        </>
    )
}