import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutFrom from "./CheckoutForm";

const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_GATEWAY);
  return (

    <div className=" bg-violet-400 h-screen flex justify-center items-center ">
      <div>
        <Elements stripe={stripePromise}>
        
          <CheckoutFrom></CheckoutFrom>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
