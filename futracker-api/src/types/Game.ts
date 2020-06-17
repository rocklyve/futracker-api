import { objectType } from '@nexus/schema'

export const Game = objectType({
  name: 'Game',
  definition(t) {
    t.model.id()
    t.model.extra_time()
    t.model.opponent_tag()
    t.model.penalty()
    t.model.penalty_win()
    t.model.rage_quit()
    t.model.result()
    t.model.time()
    t.model.user_id()
    t.model.wl_id()
  },
})