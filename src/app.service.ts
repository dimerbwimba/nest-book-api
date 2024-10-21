import { Injectable } from '@nestjs/common';
import { Book, books } from './faker';

@Injectable()
export class BooksService {
  getAllBooks(): Book[] {
    return books;
  }
  findById(bookId: number): Book | undefined {
    return books.find((book) => book.id === bookId);
  }
  create(book: Partial<Book>): Book {
    const newId = books[books.length - 1].id + 1;
    const newBook: Book = {
      id: newId,
      author: book.author ?? '',
      publicationYear: book.publicationYear ?? 0,
      title: book.title ?? '',
    };
    books.push(newBook);
    return newBook;
  }
  update(bookId: number, updatedBookFields: Partial<Book>): Book | undefined {
    const currentBook = books.find((book) => book.id === bookId);
    const updatedBook = {
      id: bookId,
      title: updatedBookFields.title ?? currentBook.title,
      author: updatedBookFields.author ?? currentBook.author,
      publicationYear:
        updatedBookFields.publicationYear ?? currentBook.publicationYear,
    };
    books.map((book) => {
      if (book.id === bookId) {
        return updatedBook;
      } else {
        return book;
      }
    });
    return updatedBook;
  }
  delete(bookId: number): Book[] {
    books.splice(bookId - 1, 1);
    return books;
  }
}
