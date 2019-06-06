import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OtherModule } from './other/other.module';
import { RedisModule } from 'nestjs-redis';

@Module({
  imports: [RedisModule.register({ host: 'localhost' }), OtherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
