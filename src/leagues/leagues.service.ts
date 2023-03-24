import { Injectable } from '@nestjs/common';
import { CreateLeagueInput } from './dto/create-league.input';
import { UpdateLeagueInput } from './dto/update-league.input';
import { League } from './entities/league.entity';

const leagues: League[] = [
  {
    ident: 'glasgow-pongstars',
    title: 'Glasgow Pongstars',
  },
  {
    ident: 'edinburgh-pongstars',
    title: 'Edinburgh Pongstars',
  },
];

@Injectable()
export class LeaguesService {
  create(createLeagueInput: CreateLeagueInput) {
    return 'This action adds a new league';
  }

  findAll() {
    return leagues;
  }

  findOne(ident: string) {
    return leagues.find((league) => league.ident === ident);
  }

  update(ident: string, updateLeagueInput: UpdateLeagueInput) {
    return `This action updates a #${ident} league`;
  }

  remove(ident: string) {
    return `This action removes a #${ident} league`;
  }
}
