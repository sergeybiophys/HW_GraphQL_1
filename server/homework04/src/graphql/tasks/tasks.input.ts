import { Field, InputType, Int } from '@nestjs/graphql';
import { IsDate, IsNumber, IsString } from 'class-validator';
import {DateTimeResolver, DateTimeTypeDefinition} from 'graphql-scalars'

@InputType()
export class TaskByIdInputRequest {
  @Field()
  @IsNumber()
  readonly _id: number;
}


@InputType()
export class TaskByTagInputRequest {
  @Field()
  @IsString()
  readonly tag: string;
}

@InputType()
export class CreateTaskInputRequest {
  @Field()
  @IsNumber()
  readonly _id: number;
  @Field()
  @IsString()
  readonly tag: string;
  @Field()
  @IsString()
  readonly comment: string;
  @Field()
  @IsDate()
  readonly creation: Date;
  @Field()
  @IsDate()
  readonly deadline: Date;
  @Field()
  @IsNumber()
  readonly priority: number;
  @Field()
  @IsString()
  readonly status: string;
}

@InputType()
export class UpdateTaskInputRequest extends CreateTaskInputRequest{
  @Field()
  @IsNumber()
  readonly _id: number;
}