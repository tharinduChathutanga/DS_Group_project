import React, { useState } from 'react'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import BG from '../../images/SucessPayment.gif';

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {

        base: {

            iconColor: "#c4f0ff",
            coloe: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofil": { color: "#fce883" },
            "::placeholder": { color: "#87bbfd" }
        },

        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
}

export default function PaymentGSuccess() {
    const [success, setsucces] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post("http://localhost:4003/payment", {
                    amount: 1000,
                    id
                })

                if (response.data.success) {
                    console.log("Succefull payment")
                    setsucces(true)
                }
            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }

    return (
        <>
            {!success ?
                <form onSubmit={handleSubmit}>
                    <fieldset className="FormGroup">
                        <div className="FormRow">
                            <CardElement options={CARD_OPTIONS} />
                        </div>
                    </fieldset>
                    <button>Pay</button>

                </form>
                :
                <div>
                    <center>
                        <br />
                        <img className="sucess-img" src={BG} alt='bg img' />
                        <h1 style={{ color: "#000080", fontStyle: "italic" }}><b>Your Payment was Successfull</b></h1>

                    </center>
                </div>
            }

        </>
    )
}