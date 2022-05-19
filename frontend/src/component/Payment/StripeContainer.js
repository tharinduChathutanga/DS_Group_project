import React from "react"
import { Element, Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentGSuccess from "./PaymentGSuccess"


const PUBLIC_KEY = "pk_test_51KxGeFLwV8ggrREqyBiN2ZiRVZhZ6g3hiq4xTl85JbRkwI6UotBfuK2nGGdodvKGBbylBGdXU2osX4fL9BKbGSKQ00Ar5bme1f"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {

    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentGSuccess />


        </Elements>
    )
}