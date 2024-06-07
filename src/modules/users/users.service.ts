import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddUserDto, UpdateUserDto } from 'src/dtos/add-user.dto';
import { USers } from 'src/entity/users.entity';
import {
  DATABASE_ERROR_MSG,
  ERROR_MSG,
  ResponseMap,
  SUCCESS_MSG,
} from 'src/utils/constant';
import { GlobalResponseType } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(USers) private usersRepo: Repository<USers>) {}

  async getAllUsers(): GlobalResponseType {
    try {
      const users = await this.usersRepo.find();
      return ResponseMap({ users });
    } catch (error) {
      throw new HttpException(
        error,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getUserInformation(id: number): GlobalResponseType {
    try {
      const user = await this.usersRepo.findOne({ where: { id } });
      return ResponseMap({ user });
    } catch (error) {
      throw new HttpException(
        error,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async addUser(userInfo: AddUserDto): GlobalResponseType {
    try {
      const user = new USers();
      user.name = userInfo.name;
      user.email = userInfo.email;
      user.phone = userInfo.phone;
      user.address = userInfo.address;

      const savedUser = await this.usersRepo.save(user);

      if (!savedUser) {
        throw new BadRequestException(DATABASE_ERROR_MSG.user_save);
      }

      return ResponseMap(
        {
          success: true,
        },
        SUCCESS_MSG.user_add_success,
      );
    } catch (error) {
      throw new HttpException(
        error,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async updateUser(id: number, userInfo: UpdateUserDto): GlobalResponseType {
    try {
      const user = await this.usersRepo.findOne({ where: { id } });

      if (!user) {
        throw new NotFoundException(ERROR_MSG.user_not_found);
      }

      user.id = id;
      user.name = userInfo.name;
      user.email = userInfo.email;
      user.phone = userInfo.phone;
      user.address = userInfo.address;

      const isUpdated = await this.usersRepo.update(id, user);

      if (!isUpdated) {
        throw new BadRequestException(DATABASE_ERROR_MSG.user_update);
      }

      return ResponseMap(
        {
          success: true,
        },
        SUCCESS_MSG.user_update_success,
      );
    } catch (error) {
      throw new HttpException(
        error,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async removeUser(id: number) {
    try {
      const user = await this.usersRepo.findOne({ where: { id } });

      if (!user) {
        throw new NotFoundException(ERROR_MSG.user_not_found);
      }

      const result = await this.usersRepo.delete({ id });

      if (result.affected === 0) {
        throw new BadRequestException(DATABASE_ERROR_MSG.user_delete);
      }

      return ResponseMap(
        {
          success: true,
        },
        SUCCESS_MSG.user_delete_success,
      );
    } catch (error) {
      throw new HttpException(
        error,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
