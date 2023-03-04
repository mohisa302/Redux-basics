import PropTypes from 'prop-types';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { removeItem, increase, decrease } from '../redux/features/card/cardSlice';

const CardItem = (cardProp) => {
  const {
    id, img, title, price, amount,
  } = cardProp;
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}</h4>
        <button
          type="button"
          className="remove-btn"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          type="button"
          onClick={() => {
            dispatch(increase(id));
          }}
        >
          <AiOutlineCaretUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          type="button"
          onClick={() => {
            dispatch(decrease(id));
          }}
        >
          <AiOutlineCaretDown />
        </button>
      </div>
    </article>
  );
};

CardItem.propTypes = {
  cardProp: PropTypes.objectOf(Object).isRequired,
};
export default CardItem;
