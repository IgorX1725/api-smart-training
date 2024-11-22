import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/createPlayer.dto';

@Controller('api/v1/players')
export class PlayersController {
  @Post()
  async CreateUpdatePlayer(@Body() createPlayerDto: CreatePlayerDto) {
    const { email } = createPlayerDto;
    return JSON.stringify({
      name: email,
    });
  }
}
