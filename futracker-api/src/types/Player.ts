import { objectType } from '@nexus/schema'

export const Player = objectType({
  name: 'Player',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.rating()
    t.model.skills()
    t.model.weak_foot()
    t.model.version()
    t.model.user_id()
  },
})