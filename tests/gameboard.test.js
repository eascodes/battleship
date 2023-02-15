import { Gameboard } from "../src/gameboard";

test('Place a single-space ship at a specified square on gameboard', () => {
    const game = Gameboard();
    game.placeShip(0,0);
    expect(game.hasShip(0,0)).toBe(true);
});