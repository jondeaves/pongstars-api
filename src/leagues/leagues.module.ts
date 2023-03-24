import { Module } from '@nestjs/common';
import { LeaguesService } from './leagues.service';
import { LeaguesResolver } from './leagues.resolver';

@Module({
  providers: [LeaguesResolver, LeaguesService],
})
export class LeaguesModule {}
