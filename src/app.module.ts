import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';

@Module({
  imports: [UserModule],
  controllers:[AppController],
  providers:[UserService]
})
export class AppModule {}
