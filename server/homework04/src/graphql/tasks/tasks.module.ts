import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksResolver } from './tasks.resolver';
import { TasksService } from '../../database/tasks/tasks.service';


@Module({
  imports: [],
  providers: [TasksResolver, TasksService],
  exports: [],
})
export class TasksModule {}