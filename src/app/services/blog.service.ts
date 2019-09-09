import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public baseUrl: string = '';
  public authToken: string = '';

  constructor(private _http: HttpClient) { }

  public getAllBlogs() {
    let allBlogs = this._http.get(this.baseUrl+'/all'+'?authToken='+ this.authToken);
    console.log(allBlogs);
    return allBlogs;
  }

  public createBlog(blogData) {
    let myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken, blogData);
    return myResponse;
  }

  public getSingleBlogInformation(currentBlogId) {
   let currentBlog = this._http.get(this.baseUrl + '/view/' + currentBlogId + '?authToken=' + this.authToken);
   return currentBlog;
  }

  public updateBlogInformation(blogId, data) {
    let myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authToken, data);
    return myResponse;
  }

  public deleteBlog(blogId) {
    let data = {};
    let myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken, data);
    return myResponse;
  }
}
