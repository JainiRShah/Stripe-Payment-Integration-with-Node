const stripe = require('stripe')(process.env.SECRET_KEY)

exports.home = (req, res) => {
    res.render('home', {
      key: process.env.PUBLISHABLE_KEY
    });
  }

exports.payment = (req, res)=>{
            stripe.customers.create({
            email: req.body.stripeEmail,
            source: req.body.stripeToken,
            name: 'Jaini Shah',
            address: {
                line1: '',
                postal_code: '',
                city: '',
                state: '',
                country: 'India',
            }
        })
        .then((customer) => {
      
            return stripe.charges.create({
                amount: 250000,     // Charing Rs 2500
                description: 'Web Development Stripe Integration Testing',
                currency: 'INR',
                customer: customer.id
            });
        })
        .then((charge) => {
            //redirecting to payment receipt
            res.redirect(charge.receipt_url) 
        })
        .catch((err) => {
            res.send(err)       // If some error occurs
        });
}
  