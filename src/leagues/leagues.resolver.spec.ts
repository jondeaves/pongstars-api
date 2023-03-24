import { Test, TestingModule } from '@nestjs/testing';
import { LeaguesResolver } from './leagues.resolver';
import { LeaguesService } from './leagues.service';

describe('LeaguesResolver', () => {
  let resolver: LeaguesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeaguesResolver, LeaguesService],
    }).compile();

    resolver = module.get<LeaguesResolver>(LeaguesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
