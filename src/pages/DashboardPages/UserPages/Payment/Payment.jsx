// Import and initialize Stripe outside the component to keep it constant
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

// Load Stripe instance only once
const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk);

const Payment = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="md:w-1/2">
        <h1 className="text-center my-4 text-3xl underline uppercase">
          Pay Here.
        </h1>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
