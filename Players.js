import React from 'react';
import paper from './assets/images/paper.png'
import rock from './assets/images/rock.png'
import scissors from './assets/images/scissors.png'


const Players = ({ weapon }) => (
    <>
        <div className="player">
            <img
                className="player-image"
                src={
                    weapon === "rock" ? rock : weapon === "scissors" ? scissors : paper
                }
                alt="Rock Paper Scissors"
            />
        </div>
    </>
);

export default Players ;