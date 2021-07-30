import {Injectable} from '@nestjs/common';

interface Task {
    id?: number;
    tag: string;
    comment: string;
    creation: Date;
    deadline: Date;
    priority: number;
    status: string;
}

@Injectable() 
export class TasksService {
    static tasks: Task[] = [
        // {
        //     id: 1,
        //     tag: 'task1',
        //     comment: 'task1',
        //     creation: new Date(),
        //     deadline: new Date(),
        //     priority: 1,
        //     status: 'A',
        // },
        // {
        //     id: 2,
        //     tag: 'task2',
        //     comment: 'task2',
        //     creation: new Date(),
        //     deadline: new Date(),
        //     priority: 2,
        //     status: 'C',
        // },
        // {
        //     id: 3,
        //     tag: 'task3',
        //     comment: 'task3',
        //     creation: new Date(),
        //     deadline: new Date(),
        //     priority: 3,
        //     status: 'N/A',
        // },

    ];

    async allTasks(): Promise<Task[]> {
        return TasksService.tasks;
    }

    async getTaskById(id:number): Promise<Task> {
        return TasksService.tasks.find((t) => t.id===id,);
    }

    async getTaskByTag(tag:string): Promise<Task> {
        return TasksService.tasks.find((t) => t.tag===tag,);
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
}