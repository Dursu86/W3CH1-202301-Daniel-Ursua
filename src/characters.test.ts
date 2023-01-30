import { Character } from './characters';

describe('Given the class Character', () => {
  describe('When we pass the values: Alfred, Hooks, 46', () => {
    test('We recibe a new character.', () => {
      const input = new Character('Alfred', 'Hooks', 81);
      expect(input).toHaveProperty('name');
      expect(input).toHaveProperty('family');
      expect(input).toHaveProperty('age');
      expect(input).toHaveProperty('isLive');
      expect(input).toHaveProperty('serie');
    });
  });
});

describe('Given a new character', () => {
  describe('When we run the died method', () => {
    test('The isLive status change to false', () => {
      const characterOne = new Character('Alfred', 'Hooks', 81);
      characterOne.died();
      expect(characterOne.isLive).toBe(false);
    });
  });
});
