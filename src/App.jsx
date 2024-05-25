import { useState } from 'react'
import './App.css'
import Bpl from './components/Bpl/Bpl'
import BPL_Players from './components/BPL_Players/BPL_Players'
import Cart from './components/Cart/Cart'

function App() {

  const [addedPlayer, setAddedPlayer] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [remainingBalance, setRemainingBalance] = useState(150000);
  return (
    <div className='bpl-players-container'>
        <Bpl></Bpl>
        <div className='flex gap-10 max-w-7xl mx-auto py-8'>
          <BPL_Players 
            addedPlayer={addedPlayer} 
            setAddedPlayer={setAddedPlayer}
            setTotalCost={setTotalCost}
            remainingBalance={remainingBalance}
            setRemainingBalance={setRemainingBalance}
          ></BPL_Players>
          <Cart 
            addedPlayer={addedPlayer} 
            totalCost={totalCost} 
            remainingBalance={remainingBalance}
          ></Cart>
        </div>
    </div>
  )
}

export default App
