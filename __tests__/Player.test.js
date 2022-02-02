const Player = require('../lib/Player.js');

test('creates a player object', () => {
    const player = new Player('Shart');

    expect(player.name).toBe('Shart');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
});

