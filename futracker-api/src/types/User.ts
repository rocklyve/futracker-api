import { objectType } from '@nexus/schema'
import { tmpdir } from 'os'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.email()
    t.model.gender()
    t.model.language()
  },
})
