import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateFeedbackDto } from '../dtos/createFeedback.dto';
import { FeedbacksService } from '../service/feedback.service';

@Controller('feedbacks')
export class FeedbacksController {
  constructor(private feedbackService: FeedbacksService) {}

  @Get()
  async getFeedbacks() {
    await this.feedbackService.getFeedbacks();
  }

  @Post()
  async createFeedback(@Body() createFeedbackDto: CreateFeedbackDto) {
    await this.feedbackService.createFeedback(createFeedbackDto);
  }
}
