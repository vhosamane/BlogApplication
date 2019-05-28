import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  public currentBlog;
  public myBlogId;

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

  public deleteThisBlog() {
    this._blog.deleteBlog(this.currentBlog.blogId).subscribe(
      data => {
        console.log(data);
        this._ts.success("thank you", "deleted", {
          timeOut: 1000
        });
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000);
      },
      error => {
        console.log("Error Occured");
        console.log(error.errorMessage);
      }
    ); 
  }
}
 