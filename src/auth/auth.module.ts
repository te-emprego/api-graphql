import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { authenticate } from 'passport';

import { LinkedinController } from './controllers/linkedin/linkedin.controller';
import { LinkedinConfigProvider } from './providers/linkedin-config.provider';
import { JobResolver } from './resolvers/job/job.resolver';
import { JobService } from './services/job.service';
import { LinkedInStrategy } from './strategies/linked-in.strategy';

@Module({
  controllers: [LinkedinController],
  imports: [
    // MongooseModule.forFeature([
    //   // {
    //   //   name: 'User',
    //   //   schema: UserSchema,
    //   // },
    // ]),
  ],
  providers: [
    LinkedinConfigProvider,
    JobResolver,
    JobService,
    LinkedInStrategy,
  ],
})
export class AuthModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(authenticate('linkedin', { session: false }))
      .forRoutes({
        path: 'auth/linkedin',
        method: RequestMethod.GET,
      });
  }
}
