import PropTypes from 'prop-types';

const Player = ({player, handleAddPlayer}) => {
    const {name, age, country, salary, image} = player;
    return (
        <div className="card w-[284px] bg-gradient-to-r from-orange-400 to-yellow-300 shadow-xl pt-3 ">
            <figure>
                <img className='w-36 h-36 rounded-full border border-gray-400' src={image} alt={name} />
            </figure>
            <div className="card-body pt-3">
                <div className='text-green-900 space-y-1 flex gap-5 items-center'>
                    <div>
                        <p><span className='font-bold'>Name</span></p>
                        <p><span className='font-bold'>Age</span></p>
                        <p><span className='font-bold'>Country</span></p>
                        <p><span className='font-bold'>Salary</span></p>
                    </div>
                    <div>
                        <p>: {name}</p>
                        <p>: {age}</p>
                        <p>: {country}</p>
                        <p>: ${salary}</p>
                    </div>
                </div>
                <div className="card-actions justify-center mt-2">
                <button className="btn btn-info min-h-9 h-9 bg-blue-700 border-none text-white" onClick={() => handleAddPlayer(player)}>Add this player</button>
                </div>
            </div>
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
    handleAddPlayer: PropTypes.func.isRequired
}

export default Player;