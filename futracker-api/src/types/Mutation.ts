import { intArg, mutationType, stringArg } from '@nexus/schema'
import { compare, hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { APP_SECRET, getUserId } from '../utils'
import { print } from 'graphql'
import { prismaVersion } from '@prisma/client'

export const Mutation = mutationType({
  definition(t) {
    t.field('signup', {
      type: 'AuthPayload',
      args: {
        name: stringArg(),
        email: stringArg({ nullable: false }),
        password: stringArg({ nullable: false }),
      },
      resolve: async (_parent, { name, email, password }, ctx) => {
        const hashedPassword = await hash(password, 10)
        const user = await ctx.prisma.user.create({
          data: {
            name,
            email,
            password: hashedPassword,
          },
        })
        return {
          token: sign({ userId: user.id }, APP_SECRET),
          user,
        }
      },
    })

    t.field('login', {
      type: 'AuthPayload',
      args: {
        email: stringArg({ nullable: false }),
        password: stringArg({ nullable: false }),
      },
      resolve: async (_parent, { email, password }, ctx) => {
        const user = await ctx.prisma.user.findOne({
          where: {
            email,
          },
        })
        if (!user) {
          throw new Error(`No user found for email: ${email}`)
        }
        const passwordValid = await compare(password, user.password)
        if (!passwordValid) {
          throw new Error('Invalid password')
        }
        return {
          token: sign({ userId: user.id }, APP_SECRET),
          user,
        }
      },
    })

    t.field('addWL', {
      type: 'WeekendLeague',
      args: {
        name: stringArg({ nullable: false }),
        time: stringArg({ nullable: false }),
      },
      resolve: (parent, args, ctx) => {
        const userId = getUserId(ctx)
        
        if (!userId) throw new Error('Could not authenticate user.')
        console.log(args.name)
        return ctx.prisma.weekendLeague.create({
         data: {
           name: args.name,
           start: new Date(args.time),
           User: { connect: { id: Number(userId) } },
         },
        })
      }
    })

    // updateWL
    // deleteWL
    
    // addGame
    // updateGame
    // deleteGame

    // addGoal
    // updateGoal
    // deleteGoal

    // addAssist
    // updateAssist
    // deleteAssist

    // addPlayer
    // updatePlayer
    // deletePlayer

    // addTeam
    // updateTeam
    // deleteTeam

    // updateUser
    // deleteUser
    // logout




    // t.field('deletePost', {
    //   type: 'Post',
    //   nullable: true,
    //   args: { id: intArg({ nullable: false }) },
    //   resolve: (parent, { id }, ctx) => {
    //     return ctx.prisma.post.delete({
    //       where: {
    //         id,
    //       },
    //     })
    //   },
    // })

    // t.field('publish', {
    //   type: 'Post',
    //   nullable: true,
    //   args: { id: intArg() },
    //   resolve: (parent, { id }, ctx) => {
    //     return ctx.prisma.post.update({
    //       where: { id },
    //       data: { published: true },
    //     })
    //   },
    // })
  },
})
