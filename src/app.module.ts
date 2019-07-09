import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

import { JobResolver } from './resolvers/job/job.resolver';
import { ConfigService } from './services/config.service';
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
    {
      provide: ConfigService,
      useValue:
        new ConfigService(`${process.env.NODE_ENV || 'dev'}.env`),
    },
    JobResolver,
    JobService,
  ],
})
export class AppModule {}
