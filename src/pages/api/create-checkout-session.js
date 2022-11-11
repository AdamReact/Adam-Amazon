const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async (req, res) => {
    const { items, email } = req.body;

    // Puts items in a array called transformedItems
    const transformedItems = items.map((item) => ({
        description: item.description,
        quantity: 1,
        price_data: {
            currency: 'usd',
            unit_amount: item.price * 100,
            product_data: {
                name: item.title,
                images: [item.image]
            },
        }
    })
    );

    // Put all transformedItems into a session with the function stripe.checkout.session and pass an ID back out
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_rates: ['shr_1M2eyPIPyXl3KpJy7waHABuW'],
        shipping_address_collection: {
            allowed_countries: ['GB', 'US', 'CA']
        },
        line_items: transformedItems,
        mode: 'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata: {
            email,
            images: JSON.stringify(items.map((item) => item.image)),
        }
    })
    res.status(200).json({ id: session.id })
}