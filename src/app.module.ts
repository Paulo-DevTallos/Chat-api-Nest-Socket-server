import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AppGateway } from './app.gateway';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/crud-nest'),
    UsersModule,
  ],
  controllers: [],
  providers: [AppGateway],
})
export class AppModule {}
