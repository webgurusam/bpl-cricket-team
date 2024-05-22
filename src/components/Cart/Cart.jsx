import React from 'react';
import { IoPerson } from "react-icons/io5";
import { IoMdCheckmarkCircle } from "react-icons/io";


const Cart = ({addedPlayer, totalCost}) => {
    return (
        <div className='w-1/3'>
            <h1 className='font-bold text-xl text-orange-400 flex items-center justify-center'><IoPerson /> Players Added: {addedPlayer.length}</h1>
            <h1 className='font-bold text-xl text-orange-400 text-center'> Total Cost: ${totalCost}</h1>
            <div className='space-y-3 mt-4 ml-16'>
                {
                    addedPlayer &&
                        addedPlayer?.map(player => (
                            <div key={player.id} className='flex items-center justify-between rounded-xl w-2/3 bg-gradient-to-r from-orange-400 to-yellow-300'>
                                <img src={player.image} className='w-10 h-12 rounded-s-xl ' alt="" />
                                <p className='ml-5'>{player.name}</p>
                                <span className='mr-2 text-2xl text-green-600'><IoMdCheckmarkCircle /></span>
                            </div>
                        ))
                }
            </div>
        </div>
    );
};

export default Cart;