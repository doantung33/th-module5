import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Ibook} from '../ibook';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  sub: Subscription;
  id: any;
  book: Ibook = {
    id: 0,
    name: '',
    author: '',
    description: '',
  };
  constructor(private router: Router,
              private bookService: BookService,
              private activateRouter: ActivatedRoute) {
    this.sub = this.activateRouter.paramMap.subscribe((p: ParamMap) => {
      this.id = p.get('id');
      this.getBookById(this.id);
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  private getBookById(id: any) {
    this.bookService.getBookById(id).subscribe( b => {
      this.book = b;
    });
  }
  // tslint:disable-next-line:typedef
  edit(){
    this.bookService.editBook(this.id, this.book).subscribe( () =>{
      this.router.navigate(['/']);
    });
  }
}
