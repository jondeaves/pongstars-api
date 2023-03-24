import { CreateLeagueInput } from './create-league.input';
import { InputType, PartialType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateLeagueInput extends PartialType(CreateLeagueInput) {
  @Field({ description: 'Unique string identifying the League' })
  ident: string;

  @Field({ description: 'Friendly name of the League' })
  title: string;
}
