import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Feedback } from 'src/typeorm/entities/Feedback';
import { createFeedbackParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class FeedbacksService {
  constructor(
    @InjectRepository(Feedback)
    private feedbackRepository: Repository<Feedback>,
  ) {}

  getFeedbacks() {
    return this.feedbackRepository.find();
  }

  createFeedback(createFeedbackData: createFeedbackParams) {
    const newFeedback = this.feedbackRepository.create({
      ...createFeedbackData,
      createdAt: new Date(),
    });

    return this.feedbackRepository.save(newFeedback);
  }
}
