import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ContactComponent } from './contact/contact.component';
import { RosesComponent } from './roses/roses.component';
import { GiftAccessoriesComponent } from './gift-accessories/gift-accessories.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { RoseDetailsComponent } from './rose-details/rose-details.component';
import { GiftAccessoryDetailsComponent } from './gift-accessory-details/gift-accessory-details.component';
import { RoseDeleteComponent } from './rose-delete/rose-delete.component';
import { RoseEditComponent } from './rose-edit/rose-edit.component';
import { RoseCreateComponent } from './rose-create/rose-create.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'all-roses', component: RosesComponent },
  { path: 'create-rose', component: RoseCreateComponent },
  { path: 'By-Rose-ID/:id', component: RoseDetailsComponent },
  { path: 'AllGiftAccessories', component: GiftAccessoriesComponent },
  { path: 'GiftAccessoryById/:id', component: GiftAccessoryDetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'update-rose/:id', component: RoseEditComponent },
  { path: 'delete-rose/:id', component: RoseDeleteComponent },
];


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
