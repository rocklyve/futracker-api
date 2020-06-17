import { objectType } from '@nexus/schema'

export const Assist = objectType({
  name: 'Assist',
  definition(t) {
    t.model.id()
    t.model.game_id()
    t.model.player_id()
    t.model.user_id()
  },
})