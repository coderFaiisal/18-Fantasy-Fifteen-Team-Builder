import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Player.css";

const Player = (props) => {
  const { img, name, salary, club, position } = props.player;
  const handleAddPlayers = props.handleAddPlayers;
  return (
    <div className="player-card">
      <img className="player-img" src={img} alt="" />
      <h3>Name: {name}</h3>
      <p>Club: {club}</p>
      <p>Position: {position}</p>
      <p>Salary: ${salary}M</p>
      <br />
      <button
        onClick={() => handleAddPlayers(props.player)}
        className="player-buy-btn"
      >
        <FontAwesomeIcon icon={faUserPlus} /> Buy Me
      </button>
    </div>
  );
};

export default Player;
