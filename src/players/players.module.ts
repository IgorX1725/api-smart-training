import { Module } from '@nestjs/common';
import { PlayersController } from './players.controller';
import { ConfigModule } from '@nestjs/config';
import { PlayersService } from './players.service';

@Module({
  controllers: [PlayersController],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [PlayersService],
})
export class PlayersModule {}
