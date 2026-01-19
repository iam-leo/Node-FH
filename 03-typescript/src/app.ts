import { findHeroById } from "./services/hero.services";




// Example usage:
const hero = findHeroById(2);
console.log(hero?.name ?? 'Hero not found!!!'); // { id: 3, name: 'Ironman', owner: 'Marvel' }