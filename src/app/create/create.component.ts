import { Component, OnInit } from '@angular/core';
import {Ibook} from '../ibook';
import {Router} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  books: Ibook = {
    id: 0,
    name: '',
    author: '',
    description: '',
  };
  constructor(private router: Router,
              private bookService: BookService) { }
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  create(){
    this.bookService.createBook(this.books).subscribe( b => {
      this.books = b;
    });
    this.router.navigate(['/']);
  }

}
