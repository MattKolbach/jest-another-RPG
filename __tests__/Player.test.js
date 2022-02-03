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

/////  new test  /////

test("gets player's attack value", () => {
    const player = new Player('Shart');
    player.strength = 10;

    expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(player.getAttackValue()).toBeLessThanOrEqual(15);
});

/////  new test  /////

test('adds a potion to the player inventory', () => {
    const player = new Player('Shart');
    const oldCount = player.inventory.length;

    player.addPotion(new Potion());

    expect(player.inventory.length).toBeGreaterThan(oldCount);
});

/////  new test  /////

test('uses a potion from inventory', () => {
    const player = new Player('Shart');
    player.inventory = [new Potion(), new Potion(), new Potion()];
    const oldCount = player.inventory.length;

    player.usePotion(1);

    expect(player.inventory.length).toBeLessThan(oldCount);
});


