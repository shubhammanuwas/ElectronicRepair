import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { OrdersComponent } from './component/orders/orders.component';
import { AdminComponent } from './component/admin/admin.component';
import { HeaderComponent } from './component/header/header.component';
import { ItemsComponent } from './component/items/items.component';
import { AddeditComponent } from './component/addedit/addedit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './shared/filter.pipe';
import { EditComponent } from './component/edit/edit.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    OrdersComponent,
    AdminComponent,
    HeaderComponent,
    ItemsComponent,
    AddeditComponent,
    FilterPipe,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
