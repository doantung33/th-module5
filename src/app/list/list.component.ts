import { Component, OnInit } from '@angular/core';
import {Ibook} from '../ibook';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  books: Ibook[] = [];
  constructor(private bookService: BookService,
              private router: Router){
    this.getAllBook();
  }
  // tslint:disable-next-line:typedef
  getAllBook(): Ibook[] {
    this.bookService.getAllBook().subscribe(books => {
      this.books = books;
    });
    return this.books;
  }
  ngOnInit(): void {
  }


  // tslint:disable-next-line:typedef
  public delete(id: number) {
    if (confirm('you want to delete?')){
      this.bookService.deleteBook(id).subscribe(() => {
        this.books = this.getAllBook();
      });
    }
  }

}
