import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-linkedin-oauth2';

import { ILinkedinConfig } from '../interfaces/linkedin-config.interface';

@Injectable()
export class LinkedInStrategy extends PassportStrategy(Strategy, 'linkedin') {
  constructor(
    @Inject('LINKEDIN_CONFIG')
    private readonly linkedInConfig: ILinkedinConfig,
  ) {
    super(linkedInConfig);
  }
}
