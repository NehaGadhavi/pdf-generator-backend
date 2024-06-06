import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { USers } from 'src/entity/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(USers) private usersRepo: Repository<USers>,
      ) {}
    
      async getAllUsers() {
        return await this.usersRepo.find();
      }
}
