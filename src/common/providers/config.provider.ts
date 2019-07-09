import { ConfigService } from '../services/config/config.service';

export const ConfigProvider = {
  provide: ConfigService,
  useFactory: () => {
    const environment =
      process.env.NODE_ENV === 'production'
      || process.env.NODE_ENV === 'staging'
        ? process.env.NODE_ENV : 'development';

    const configServiceInstance =
      new ConfigService(`${environment}.env`);

    return configServiceInstance;
  },
};
