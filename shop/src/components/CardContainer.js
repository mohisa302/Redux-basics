import { useSelector, useDispatch } from "react-redux";
import React from 'react';
import CardItem from "./CardItem";
import { clearCard } from "../redux/features/card/cardSlice";

const CardContainer = () => {
  const dispatch = useDispatch();
  const { amount, cardItems, total } = useSelector((state) => state.cards);
  
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cardItems.map((item) => {
          return <CardItem key={item.id} {...item} />
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => {
          dispatch(clearCard())
        }}>
          clear cart
        </button>
      </footer>
    </section>
  )
}
export default CardContainer;
