import { Injectable } from '@nestjs/common';

import { JobCreationDto } from '../dto/job-creation.dto';
import { IJob } from '../interfaces/job.interface';

@Injectable()
export class JobService {
  async createJob(jobCreationDto: JobCreationDto): Promise<IJob> {
    return {
      jobId: 'fakeJobId',
      title: 'Senior Developer',
    };
  }

  async getJobById(jobId: string): Promise<IJob> {
    return {
      jobId: 'fakeJobId',
      title: 'Senior Developer',
    };
  }
}
