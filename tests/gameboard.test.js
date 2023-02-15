import { Gameboard } from "../src/gameboard";

test('Place a single-space ship at a specified square on gameboard', () => {
    const game = Gameboard();
    game.placeShip([0,0], 1, "x");
    expect(game.hasShip([0,0])).toBe(true);
});

test('Place a 2-square horizontal ship at a specified location on gameboard', () => {
    const game = Gameboard();
    game.placeShip([0,0], 2, "x");
    expect(game.hasShip([0,1])).toBe(true);
});

test('Place a 2-square vertical ship at a specified location on gameboard', () => {
    const game = Gameboard();
    game.placeShip([2,0], 2, "y");
    expect(game.hasShip([1,0])).toBe(true);
});