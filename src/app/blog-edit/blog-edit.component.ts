import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public myBlogId: any;
  public currentBlog: any;
  public possibleBlogCategory = ["Comedy", "Drama", "Action", "Technology"];

  constructor(private _router: ActivatedRoute, private router: Router, private _blog: BlogService, private _ts: ToastrService) {
    this.myBlogId = this._router.snapshot.paramMap.get('blogId');
  }

  ngOnInit() {
    this.getSingleBlog(this.myBlogId);
  }

  public getSingleBlog(blog) {
    this._blog.getSingleBlogInformation(blog).subscribe(
      data => {
        console.log(data);
        this.currentBlog = data['data'];
      },
      error => {
        console.log("Error Occured");
      }
    );
  }

  public saveEdited() {
    this._blog.updateBlogInformation(this.currentBlog.blogId, this.currentBlog).subscribe (
      data => {
        console.log(data);
        this._ts.success("thank you", "Edited Succesfully", {
          timeOut: 1000
        });
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000);
      },
      error => {
        console.log("Some Error Occured");
        console.log(error.errorMessage);
      }
    )
  }
}
