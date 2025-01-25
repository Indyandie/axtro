import { column, defineDb, defineTable } from 'astro:db'

const Pokemon = defineTable({
  columns: {
    id: column.number(),
    name: column.text(),
    weight: column.number(),
    height: column.number(),
    types: column.text(),
    sprite: column.text(),
    cries: column.text(),
    official: column.boolean(),
  },
})

export default defineDb({
  tables: { Pokemon },
})
