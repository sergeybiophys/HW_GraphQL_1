import { Field, ID,  ObjectType } from '@nestjs/graphql';

@ObjectType()

export class TaskDto {
    @Field()
    readonly id?:number;
    @Field()
    tag: string;
    @Field()
    comment: string;
    @Field()
    creation: Date;
    @Field()
    deadline: Date;
    @Field()
    priority: number;
    @Field()
    status: string;
}