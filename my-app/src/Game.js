import React from 'react';
import './Game.css';

const CellSize = 20;
const Width = 800;
const Height = 600;
// 30X40 grid

class Game extends React.Component{
    // renders out board with grid lines
    // used css to make the grid lines
    render(){
        return(
            <div>
                <div className = 'Board' style = {{width: Width, height: Height, backgroundSize: `${CellSize}px ${CellSize}px`}}>
                </div>
            </div>
        );
    }
}
export default Game;