import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ibook} from './ibook';
import {environment} from '../environments/environment';

const URL = `${environment.url}`;

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private httpClient: HttpClient) {
  }

  public getAllBook(): Observable<Ibook[]> {
    return this.httpClient.get<Ibook[]>(URL);
  }

  public createBook(book: Ibook): Observable<Ibook> {
    return this.httpClient.post<Ibook>(URL + '/create', book);
  }

  public editBook(id: number, book: Ibook): Observable<Ibook> {
    return this.httpClient.put<Ibook>(URL + '/edit/' + `${id}`, book);
  }

  public getBookById(id: number): Observable<Ibook> {
    return this.httpClient.get<Ibook>(URL + `${id}`);
  }

  public deleteBook(id: number): Observable<Ibook> {
    return this.httpClient.delete<Ibook>(URL + '/delete/' + `${id}`);
  }
}

