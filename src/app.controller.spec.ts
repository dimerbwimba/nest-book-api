import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './app.controller';
import { BooksService } from './app.service';

describe('AppController', () => {
  let booksController: BooksController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [BooksService],
    }).compile();

    booksController = app.get<BooksController>(BooksController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(booksController.getAllBooks()).toBe('Hello World!');
    });
  });
});
