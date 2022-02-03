const Potion = require('../lib/Potion');
jest.mock('../lib/Potion');

//console.log(new Potion());

const Player = require('../lib/Player.js');

test('creates a player object', () => {
    const player = new Player('Shart');

    expect(player.name).toBe('Shart');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});

///// new test /////

test("gets player's stats as an object", () => {
    const player = new Player('Shart');

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

///// new test /////

test('gets inventory from player or returns false', () => {
    const player = new Player('Shart');

    expect(player.getInventory()).toEqual(expect.any(Array));

    player.inventory = [];
    
    expect(player.getInventory()).toEqual(false);
});

/////  new test  /////

test("gets player's health value", () => {
    const player = new Player('Shart');

    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
});

/////  new test  /////

test('checks if player is alive or not', () => {
    const player = new Player('Shart');

    expect(player.isAlive()).toBeTruthy();

    player.health = 0;

    expect(player.isAlive()).toBeFalsy();
});

/////  new test  /////

test("subtracts from player's health", () => {
    const player = new Player('Shart');
    const oldHealth = player.health;

    player.reduceHealth(5);

    expect(player.health).toBe(oldHealth - 5);
    
    player.reduceHealth(99999);
    
    expect(player.health).toBe(0);
});



