import Team from '../app';

test('Test add char error', () => {
  expect(() => {
    const team = new Team();
    team.add('Bowerman');
    team.add('Bowerman');
  }).toThrow('Дублирование персонажа!');
});

test('Test add char', () => {
  const team = new Team();
  team.add('Daemon');
  team.add('Swordsman');
  expect(team.members.size).not.toBe(1);
});

test('Test addAll', () => {
  const team = new Team();
  team.addAll('Magician', 'Zombie', 'Magician');
  expect(team.members.size).not.toBe(3);
});

test('Test toArray', () => {
  const team = new Team();
  team.addAll('Undead', 'Magician', 'Zombie', 'Magician');
  const result = [...team.members];
  expect(team.toArray()).toEqual(result);
});
