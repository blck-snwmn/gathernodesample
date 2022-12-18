const { API_KEY, SPACE_ID } = require("./api-key");
const { Game } = require("@gathertown/gather-game-client");
global.WebSocket = require("isomorphic-ws");
/**** setup ****/

const game = new Game(SPACE_ID, () => Promise.resolve({ apiKey: API_KEY }));
game.connect();
game.subscribeToConnection((connected) => console.log("connected?", connected));

game.subscribeToEvent("playerMoves", (data, context) => {
  console.log(
    context?.player?.name ?? context.playerId,
    "moved in direction",
    data.playerMoves
  );
});
