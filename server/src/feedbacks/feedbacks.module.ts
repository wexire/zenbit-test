import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedback } from 'src/typeorm/entities/Feedback';
import { ControllersController } from './controllers/controllers.controller';
import { ServiceService } from './service/service.service';

@Module({
  controllers: [ControllersController],
  providers: [ServiceService],
  imports: [TypeOrmModule.forFeature([Feedback])],
})
export class FeedbacksModule {}
