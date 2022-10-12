import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedback } from 'src/typeorm/entities/Feedback';
import { FeedbacksController } from './controllers/feedback.controller';
import { FeedbacksService } from './service/feedback.service';

@Module({
  controllers: [FeedbacksController],
  providers: [FeedbacksService],
  imports: [TypeOrmModule.forFeature([Feedback])],
})
export class FeedbacksModule {}
