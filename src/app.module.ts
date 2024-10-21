import { Module } from '@nestjs/common';
import { BooksController } from './app.controller';
import { BooksService } from './app.service';

@Module({
  imports: [],
  controllers: [BooksController],
  providers: [BooksService],
})
export class AppModule {}
 