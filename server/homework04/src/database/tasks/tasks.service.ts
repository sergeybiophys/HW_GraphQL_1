import {Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { extend } from '@nestjs/graphql/dist/utils';

// import {Repository} from 'typeorm';
// import {InjectRepository} from '@nestjs/typeorm';

export interface Task  {
    id?: number;
    tag: string;
    comment: string;
    creation: Date;
    deadline: Date;
    priority: number;
    status: string;
}

@Injectable() 
export class TasksService  {

    // consructor(
    // @InjectRepository(Task)
    // private taskRepository: Repository<Task>,
    // ) {} 

    //  @InjectRepository(Task)

    static tasks: Task[] = [
        {
            id: 1,
            tag: 'task1',
            comment: 'task1',
            creation: new Date(),
            deadline: new Date(),
            priority: 1,
            status: 'A',
        },
        {
            id: 2,
            tag: 'task2',
            comment: 'task2',
            creation: new Date(),
            deadline: new Date(),
            priority: 2,
            status: 'C',
        },
        {
            id: 3,
            tag: 'task3',
            comment: 'task3',
            creation: new Date(),
            deadline: new Date(),
            priority: 3,
            status: 'N/A',
        },

    ];

    async allTasks(): Promise<Task[]> {
        return TasksService.tasks;
    }

    async getTaskById(id:number): Promise<Task> {
        return TasksService.tasks.find((t) => t.id===id,);
    }

    async getTaskByTag(task: {tag: string;}): Promise<Task> {
        return TasksService.tasks.find((t) => t.tag===task.tag,);
    }

    async updateTask(task:Task): Promise<Task> {
        const srchTask = TasksService.tasks.find(
            (t) =>t.id===task.id,
        )
        if(!srchTask) {
            throw new Error('Task not found');
        }
        srchTask.tag = task.tag;
        srchTask.comment = task.comment;
        srchTask.creation = task.creation;
        srchTask.deadline = task.deadline;
        srchTask.priority = task.priority;
        srchTask.status = task.status;

        return srchTask;
    }

    async createTask(task: Task): Promise<Task> {
        const newId = TasksService.tasks.length?
        TasksService.tasks[TasksService.tasks.length-1].id+1:1;
        const newTask: Task = {
            id: Number(newId),
            ...task,
        };
        TasksService.tasks.push(newTask);
        return newTask;
    }

 
    async deleteTask(tag:string): Promise<Task[]>{
       let ind = TasksService.tasks.findIndex((t) => t.tag === tag);
       return TasksService.tasks.splice(ind,1);
    }
}