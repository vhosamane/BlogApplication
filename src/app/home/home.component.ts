import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allBlogs;
  public isLogin: boolean = true;
  public isSignUp: boolean = false;

  constructor(private _blog: BlogService) { }
  
  ngOnInit() {
    this.getBlog();
  }

  public getBlog() {
    this._blog.getAllBlogs().subscribe(
      data => {
        console.log(data);
        this.allBlogs = data['data'];
      },
      error => {
        console.log("Error occured");
      }
    );
  }
  /*showLogin() {
    this.isLogin = true;
    this.isSignUp = false;
  }

  showSignUP() {
    this.isSignUp = true;
    this.isLogin = false;
  } */
}
