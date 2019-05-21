import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  { path: "about", component: AboutUsComponent },
  { path: "create", component: BlogCreateComponent },
  { path: "blogEdit/:blogId", component: BlogEditComponent },
  { path: "blogView/:blogId", component: BlogViewComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
