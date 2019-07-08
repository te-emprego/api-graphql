import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { GqlConfigService } from './services/gql-config.service';
import { JobResolver } from './resolvers/job/job.resolver';
import { JobService } from './services/job.service';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GqlConfigService,
    }),
  ],
  providers: [
    JobResolver,
    JobService,
  ],
})
export class AppModule {}
