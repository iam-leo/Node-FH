const heroes = [
  { id: 1, name: 'Superman', owner: 'DC' },
  { id: 2, name: 'Batman', owner: 'DC' },
  { id: 3, name: 'Ironman', owner: 'Marvel' },
  { id: 4, name: 'Spiderman', owner: 'Marvel' },
  { id: 5, name: 'Hulk', owner: 'Marvel' },
]

const findHeroById = (id: number) => {
  return heroes.find(hero => hero.id === id);
}

// Example usage:
const hero = findHeroById(2);
console.log(hero?.name ?? 'Hero not found!!!'); // { id: 3, name: 'Ironman', owner: 'Marvel' }