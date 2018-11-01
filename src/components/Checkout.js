import React from "react";
import StripeCheckout from "react-stripe-checkout";

class Checkout extends React.Component {
  onToken(token) {
    fetch("/save-stripe-token", {
      method: "POST",
      body: JSON.stringify(token)
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }

  render() {
    return (
      <div>
        <StripeCheckout
          token={this.onToken}
          stripeKey="	
          pk_test_1iYOWJlRvuCfEOcf5rPPEB37
          "
        />
      </div>
    );
  }
}

export default Checkout;
