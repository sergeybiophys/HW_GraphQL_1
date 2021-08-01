import {Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { extend } from '@nestjs/graphql/dist/utils';

// import {Repository} from 'typeorm';
// import {InjectRepository} from '@nestjs/typeorm';

export interface Task  {
<<<<<<< HEAD
    readonly _id?: number;
=======
     _id: number;
>>>>>>> 43dbc8422a18077bcdaa05bf9415d2bd29cd760d
    tag: string;
    comment: string;
    creation: Date;
    deadline: Date;
    priority: number;
    status: string;
<<<<<<< HEAD

=======
>>>>>>> 43dbc8422a18077bcdaa05bf9415d2bd29cd760d
 
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
<<<<<<< HEAD
             _id: 1,
=======
            _id: 1,
>>>>>>> 43dbc8422a18077bcdaa05bf9415d2bd29cd760d
            tag: 'task1',
            comment: 'task1',
            creation: new Date('2000-01-01'),
            deadline: new Date('2000-01-01'),
            priority: 1,
            status: 'A',
  
        },
        {
            _id: 2,
            tag: 'task2',
            comment: 'task2',
            creation: new Date('2000-01-01'),
            deadline: new Date('2000-01-01'),
            priority: 2,
            status: 'C',
        },
        {
            _id: 3,
            tag: 'task3',
            comment: 'task3',
            creation: new Date('2000-01-01'),
            deadline: new Date('2000-01-01'),
            priority: 3,
            status: 'N/A',
        },

    ];

    async allTasks(): Promise<Task[]> {
        return TasksService.tasks;
    }

    async getTaskById(id:number): Promise<Task> {
        return TasksService.tasks.find((t) => t._id===id,);
    }

    async getTaskByTag(task: {tag: string;}): Promise<Task> {
        return TasksService.tasks.find((t) => t.tag===task.tag,);
    }

    async updateTask(task:Task): Promise<Task> {
        const srchTask = TasksService.tasks.find(
<<<<<<< HEAD
            (t) =>t._id===task._id,
=======
            (t) =>t.tag===task.tag,
>>>>>>> 43dbc8422a18077bcdaa05bf9415d2bd29cd760d
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
        TasksService.tasks[TasksService.tasks.length-1]._id+1:1;
        const newTask: Task = {
            _id: Number(newId),
            ...task,
        };
        TasksService.tasks.push(newTask);
        return newTask;
    }

 
    async deleteTask(id:number): Promise<Task[]>{
       let ind = TasksService.tasks.findIndex((t) => t._id === id);
       return TasksService.tasks.splice(ind,1);
    }
}