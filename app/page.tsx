"use client";

import { useState } from "react";
import PlayerColumn from "./PlayerColumn";

const EXAMPLE_PLAYERS: Player[] = [
  { name: "Player 1", phase: 1, scoreHistory: [0] },
  { name: "Player 2", phase: 1, scoreHistory: [0] },
];

type Player = {
  name: string;
  phase: number;
  scoreHistory: number[];
};

export default function Page() {
  const [players, setPlayers] = useState<Player[]>(EXAMPLE_PLAYERS);

  return (
    <div className="h-full w-full bg-zinc-950 text-zinc-100 overflow-y-hidden">
      <div className="flex gap-[2px] h-full">
        {players.map((player, index) => (
          <PlayerColumn
            key={index}
            name={player.name}
            setName={(name: string) => {
              const newPlayers = [...players];
              newPlayers[index].name = name;
              setPlayers(newPlayers);
            }}
            phase={player.phase}
            setPhase={(phase: number) => {
              const newPlayers = [...players];
              newPlayers[index].phase = phase;
              setPlayers(newPlayers);
            }}
            scoreHistory={player.scoreHistory}
            setScoreHistory={(scoreHistory: number[]) => {
              const newPlayers = [...players];
              newPlayers[index].scoreHistory = scoreHistory;
              setPlayers(newPlayers);
            }}
          />
        ))}
      </div>
      <div className="flex fixed bottom-0 w-full">
        <input
          className="w-1/2 bg-blue-800  text-center py-3 text-xl outline-none hover:bg-blue-700 transition duration-200"
          type="button"
          value="Add Score"
          onClick={() => {
            const newPlayers = [...players];
            newPlayers.forEach((player) => {
              player.scoreHistory.push(0);
            });
            setPlayers(newPlayers);
          }}
        />
        <input
          className="w-1/2 bg-blue-800  text-center py-3 text-xl outline-none hover:bg-blue-700 transition duration-200"
          type="button"
          value="Add Player"
          onClick={() => {
            setPlayers([
              ...players,
              {
                name: "",
                phase: 1,
                scoreHistory: [...players[0].scoreHistory.map(() => 0)],
              },
            ]);
          }}
        />
      </div>
    </div>
  );
}
