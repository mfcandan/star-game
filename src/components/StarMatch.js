import { useState } from 'react';
import App from '../App'

const StarMatch = (props) => {
    const [gameId, setGameId] = useState(1);
    return ( 
        <App key={gameId} startNewGame={() => setGameId(gameId + 1)}/>
    );
}
 
export default StarMatch;