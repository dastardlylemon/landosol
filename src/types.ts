import { DataTypes, Model } from 'sequelize';
import DataLoader from 'dataloader';

export type SequelizeDataTypes = typeof DataTypes;

export type AssociatedModel = typeof Model & {
  associate?: (models: any) => void;
};

export type Models = {
  [key: string]: any;
};

export type Loaders = {
  [key: string]: DataLoader<any, any>;
};

export interface Context {
  models: Models;
  loaders: Loaders;
}

export type ResolverFn = (parent: any, args: any, ctx: Context) => any;

export interface ResolverMap {
  [field: string]: ResolverFn;
}

export interface Resolvers {
  [resolver: string]: ResolverMap;
}
