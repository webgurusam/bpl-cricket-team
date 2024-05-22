import React from 'react';
import { useEffect, useState } from 'react'
import "./BPL_Players.css";
import Player from '../Player/Player';

const BPL_Players = ({addedPlayer, setAddedPlayer, setTotalCost, setRemainingBalance}) => {
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
                    ></Player>)
                }
            </div>
        </div>
    );
};

export default BPL_Players;