import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [
    CoreModule,
    AuthModule,
    CommonModule,
  ],
})
export class AppModule {}
