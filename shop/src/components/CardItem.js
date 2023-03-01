import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { removeItem } from "../redux/features/card/cardSlice";
import { useDispatch } from "react-redux";

const CardItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>{price}</h4>
        <button className='remove-btn' onClick={() => {
          dispatch(removeItem(id));
        }}>remove</button>
      </div>
      <div>
        <button className="amount-btn">
          <AiOutlineCaretUp />
        </button>
        <p className='amount'>{amount}</p>
        <button className="amount-btn">
          <AiOutlineCaretDown />
        </button>
      </div>
    </article>
  );
};
export default CardItem;
