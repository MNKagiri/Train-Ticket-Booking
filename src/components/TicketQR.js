import React from 'react'
import {useState, useEffect, useRef} from 'react';
import QRCode from 'qrcode';

export default function TicketQR() {
    
    const [src, setSrc] =  useState()
    const ticketno = useRef()
    console.log(ticketno)

    useEffect(() => {
        QRCode.toDataURL(ticketno.current.outerText).then(setSrc)
    })
    
    return(
        <>
        <h5 ref={ticketno}>{Date.now()+Math.floor(Math.random() * 10 )} </h5>
        <img src={src}/>

        </>
    )
}

