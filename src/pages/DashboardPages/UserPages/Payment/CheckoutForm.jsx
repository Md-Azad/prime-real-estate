import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const CheckoutForm = () => {
  const { id } = useParams();

  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();

  const { data: prices = [] } = useQuery({
    queryKey: ["price", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/getprice/${id}`);
      return res.data;
    },
  });

  useEffect(() => {
    axiosSecure
      .post("/creare-payment-intent", { price: prices.offerPrice })
      .then((res) => {
        setClientSecret(res.data.clientsecret);
      });
  }, [axiosSecure, prices.offerPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: prices?.buyerName || "anonymous",
            email: prices?.buyerEmail || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    } else {
      console.log("payment Intent", paymentIntent);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="text-center ">
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="btn btn-success text-white px-8 mt-8 w-1/3"
        >
          Pay
        </button>
      </div>
      <p className="text-red-600 text-center mt-4">{error}</p>
    </form>
  );
};

export default CheckoutForm;
