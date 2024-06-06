import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { FormModule } from './modules/form/form.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeormConfig';

@Module({
  imports: [UsersModule, FormModule, TypeOrmModule.forRoot(typeormConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
