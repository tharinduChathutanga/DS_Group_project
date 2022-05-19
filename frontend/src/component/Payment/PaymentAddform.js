import React, { useState, useEffect } from "react";
import imgpayP from '../../images/imgpayP.jpg';
import StripeContainer from './StripeContainer';
import "../Payment/pay.css"



function PaymentAddform() {
    const [showItem, setShowItem] = useState(false)
    return (
        <div className="App">
            <h1>JOY FARMS</h1>
            {showItem ? <StripeContainer /> : <> <h3>$10.00</h3><img src={imgpayP} alt="ImgpayP" height={350} width={700} style ={{ alignSelf: 'center'}} />
                <button onClick={() => setShowItem(true)}>Pay here</button></>}
        </div>
    );
}

export default PaymentAddform;
