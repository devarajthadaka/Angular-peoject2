import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { CitiesComponent } from './cities/cities.component';
import { CommentsComponent } from './comments/comments.component';
import { CountriesComponent } from './countries/countries.component';
import { HomeComponent }  from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { PostsComponent } from './posts/posts.component';
import { SectionComponent } from './section/section.component';
import { StatesComponent } from './states/states.component';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'section', component:SectionComponent},
  {path: 'posts', component:PostsComponent},
  {path: 'comments', component:CommentsComponent},
  {path: 'albums', component:AlbumsComponent},
  {path: 'photos', component:PhotosComponent},
  {path: 'todos', component:TodosComponent},
  {path: 'users', component:UsersComponent},
  {path: 'states', component:StatesComponent},
  {path: 'cities', component:CitiesComponent},
  {path: 'countries', component:CountriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
