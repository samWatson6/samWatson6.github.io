import React, { Component } from "react";
import { Link } from "react-router";
import "./styles.sass";
import swal from "sweetalert";

class ItemPage extends Component {
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector(".menu").classList.remove("open");
  }

  addToCart() {
    swal("Item added to cart");
  }
  render() {
    return (
      <div className="itemPageWrapper">
        <div className="itemImgWrapper" />
        <div className="itemInfoWrapper">
          <Link className="backLink" to="/">
            <span className="small">
              <svg
                fill="#000000"
                height="13"
                viewBox="0 0 18 15"
                width="13"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 10l5 5 5-5z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </span>
            All Items
          </Link>
          <h3 className="itemName">Wine</h3>
          <p className="itemCost frm">$40</p>
          <p className="description">
            Intense aroma, excellent varietal expression of citrus, grapefruit
            and green apple with a touch of lavender. Powerful mouth, rich in
            fruit nuances with hints of aromatic herbs and highly persistent.
          </p>
          <p className="seller frm">
            From <span>SCHAEFER'S WINE, FOOD, AND SPIRITS</span>
          </p>
          <form>
            <label for="quantity">Qty: </label>
            <input
              min="1"
              type="number"
              id="quantity"
              name="quantity"
              value="1"
            />
          </form>
          <button className="reqTradeBtn normalBtn" onClick={this.addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}

export default ItemPage;
