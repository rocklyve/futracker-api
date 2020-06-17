import { rule, shield } from 'graphql-shield'
import { getUserId } from '../utils'
import { print } from 'graphql'

const rules = {
  isAuthenticatedUser: rule()((parent, args, context) => {
    const userId = getUserId(context)
    return Boolean(userId)
  }),
  // isGameOwner: rule()(async (parent, { id }, context) => {
  //   const userId = getUserId(context)
  //   const game = await context.prisma.game
  //     .findOne({
  //       where: {
  //         id: Number(id),
  //       },
  //     })
  //     .game()
  //   return userId === game.userId
  // }),
}

export const permissions = shield({
  Query: {
    me: rules.isAuthenticatedUser,
    // filterPosts: rules.isAuthenticatedUser,
    // post: rules.isAuthenticatedUser,
  },
  Mutation: {
    createWL: rules.isAuthenticatedUser,
    // createDraft: rules.isAuthenticatedUser,
    // deletePost: rules.isPostOwner,
    // publish: rules.isPostOwner,
  },
})
