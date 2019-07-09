import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

import { JobResolver } from './resolvers/job/job.resolver';
import { GqlConfigService } from './services/gql-config.service';
import { JobService } from './services/job.service';
import { MongooseConfigService } from './services/mongoose-config.service';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GqlConfigService,
    }),
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
  ],
  providers: [
    JobResolver,
    JobService,
  ],
})
export class AppModule {}
