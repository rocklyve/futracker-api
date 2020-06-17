import { objectType } from '@nexus/schema'

export const Team = objectType({
  name: 'Team',
  definition(t) {
    t.model.id()
    t.model.creation_date()
    t.model.name()
    t.model.user_id()
    t.model.wl_used()
  },
})