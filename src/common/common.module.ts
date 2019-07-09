import { Global, Module } from '@nestjs/common';

import { ConfigProvider } from './providers/config.provider';
import { ConfigService } from './services/config/config.service';

@Global()
@Module({
  providers: [ConfigProvider],
  exports: [ConfigService],
})
export class CommonModule {}
