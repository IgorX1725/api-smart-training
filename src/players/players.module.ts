import { Module } from '@nestjs/common';
import { PlayersController } from './players.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [PlayersController],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class PlayersModule {}
