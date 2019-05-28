import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private _blog: BlogService, private route: ActivatedRoute, private _route: Router, private _ts: ToastrService) { }

  public blogTitile: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleBlogCategory = ["Comedy", "Drama", "Action", "Technology"];

  ngOnInit() {
  }

  createBlog(Data: NgForm) {
    if(Data.valid) {
      console.log(Data);
      let blogData = {
        title: this.blogTitile,
        description: this.blogDescription,
        blogBody: this.blogBodyHtml,
        category: this.blogCategory
      };
     
      this._blog.createBlog(blogData).subscribe(
        (data: any) => {
          console.log("Blog created");
        
          this._ts.success("thank you", "Post added success", {
            timeOut: 1000
          });
          
          setTimeout(() => {
            this._route.navigate(['/blogView/', data.data.blogId])
          }, 2000);
          Data.resetForm();
        },
        error => {
          console.log("Error occured");
          console.log(error.errorMessage);
        }
      )
    } else {
      console.log("No data");
    }
  }

  clearValues() {
    this.clearBlogValues();
  }

  clearBlogValues() {
    this.blogTitile = '';
    this.blogBodyHtml = '';
    this.blogDescription = '';
    this.blogCategory = '';
  }
}
