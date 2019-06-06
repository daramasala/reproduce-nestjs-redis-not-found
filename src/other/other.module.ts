import { Module } from '@nestjs/common';
import { MyService } from './my/my.service';
import { RedisModule, RedisService } from 'nestjs-redis';

@Module({
  imports: [RedisModule],
  providers: [MyService, RedisService],
})
export class OtherModule {}
