import { Controller, Post } from '@nestjs/common';

@Controller('api/v1/players')
export class PlayersController {
  @Post()
  async CreateUpdatePlayer() {
    return JSON.stringify({
      name: 'John Doe',
    });
  }
}
