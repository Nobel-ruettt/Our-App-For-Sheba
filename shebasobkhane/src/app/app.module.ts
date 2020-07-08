import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './examplecomponents/shared/navbar/navbar.component';
import { FooterComponent } from './examplecomponents/shared/footer/footer.component';

import { ComponentsModule } from './examplecomponents/components/components.module';
import { ExamplesModule } from './examplecomponents/examples/examples.module';
import { HomePageComponent } from './Home-Page/Home-Page.component';


@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      FooterComponent,
      HomePageComponent
   ],
   imports: [
      BrowserModule,
      NgbModule,
      FormsModule,
      RouterModule,
      ComponentsModule,
      ExamplesModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
