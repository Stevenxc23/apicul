import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/entities/task.entity';
import { TaskCategoriesModule } from './task_categories/task_categories.module';
import { TaskCategory } from './task_categories/entities/task_category.entity';
import { TaskStatusModule } from './task_status/task_status.module';
import { TaskStatus } from './task_status/entities/task_status.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'apiculsteven',
    entities: [User, Task, TaskCategory, TaskStatus],
    synchronize: true,
  }), UserModule, TasksModule, TaskCategoriesModule, TaskStatusModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
