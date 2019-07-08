import { Length } from 'class-validator';

export class JobCreationDto {
  @Length(2, 50)
  readonly title: string;
}
