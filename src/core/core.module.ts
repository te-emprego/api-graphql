import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

import { GqlConfigService } from './services/gql-config/gql-config.service';
import {
  MongooseConfigService,
} from './services/mongoose-config/mongoose-config.service';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GqlConfigService,
    }),
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
  ],
})
export class CoreModule {}
