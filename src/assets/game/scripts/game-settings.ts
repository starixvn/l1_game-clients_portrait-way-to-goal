export const GAME_NAME = "WayToGoal";
export const settings = {
    id: 49,
    name: GAME_NAME,
    observerNamespace: GAME_NAME,
    tolgeeNamespaces: ["wayToGoal", "Classicslot"],
    durations: {
        // dont need these durations configs for this game
        wholeRound: 14,
        lockingBet: 3,
        placingBet: 10,
        generatingResult: 0,
        startRound: 1,

        bigWinNotice: 5,
        normalWinNotice: 3,
        loseNotice: 1,
        // dont need
    },
    numberOfRoundHistory: 11,
    validateBalanceWhenBet: true,
};
