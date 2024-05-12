import { Module } from '@nestjs/common';
import { TaskCategoriesService } from './task_categories.service';
import { TaskCategoriesController } from './task_categories.controller';

@Module({
  controllers: [TaskCategoriesController],
  providers: [TaskCategoriesService],
})
export class TaskCategoriesModule {}
