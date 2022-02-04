const Enemy = require('../lib/Enemy.js');
const Potion = require('../lib/Potion.js');

jest.mock('../lib/Potion.js');

/////  new test  /////

test('creates an enemy object', () => {
    const enemy = new Enemy('goblin', 'sword')

    expect(enemy.name).toBe('goblin');
    expect(enemy.weapon).toBe('sword');
    expect(enemy.health).toEqual(expect.any(Number));
    expect(enemy.strength).toEqual(expect.any(Number));
    expect(enemy.agility).toEqual(expect.any(Number));
    expect(enemy.potion).toEqual(expect.any(Object));
});

/////  new test  /////

test("gets enemy's health value", () => {
    const enemy = new Enemy('goblin');

    expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
});

/////  new test  /////

test('checks if enemy is alive or not', () => {
    const enemy = new Enemy('goblin');

    expect(enemy.isAlive()).toBeTruthy();

    enemy.health = 0;

    expect(enemy.isAlive()).toBeFalsy();
});

/////  new test  /////

test("gets enemy's attack value", () => {
    const enemy = new Enemy('Shart');
    enemy.strength = 10;

    expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
});

/////  new test  /////

test("subtracts from enemy's health", () => {
    const enemy = new Enemy('goblin');
    const oldHealth = enemy.health;

    enemy.reduceHealth(5);

    expect(enemy.health).toBe(oldHealth - 5);
    
    enemy.reduceHealth(99999);
    
    expect(enemy.health).toBe(0);
});

/////  new test  /////

test('gets a description of the enemy', () => {
    const enemy = new Enemy('goblin', 'sword');

    expect(enemy.getDescription()).toEqual(expect.stringContaining('goblin'));
    expect(enemy.getDescription()).toEqual(expect.stringContaining('sword'));
});
