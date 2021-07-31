import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskDto } from './dto/tasks.dto';
import { TasksService } from '../../database/tasks/tasks.service';
import {
  CreateTaskInputRequest,
  TaskByTagInputRequest,
  TaskByIdInputRequest,
  UpdateTaskInputRequest,
} from './tasks.input';

@Resolver('products')
export class TasksResolver {
  constructor(private tasksService: TasksService) {}

  @Query(() => [TaskDto])
  async getAllTasks(): Promise<TaskDto[]> {
    return this.tasksService.allTasks();
  }

  @Query(() => [TaskDto])
  async getTaskById(
    @Args('body') body: TaskByIdInputRequest,
  ): Promise<TaskDto> {
    return this.tasksService.getTaskById(body.id);
  }

  @Query(() => [TaskDto])
  async getTaskByTag(
    @Args('body') body: TaskByTagInputRequest,
  ): Promise<TaskDto> {
    return this.tasksService.getTaskByTag(body.tag);
  }

  @Mutation(() => TaskDto)
  async createNewTask(
    @Args('body') body: CreateTaskInputRequest,
  ): Promise<TaskDto> {
    return this.tasksService.createTask(body);
  }

  @Mutation(() => TaskDto)
  async updateProduct(
    @Args('body') body: UpdateTaskInputRequest,
  ): Promise<TaskDto> {
    return this.tasksService.updateTask(body);
  }
}
