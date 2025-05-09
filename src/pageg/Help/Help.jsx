import './Help.css'

import React from 'react'

function Help() {
  return (
    <div>
      <div className="We-Help">
        <h1>How Can We Help?
        </h1>
        <p>Chat with us</p>
        <p>Send us a text: 1-814-251-9966</p>
        <p>Give us a call: 1-888-963-8944</p>
        <p>Monday - Friday: 5AM - 5PM PST</p>
      </div>
      <div className="Frequently-Asked">
        <div className="Frequently-Asked-card">
            <h1>Products & Fit</h1>
            <p>Do Allbirds run true to size?</p>
            <p>Will my shoes stretch?</p>
            <p>Are Allbirds good for flat feet?</p>
            <p>Can you wash Allbirds insoles?</p>
            <p>Are Allbirds waterproof?</p>
            <p>Are Allbirds washable?</p>
        </div>
        <div className="Frequently-Asked-card">
            <h1>Returns & Exchanges</h1>
            <p>Can I return or exchange an in store purchase online?</p>
            <p>How do I make a gift exchange?</p>
            <p>What is Allbirds' return policy?</p>
        </div>
        <div className="Frequently-Asked-card">
            <h1>Orders, Shipping & Tracking</h1>
            <p>Do you offer gift wrapping?</p>
            <p>Can I expedite my order?</p>
            <p>How do you ship?</p>
            <p>What if I want to cancel or change my order?</p>
        </div>
        <div className="Frequently-Asked-card">
            <h1>Payments & Refunds</h1>
            <p>When can I expect my refund?</p>
            <p>Does Allbirds offer discount codes or coupons?</p>
            <p>How do I send a gift card?</p>
        </div>
        <div className="Frequently-Asked-card">
            <h1>Company
            </h1>
            <p>What is your commitment to sustainability?</p>
            <p>Where are Allbirds products made?</p>
            <p>How do you ensure fair and safe working conditions at factories?</p>
        </div>
      </div>
    </div>
  )
}

export default Help
