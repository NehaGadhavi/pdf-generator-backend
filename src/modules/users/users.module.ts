import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { USers } from 'src/entity/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([USers])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
