import { ConfigService } from '../../common/services/config/config.service';

export const LinkedinConfigProvider = {
  provide: 'LINKEDIN_CONFIG',
  useFactory: (configService: ConfigService) => {
    const linkedinScope = configService.get('LINKEDIN_SCOPE').split(',');

    const linkedinConfig = {
        clientID: configService.get('LINKEDIN_CLIENT_ID'),
        clientSecret: configService.get('LINKEDIN_CLIENT_SECRET'),
        callbackURL: configService.get('LINKEDIN_CALLBACK_URL'),
        scope: linkedinScope,
    };

    return linkedinConfig;
  },
  inject: [ConfigService],
};
