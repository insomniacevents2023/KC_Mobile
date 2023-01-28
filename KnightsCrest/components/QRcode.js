import React from 'react';
import QRCode from 'react-native-qrcode-svg';

export default function QRCODE (value, getRef){
    return(
        <QRCode
        value={value}
        size={250}
        color="black"
        backgroundColor="white"
        getRef={getRef}
        />
        )
    }