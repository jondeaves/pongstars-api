import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateLeagueInput {
  @Field({ description: 'Unique string identifying the League' })
  ident: string;

  @Field({ description: 'Friendly name of the League' })
  title: string;
}
