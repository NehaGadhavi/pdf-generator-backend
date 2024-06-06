import { PartialType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { DtoErrorMessage } from 'src/utils/constant';

export class AddUserDto {
  @IsNotEmpty({ message: DtoErrorMessage.empty_name })
  @IsString()
  name: string;

  @IsNotEmpty({ message: DtoErrorMessage.empty_email })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: DtoErrorMessage.empty_phone })
  @MaxLength(10, { message: DtoErrorMessage.invalid_phone })
  @IsString()
  phone: string;

  @IsNotEmpty({ message: DtoErrorMessage.empty_address })
  @IsString()
  address: string;
}

export class UpdateUserDto extends PartialType(AddUserDto) {}
