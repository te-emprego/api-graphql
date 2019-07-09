import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { JobResolver } from './resolvers/job/job.resolver';
import { JobService } from './services/job.service';

@Module({
  imports: [
    // MongooseModule.forFeature([
    //   // {
    //   //   name: 'User',
    //   //   schema: UserSchema,
    //   // },
    // ]),
  ],
  providers: [
    JobResolver,
    JobService,
  ],
})
export class AuthModule {}
