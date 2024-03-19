import Stripe from "stripe";

const key = String(process.env.STRIPE_SECRET_KEY);

export const stripe = new Stripe(
  key ,
  {
    apiVersion: '2020-08-27',
    appInfo:{
      name: 'Ignite Shop'
    },
  }

)
