import React, {Component} from 'react';
import Players from './Players'


const weapons = ["rock", "paper", "scissors"];
class App extends Component {
    state = {
        playerOne: weapons[0],
        playerTwo: weapons[0],
        winner: ""
    };

    startGame = () => {
        let counter = 0;
        let gameInterval = setInterval(() => {
            counter++;
            this.setState({
                playerTwo: weapons[Math.floor(Math.random() * weapons.length)],
                winner: ""
            });
            if (counter > 5) {
                clearInterval(gameInterval);
                this.setState({
                    winner: this.selectWinner()
                });
            }
        }, 100);
    };

    selectWinner = () => {
        const { playerOne, playerTwo } = this.state;

        if (playerOne === playerTwo) {
            return "Oops!";
        } else if (
            (playerOne === "rock" && playerTwo === "scissors") ||
            (playerOne === "scissors" && playerTwo === "paper") ||
            (playerOne === "paper" && playerTwo === "rock")
        ) {
            return "Player One Wins!";
        } else {
            return "Player Two Wins!";
        }
    };
    selectWeapon = weapon => {
        this.setState({
            playerOne: weapon,
            winner: ""
        });
    };
    render() {
        const { playerOne, playerTwo, winner } = this.state;
        return (
            <>
                <span className={"headTitle"}> Chinga Choong</span>

                <div>
                    <Players weapon={playerOne} />
                    <Players weapon={playerTwo} />
                </div>
                <div className={"buttons"}>
                    <button
                        className={"weaponBtn"}
                        onClick={() => this.selectWeapon("rock")}
                    >
                        rock
                    </button>
                    <button
                        className={"weaponBtn"}
                        onClick={() => this.selectWeapon("paper")}>
                        paper
                    </button>
                    <button
                        className={"weaponBtn"}
                        onClick={() => this.selectWeapon("scissors")}
                    >
                        scissor
                    </button>
                </div>
                <div className="winner">{winner ? this.selectWinner() : null}</div>
                <button type="button" onClick={this.startGame}>
                    Start !
                </button>
            </>
        );
    }
}
export default App ;