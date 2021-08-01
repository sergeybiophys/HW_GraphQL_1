import { Field, ID,  ObjectType } from '@nestjs/graphql';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

@ObjectType()

export class TaskDto {
    @Field()
    // @IsNumber()
    // @IsNotEmpty()
     _id:number;
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