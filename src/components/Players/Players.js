import React from "react";
import "./Players.css";
import fakeData from "../../fakeData/fakeData.json";
import Player from "../Player/Player";
import { useState } from "react";
import { useEffect } from "react";
import TeamCart from "../TeamCart/TeamCart";

const Players = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    setPlayers(fakeData);
  }, []);
  const [teamPlayer, setTeamPlayer] = useState([]);
  const handleAddPlayers = (player) => {
    const newTeamPlayer = [...teamPlayer, player];
    setTeamPlayer(newTeamPlayer);
  };
  return (
    <div className="players-container">
      <div className="random-players">
        {players.map((player) => (
          <Player player={player} handleAddPlayers={handleAddPlayers}></Player>
        ))}
      </div>
      <div className="team-players">
        <TeamCart teamPlayer={teamPlayer}></TeamCart>
      </div>
    </div>
  );
};

export default Players;
