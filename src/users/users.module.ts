import { Module } from '@nestjs/common';
import { usersProvider } from 'src/users/user.provider';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    ...usersProvider,
    UsersService]
})
export class UsersModule {}
