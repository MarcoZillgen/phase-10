"use client";

type PlayerColumnProps = {
  name: string;
  setName: (name: string) => void;
  phase: number;
  setPhase: (phase: number) => void;
  scoreHistory: number[];
  setScoreHistory: (scoreHistory: number[]) => void;
};

export default function PlayerColumn({
  name,
  setName,
  phase,
  setPhase,
  scoreHistory,
  setScoreHistory,
}: PlayerColumnProps) {
  return (
    <div className="w-full bg-zinc-800 min-w-20">
      <input
        className="w-full text-center py-3 bg-zinc-900 text-xl outline-none focus:bg-zinc-950 transition duration-200"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <div className="w-full text-center py-3 text-lg flex">
        <input
          className="w-full"
          type="button"
          value="-"
          onClick={() => setPhase(phase - 1)}
        />
        <span className="w-full">{phase}</span>
        <input
          className="w-full"
          type="button"
          value="+"
          onClick={() => setPhase(phase + 1)}
        />
      </div>
      <div className="w-full text-center py-3 text-lg border-t-2 border-zinc-900">
        Pts: <br />
        {scoreHistory.reduce((total, score) => total + score, 0)}
      </div>
      <div className="h-full">
        {scoreHistory.map((score, index) => (
          <input
            className="w-full text-center py-3 text-lg bg-zinc-700 outline-none focus:bg-blue-600 transition duration-200"
            placeholder={`Score ${index + 1}`}
            key={index}
            type="number"
            value={score}
            onChange={(event) => {
              const newScoreHistory = [...scoreHistory];
              newScoreHistory[index] = parseInt(event.target.value);
              setScoreHistory(newScoreHistory);
            }}
          />
        ))}
      </div>
    </div>
  );
}
