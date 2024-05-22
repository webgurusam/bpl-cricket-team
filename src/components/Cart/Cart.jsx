import { IoPerson } from "react-icons/io5";
import { IoMdCheckmarkCircle } from "react-icons/io";
import PropTypes from 'prop-types';


const Cart = ({addedPlayer, totalCost, remainingBalance}) => {
    return (
        <div className='w-1/4'>
            <div className="ml-24 space-y-2">
                <h1 className='font-bold text-xl text-orange-400 flex items-center'><IoPerson /> Players Added: {addedPlayer.length}</h1>
                <h1 className='font-bold text-xl text-orange-400'> Remaining Balance: ${remainingBalance}</h1>
                <h1 className='font-bold text-xl text-orange-400'> Total Cost: ${totalCost}</h1>
            </div>
            <div className='space-y-3 mt-4 ml-16'>
                {
                    addedPlayer &&
                        addedPlayer?.map(player => (
                            <div key={player.id} className='flex items-center justify-between rounded-xl w-full bg-gradient-to-r from-orange-400 to-yellow-300'>
                                <img src={player.image} className='w-10 h-12 border border-gray-400 rounded-s-xl ' alt="" />
                                <p className='ml-5'>{player.name}</p>
                                <span className='mr-2 text-2xl text-green-600'><IoMdCheckmarkCircle /></span>
                            </div>
                        ))
                }
            </div>
        </div>
    );
};

Cart.propTypes = {
    addedPlayer: PropTypes.array.isRequired,
    totalCost: PropTypes.number.isRequired,
    remainingBalance: PropTypes.number.isRequired
}

export default Cart;