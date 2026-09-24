
import {
  FaUser,
  FaPen,
  FaBowlingBall,
} from "react-icons/fa";

import type { IPlayer } from "../../Types/Playertype";


interface AvailablePlayersProps {
  players: IPlayer[];

  // Function received from Players.tsx
  onChoosePlayer: (player: IPlayer) => void;

  // Players already selected
  selectedPlayers: IPlayer[];

  // Current available balance
  availableBalance: number;
}

const Availableplayers = ({
  players,
  onChoosePlayer,
  selectedPlayers,
  availableBalance,
}: AvailablePlayersProps) => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-4">

      {/* =====================================================
          PLAYER GRID
      ====================================================== */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        {players.map((player: IPlayer) => {

          // Is this player already selected?
          const isSelected = selectedPlayers.some(
            (selectedPlayer) =>
              selectedPlayer.playerName === player.playerName
          );

          // Can user afford this player?
          const canAfford =
            Number(player.price) <= availableBalance;

          return (

            <div
              key={player.playerName}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300"
            >

              {/* =================================================
                  IMAGE
              ================================================== */}

              <div className="relative h-64 w-full bg-gray-100">

                <img
                  src={player.playerImg}
                  alt={player.playerName}
                  className="w-full h-full object-cover"
                />

                {/* Player Type */}

                <span className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-md">
                  {player.playerType}
                </span>

              </div>

              {/* =================================================
                  CARD BODY
              ================================================== */}

              <div className="p-5 flex flex-col flex-1">

                {/* =================================================
                    PLAYER NAME
                ================================================== */}

                <div className="flex items-center gap-2 mb-5">

                  <FaUser className="text-purple-600 text-sm" />

                  <div>

                    <h3 className="font-bold text-gray-800 text-base">
                      {player.playerName}
                    </h3>

                    <p className="text-xs text-gray-400 mt-0.5">
                      {player.origin}
                    </p>

                  </div>

                </div>

                {/* =================================================
                    BATTING & BOWLING
                ================================================== */}

                <div className="grid grid-cols-2 gap-4 mb-6">

                  {/* BATTING */}

                  <div>

                    <div className="flex items-center gap-2 mb-1">

                      <FaPen className="text-purple-500 text-xs" />

                      <span className="text-xs text-gray-400">
                        Batting
                      </span>

                    </div>

                    <p className="text-sm font-medium text-gray-700">
                      {player.battingStyle}
                    </p>

                  </div>

                  {/* BOWLING */}

                  <div>

                    <div className="flex items-center gap-2 mb-1">

                      <FaBowlingBall className="text-purple-500 text-xs" />

                      <span className="text-xs text-gray-400">
                        Bowling
                      </span>

                    </div>

                    <p className="text-sm font-medium text-gray-700">
                      {player.bowlingStyle}
                    </p>

                  </div>

                </div>

                {/* =================================================
                    PRICE + BUTTON
                ================================================== */}

                <div className="mt-auto flex items-end justify-between gap-3">

                  {/* PRICE */}

                  <div>

                    <p className="text-xs text-gray-400 mb-1">
                      Player Price
                    </p>

                    <p className="text-xl font-bold text-purple-700">
                      ${Number(player.price).toLocaleString()}
                    </p>

                  </div>

                  {/* =================================================
                      CHOOSE PLAYER BUTTON
                  ================================================== */}

                  <button
                    type="button"
                    onClick={() =>
                      onChoosePlayer(player)
                    }
                    disabled={
                      isSelected || !canAfford
                    }
                    className={`
                      px-5
                      py-2.5
                      rounded-lg
                      text-xs
                      font-bold
                      transition-all
                      duration-200
                      whitespace-nowrap
                      ${
                        isSelected
                          ? "bg-green-500 text-white cursor-not-allowed"
                          : !canAfford
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "bg-purple-600 text-white hover:bg-purple-700 active:scale-95"
                      }
                    `}
                  >
                    {isSelected
                      ? "Selected"
                      : !canAfford
                      ? "Not Enough"
                      : "Choose Player"}
                  </button>

                </div>

              </div>

            </div>

          );
        })}

      </div>

    </section>
    
  );
};

export default Availableplayers;