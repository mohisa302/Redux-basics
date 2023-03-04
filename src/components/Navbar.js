import { useSelector } from 'react-redux';
import { AiFillCar } from 'react-icons/ai';

const Navbar = () => {
  const { amount } = useSelector((state) => state.cards);
  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
          <AiFillCar />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
