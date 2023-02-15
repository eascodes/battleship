import { Ship } from "./src/ship";

test('Increases hit number by 1 when called', () => {
    const testShip = Ship(3);
    const newShip = testShip.hit(testShip);
    expect(newShip.hitNum).toBe(1);
});

// Test using new variables for each hit
test('1 - Increases hit number by 2 when called twice', () => {
    const testShip = Ship(3);
    const testShip1 = testShip.hit(testShip);
    const testShip2 = testShip1.hit(testShip1);
    expect(testShip2.hitNum).toBe(2);
});

// Test redefining variable for each hit
test('2 - Increases hit number by 2 when called twice', () => {
    let testShip = Ship(3);
    testShip = testShip.hit(testShip);
    testShip = testShip.hit(testShip);
    expect(testShip.hitNum).toBe(2);
});

test('Return true if ship is sunk', () => {
    let testShip = Ship(2);
    testShip = testShip.hit(testShip);
    testShip = testShip.hit(testShip);
    expect(testShip.isSunk(testShip)).toBe(true);
});

test('Return false if ship is not sunk', () => {
    let testShip = Ship(4);
    testShip = testShip.hit(testShip);
    testShip = testShip.hit(testShip);
    expect(testShip.isSunk(testShip)).toBe(false);
});