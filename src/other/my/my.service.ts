import { Injectable } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';

@Injectable()
export class MyService {
  constructor(redisService: RedisService) {}
}
