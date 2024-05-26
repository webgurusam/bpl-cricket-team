import { useEffect, useState } from 'react'
import "./BPL_Players.css";
import Player from '../Player/Player';
import PropTypes from 'prop-types';

const BPL_Players = ({addedPlayer, setAddedPlayer, setTotalCost, remainingBalance, setRemainingBalance}) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
      const loadPlayersData = async () => {
        try{
          const URL = "./players_data.json";
          const res = await fetch(URL);
          const data = await res.json();
          setPlayers(data);
        }
        catch(err){
          console.log(err);
        }
      }
  
      loadPlayersData();
      
    }, [])

    const handleAddPlayer = player => {
      const isExist = addedPlayer.find(storedPlayer => storedPlayer.id === player.id);
      if(isExist){
        return alert("This player already exist in the cart");
      }
      else{
        let newTotalCurrentCost = parseFloat(player.salary);
        addedPlayer.forEach(storedPlayer => {
            newTotalCurrentCost = newTotalCurrentCost + parseFloat(storedPlayer.salary);
        })

        if(newTotalCurrentCost > 150000){
          return alert("You haven't sufficient balance!!!")
        }
        else{
          setRemainingBalance(150000 - newTotalCurrentCost);
          setTotalCost(newTotalCurrentCost);
          setAddedPlayer([...addedPlayer, player]);
        }
      }
    }

    return (
        <div className='w-2/3'>
            <div className='grid md:grid-cols-3 gap-7'>
                {
                  players.map(player => <Player 
                      key={player.id} 
                      player={player}
                      handleAddPlayer={handleAddPlayer}
                      remainingBalance={remainingBalance}
                  ></Player>)
                }
            </div>
        </div>
    );
};

BPL_Players.propTypes = {
  addedPlayer: PropTypes.array.isRequired,
  setAddedPlayer: PropTypes.func.isRequired,
  setTotalCost: PropTypes.func.isRequired,
  remainingBalance: PropTypes.number.isRequired,
  setRemainingBalance: PropTypes.func.isRequired,
}

export default BPL_Players;