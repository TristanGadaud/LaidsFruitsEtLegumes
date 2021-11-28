import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from "./pages/landing/landing.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { SearchComponent } from "./pages/search/search.component";
import { ProfileComponent} from "./pages/profile/profile.component";
import { PhilosophieComponent } from "./pages/philosophie/philosophie.component";
import { NewComponent } from "./pages/new/new.component";
// import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'notre-philosophie', component: PhilosophieComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'search', component: SearchComponent },
  { path: 'new', component: NewComponent }
  // { path: 'product/:id', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
