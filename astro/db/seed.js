import { db, Pokemon } from 'astro:db'
import pokemon from './pokemon.json'

export default async function () {
  await db.insert(Pokemon).values(pokemon)
}
