import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class League {
  @Field({ description: 'Unique string identifying the League' })
  ident: string;

  @Field({ description: 'Friendly name of the League' })
  title: string;
}
