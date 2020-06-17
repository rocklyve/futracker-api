import { objectType } from '@nexus/schema'

export const WeekendLeague = objectType({
  name: 'WeekendLeague',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.game()
    t.model.start()
    t.model.end()
    t.model.user_id()
  },
})