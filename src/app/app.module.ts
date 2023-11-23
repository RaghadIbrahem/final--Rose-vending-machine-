import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RosesComponent } from './roses/roses.component';
import { GiftAccessoriesComponent } from './gift-accessories/gift-accessories.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { RoseDetailsComponent } from './rose-details/rose-details.component';
import { GiftAccessoryDetailsComponent } from './gift-accessory-details/gift-accessory-details.component';
import { RoseDeleteComponent } from './rose-delete/rose-delete.component';
import { RoseEditComponent } from './rose-edit/rose-edit.component';
import { RoseCreateComponent } from './rose-create/rose-create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RosesComponent,
    GiftAccessoriesComponent,
    HomeComponent,
    ContactComponent,
    CartComponent,
    LoginComponent,
    NavbarComponent,
    RoseDetailsComponent,
    GiftAccessoryDetailsComponent,
    RoseDeleteComponent,
    RoseEditComponent,
    RoseCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
