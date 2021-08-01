import { Field, ID,  ObjectType } from '@nestjs/graphql';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

@ObjectType()

export class TaskDto {
    @Field()
<<<<<<< HEAD
    @IsNumber()
    @IsNotEmpty()
     _id?:number;
=======
    // @IsNumber()
    // @IsNotEmpty()
     _id:number;
>>>>>>> 43dbc8422a18077bcdaa05bf9415d2bd29cd760d
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