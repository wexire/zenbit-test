import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateFeedbackDto } from '../dtos/createFeedback.dto';
import { FeedbacksService } from '../service/feedback.service';

@Controller('feedbacks')
export class FeedbacksController {
  constructor(private feedbackService: FeedbacksService) {}

  @Get()
  getFeedbacks() {}

  @Post()
  createFeedback(@Body() createFeedbackDto: CreateFeedbackDto) {
    this.feedbackService.createFeedback(createFeedbackDto);
  }
}
