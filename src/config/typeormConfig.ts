import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.HOST,
  port: +process.env.PORT,
  username: 'root',
  password: '',
  database: 'nestjs',
  autoLoadEntities: true,
  synchronize: true,
};
