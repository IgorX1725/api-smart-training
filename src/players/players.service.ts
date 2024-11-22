import { Injectable, Logger } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/createPlayer.dto';
import { Player } from './interfaces/player.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PlayersService {
  private players: Player[] = [];

  private readonly logger = new Logger(PlayersService.name);
  async createUpdatePlayer(createPlayerDto: CreatePlayerDto): Promise<void> {
    this.create(createPlayerDto);
  }

  private create(createPlayerDto: CreatePlayerDto): void {
    const { name, phoneNumber, email } = createPlayerDto;

    const player: Player = {
      _id: uuidv4(),
      name,
      phoneNumber,
      email,
      ranking: 'A',
      position: 1,
      playerImageUrl: 'fake-image-url',
    };

    this.logger.log(`CreatePlayerDto: ${JSON.stringify(createPlayerDto)}`);
    this.players.push(player);
  }
}
