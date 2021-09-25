import React from "react";
import "./TeamCart.css";

const TeamCart = (props) => {
  const teamPlayer = props.teamPlayer;
  const total = teamPlayer.reduce(
    (sum, player) => sum + parseFloat(player.salary),
    0
  );
  console.log(teamPlayer);
  return (
    <div className="team-cart-container">
      <div>
        <h3>My Team Players : {teamPlayer.length}</h3>
        <h5>Total Team Budget: ${total}M</h5>
      </div>
      <div className="team-player-cart">
        {teamPlayer.map((player) => (
          <div className="team-player">
            <img className="team-player-img" src={player.img} alt="" />
            <h4>{player.name}</h4>
            <h5>{player.position}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCart;
