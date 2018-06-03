import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './/app-routing.module';
import { CoupanComponent } from './coupan/coupan.component';
import { HeaderComponent } from './menu/header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './menu/footer/footer.component';
import { ModalComponent } from './menu/modal/modal.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ListboxModule} from 'primeng/listbox';
import {FormsModule} from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {PickListModule} from 'primeng/picklist';
import {MatCardModule} from '@angular/material/card';
import { CheckoutComponent } from './checkout/checkout.component';
import {MenuService} from './menu/menu.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {Pipe, PipeTransform} from '@angular/core';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CoupanComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ModalComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, MatListModule,
    BrowserAnimationsModule, NoopAnimationsModule , ListboxModule , FormsModule , ScrollPanelModule, MatExpansionModule,
    MatFormFieldModule, MatInputModule, PickListModule , MatCardModule, HttpModule, HttpClientModule ,
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
