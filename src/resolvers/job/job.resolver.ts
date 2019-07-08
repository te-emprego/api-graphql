import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { JobCreationDto } from '../../dto/job-creation.dto';
import { IJob } from '../../interfaces/job.interface';
import { JobService } from '../../services/job.service';

@Resolver('Job')
export class JobResolver {
  constructor(
    private readonly jobService: JobService,
  ) {}

  @Mutation('createJob')
  async createJob(
    @Args('jobCreationInput') jobCreationDto: JobCreationDto,
  ): Promise<IJob> {
    const createdJob = await this.jobService.createJob(jobCreationDto);

    return createdJob;
  }

  @Query('getJob')
  async getJob(@Args('jobId') jobId: string): Promise<IJob> {
    const job = await this.jobService.getJobById(jobId);

    return job;
  }
}
