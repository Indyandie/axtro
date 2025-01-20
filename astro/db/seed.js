import { db, Pokemon } from 'astro:db'

export default async function () {
  await db.insert(Pokemon).values([
    { id: 1, name: 'Bulbasaur' },
    { id: 2, name: 'Ivysaur' },
  ])
}
