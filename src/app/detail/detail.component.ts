import { Component, OnInit } from '@angular/core';
import {Ibook} from '../ibook';
import {BookService} from '../book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id = 0;
  books: Ibook = {
    id: 0,
    name: '',
    author: '',
    description: '',
  };
  constructor(private bookService: BookService,
              private router: Router,
              private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRouter.paramMap.subscribe((p: ParamMap) => {
      // @ts-ignore
      this.id = +p.get('id');
    });
    this.getBookById(this.id);
  }
  // tslint:disable-next-line:typedef
  private getBookById(id: number) {
    this.bookService.getBookById(id).subscribe(p => {
      this.books = p;
    });
  }
}
