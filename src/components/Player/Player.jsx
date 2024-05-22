import React from 'react';

const Player = ({player, handleAddPlayer}) => {
    const {id, name, age, country, salary, image} = player;
    return (
        <div className="card w-64 bg-gradient-to-r from-orange-400 to-yellow-300 shadow-xl pt-3 ">
            <figure>
                <img className='w-36 h-36 rounded-full border border-gray-400' src={image} alt={name} />
            </figure>
            <div className="card-body pt-3">
                <div className='text-green-900 space-y-1'>
                    <p><span className='mr-2 font-bold'>Name</span>: {name}</p>
                    <p><span className='mr-2 font-bold'>Age</span>: {age}</p>
                    <p><span className='mr-2 font-bold'>Country</span>: {country}</p>
                    <p><span className='mr-2 font-bold'>Salary</span>: ${salary}</p>
                </div>
                <div className="card-actions justify-center mt-2">
                <button className="btn btn-info bg-blue-700 border-none text-white" onClick={() => handleAddPlayer(player)}>Add this player</button>
                </div>
            </div>
        </div>
    );
};

export default Player;