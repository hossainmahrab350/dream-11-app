
import { use, useState } from "react";

import type { IPlayer } from "../../Types/PlayerType";


import Availableplayers from "./Availableplayers";

interface PlayerProps {
  playerPromise: Promise<IPlayer[]>;
}

const INITIAL_BALANCE = 20000;

const Players = ({ playerPromise }: PlayerProps) => {
  const players = use(playerPromise);

  // Available / Selected tab
  const [buttonType, setButtonType] = useState<
    "available" | "selected"
  >("available");

  // Selected players
  const [selectedPlayers, setSelectedPlayers] = useState<IPlayer[]>(
    []
  );

  // Available balance
  const [availableBalance, setAvailableBalance] =
    useState<number>(INITIAL_BALANCE);

  // =========================================================
  // CHANGE TAB
  // =========================================================

  const handleUpdateBtnType = (
    type: "available" | "selected"
  ) => {
    setButtonType(type);
  };

  // =========================================================
  // CHOOSE PLAYER
  // =========================================================

  const handleChoosePlayer = (player: IPlayer) => {
    const playerPrice = Number(player.price);

    // Check if player is already selected
    const alreadySelected = selectedPlayers.some(
      (selectedPlayer) =>
        selectedPlayer.playerName === player.playerName
    );

    if (alreadySelected) {
      return;
    }

    // Check available balance
    if (playerPrice > availableBalance) {
      alert("Not enough balance to choose this player!");
      return;
    }

    // Add player to selected players
    setSelectedPlayers((previousPlayers) => [
      ...previousPlayers,
      player,
    ]);

    // Reduce balance
    setAvailableBalance(
      (previousBalance) => previousBalance - playerPrice
    );

    // IMPORTANT:
    // Every time a player is successfully selected,
    // automatically go to Selected tab.
    setButtonType("selected");
  };

  // =========================================================
  // REMOVE PLAYER
  // =========================================================

  const handleRemovePlayer = (player: IPlayer) => {
    const playerPrice = Number(player.price);

    // Remove player from selected players
    setSelectedPlayers((previousPlayers) =>
      previousPlayers.filter(
        (selectedPlayer) =>
          selectedPlayer.playerName !== player.playerName
      )
    );

    // Return player's money
    setAvailableBalance(
      (previousBalance) => previousBalance + playerPrice
    );

    // Go back to Available Players
    setButtonType("available");
  };

  // =========================================================
  // MONEY FORMAT
  // =========================================================

  const formatMoney = (amount: number) => {
    return `$${amount.toLocaleString()}`;
  };

  return (
    <section className="container mx-auto px-4 py-8">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">

        {/* TITLE */}

        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            {buttonType === "available"
              ? "Available Players"
              : "Selected Players"}
          </h2>
        </div>

        {/* ===================================================
            AVAILABLE BALANCE
        ==================================================== */}

        <div className="flex justify-center">

          <div className="bg-white border border-gray-200 rounded-xl shadow-sm px-7 py-3 min-w-52.5 text-center">

            <p className="text-xs text-gray-500 font-medium">
              Available Balance
            </p>

            <p className="text-2xl font-bold text-green-600 mt-1">
              {formatMoney(availableBalance)}
            </p>

          </div>

        </div>

        {/* ===================================================
            AVAILABLE / SELECTED BUTTONS
        ==================================================== */}

        <div className="flex gap-2 justify-center md:justify-end">

          {/* AVAILABLE */}

          <button
            type="button"
            onClick={() =>
              handleUpdateBtnType("available")
            }
            className={`rounded-lg px-5 py-2 font-semibold text-sm transition-all duration-200 ${
              buttonType === "available"
                ? "bg-blue-600 text-white"
                : "bg-gray-500 text-white hover:bg-gray-600"
            }`}
          >
            Available
          </button>

          {/* SELECTED */}

          <button
            type="button"
            onClick={() =>
              handleUpdateBtnType("selected")
            }
            className={`rounded-lg px-5 py-2 font-semibold text-sm transition-all duration-200 ${
              buttonType === "selected"
                ? "bg-blue-600 text-white"
                : "bg-gray-500 text-white hover:bg-gray-600"
            }`}
          >
            Selected ({selectedPlayers.length})
          </button>

        </div>

      </div>

      {/* =====================================================
          AVAILABLE PLAYERS
      ====================================================== */}

      {buttonType === "available" && (
        <Availableplayers
          players={players}
          onChoosePlayer={handleChoosePlayer}
          selectedPlayers={selectedPlayers}
          availableBalance={availableBalance}
        />
      )}

      {/* =====================================================
          SELECTED PLAYERS
      ====================================================== */}

      {buttonType === "selected" && (

        <div className="py-4">

          {/* Selected heading */}

          <div className="mb-6">

            <h3 className="text-xl font-semibold text-gray-800">
              Selected Players
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {selectedPlayers.length === 0
                ? "No players selected yet."
                : `${selectedPlayers.length} player${
                    selectedPlayers.length > 1
                      ? "s"
                      : ""
                  } selected.`}
            </p>

          </div>

          {/* =================================================
              NO PLAYERS
          ================================================== */}

          {selectedPlayers.length === 0 ? (

            <div className="text-center py-16">

              <h3 className="text-lg font-semibold text-gray-700">
                No players selected yet.
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Choose players from Available Players.
              </p>

              <button
                type="button"
                onClick={() =>
                  setButtonType("available")
                }
                className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold transition"
              >
                Choose Players
              </button>

            </div>

          ) : (

            /* =================================================
               SELECTED PLAYER CARDS
            ================================================== */

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

              {selectedPlayers.map((player) => (

                <div
                  key={player.playerName}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col"
                >

                  {/* IMAGE */}

                  <div className="relative w-full h-64 bg-gray-100">

                    <img
                      src={player.playerImg}
                      alt={player.playerName}
                      className="w-full h-full object-cover"
                    />

                    {/* Selected badge */}

                    <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-md">
                      Selected
                    </span>

                  </div>

                  {/* CARD BODY */}

                  <div className="p-5 flex flex-col flex-1">

                    {/* NAME */}

                    <div className="flex items-center gap-2 mb-5">

                      <span className="text-purple-600">
                        👤
                      </span>

                      <div>

                        <h3 className="font-bold text-gray-800">
                          {player.playerName}
                        </h3>

                        <p className="text-xs text-gray-400 mt-0.5">
                          {player.origin}
                        </p>

                      </div>

                    </div>

                    {/* BATTING / BOWLING */}

                    <div className="grid grid-cols-2 gap-4 mb-6">

                      <div>

                        <p className="text-xs text-gray-400 mb-1">
                          Batting
                        </p>

                        <p className="text-sm font-medium text-gray-700">
                          {player.battingStyle}
                        </p>

                      </div>

                      <div>

                        <p className="text-xs text-gray-400 mb-1">
                          Bowling
                        </p>

                        <p className="text-sm font-medium text-gray-700">
                          {player.bowlingStyle}
                        </p>

                      </div>

                    </div>

                    {/* PRICE + REMOVE */}

                    <div className="mt-auto flex items-end justify-between gap-3">

                      <div>

                        <p className="text-xs text-gray-400 mb-1">
                          Player Price
                        </p>

                        <p className="text-xl font-bold text-purple-700">
                          {formatMoney(
                            Number(player.price)
                          )}
                        </p>

                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          handleRemovePlayer(player)
                        }
                        className="bg-red-500 hover:bg-red-600 active:scale-95 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all"
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      )}

    </section>
  );
};

export default Players;