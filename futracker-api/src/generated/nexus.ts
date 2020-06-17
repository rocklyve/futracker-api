/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import * as Context from "../context"



declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Assist: { // root type
    game_id?: number | null; // Int
    id: number; // Int!
    player_id?: number | null; // Int
    user_id?: number | null; // Int
  }
  AuthPayload: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Game: { // root type
    extra_time?: boolean | null; // Boolean
    id: number; // Int!
    opponent_tag?: string | null; // String
    penalty?: boolean | null; // Boolean
    penalty_win?: boolean | null; // Boolean
    rage_quit?: boolean | null; // Boolean
    result?: string | null; // String
    time?: any | null; // DateTime
    user_id?: number | null; // Int
    wl_id?: number | null; // Int
  }
  Goal: { // root type
    game_id?: number | null; // Int
    id: number; // Int!
    player_id?: number | null; // Int
    user_id?: number | null; // Int
  }
  Mutation: {};
  Player: { // root type
    id: number; // Int!
    name?: string | null; // String
    rating?: number | null; // Int
    skills?: number | null; // Int
    user_id?: number | null; // Int
    version?: string | null; // String
    weak_foot?: number | null; // Int
  }
  Query: {};
  Team: { // root type
    creation_date: any; // DateTime!
    id: number; // Int!
    name?: string | null; // String
    user_id?: number | null; // Int
  }
  User: { // root type
    email?: string | null; // String
    gender?: string | null; // String
    id: number; // Int!
    language?: string | null; // String
    name?: string | null; // String
  }
  WeekendLeague: { // root type
    end?: any | null; // DateTime
    id: number; // Int!
    name: string; // String!
    start?: any | null; // DateTime
    team_id?: number | null; // Int
    user_id?: number | null; // Int
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
}

export interface NexusGenFieldTypes {
  Assist: { // field return type
    game_id: number | null; // Int
    id: number; // Int!
    player_id: number | null; // Int
    user_id: number | null; // Int
  }
  AuthPayload: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Game: { // field return type
    extra_time: boolean | null; // Boolean
    id: number; // Int!
    opponent_tag: string | null; // String
    penalty: boolean | null; // Boolean
    penalty_win: boolean | null; // Boolean
    rage_quit: boolean | null; // Boolean
    result: string | null; // String
    time: any | null; // DateTime
    user_id: number | null; // Int
    wl_id: number | null; // Int
  }
  Goal: { // field return type
    game_id: number | null; // Int
    id: number; // Int!
    player_id: number | null; // Int
    user_id: number | null; // Int
  }
  Mutation: { // field return type
    addWL: NexusGenRootTypes['WeekendLeague']; // WeekendLeague!
    login: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    signup: NexusGenRootTypes['AuthPayload']; // AuthPayload!
  }
  Player: { // field return type
    id: number; // Int!
    name: string | null; // String
    rating: number | null; // Int
    skills: number | null; // Int
    user_id: number | null; // Int
    version: string | null; // String
    weak_foot: number | null; // Int
  }
  Query: { // field return type
    allWeekendLeague: NexusGenRootTypes['WeekendLeague'][]; // [WeekendLeague!]!
    me: NexusGenRootTypes['User'] | null; // User
  }
  Team: { // field return type
    creation_date: any; // DateTime!
    id: number; // Int!
    name: string | null; // String
    user_id: number | null; // Int
  }
  User: { // field return type
    email: string | null; // String
    gender: string | null; // String
    id: number; // Int!
    language: string | null; // String
    name: string | null; // String
  }
  WeekendLeague: { // field return type
    end: any | null; // DateTime
    id: number; // Int!
    name: string; // String!
    start: any | null; // DateTime
    team_id: number | null; // Int
    user_id: number | null; // Int
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    addWL: { // args
      name: string; // String!
      time: string; // String!
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    signup: { // args
      email: string; // String!
      name?: string | null; // String
      password: string; // String!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Assist" | "AuthPayload" | "Game" | "Goal" | "Mutation" | "Player" | "Query" | "Team" | "User" | "WeekendLeague";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: Context.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}