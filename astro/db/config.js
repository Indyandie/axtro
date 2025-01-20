import { column, defineDb, defineTable } from 'astro:db'

const Pokemon = defineTable({
  columns: {
    id: column.number(),
    name: column.text(),
  },
})

export default defineDb({
  tables: { Pokemon },
})
