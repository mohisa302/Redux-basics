import './App.css';
import Navbar from './components/Navbar';
import CardContainer from './components/CardContainer';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { calculateTotal } from './redux/features/card/cardSlice';
import { useEffect } from 'react';
import Modal from './components/Modal';

function App() {
  const dispatch = useDispatch();
  const { cardItems } = useSelector((store) => store.cards);
  
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cardItems]);

  return (
    <main>
      <Modal />
      <Navbar />
      <CardContainer />
    </main>
  );
}

export default App;
