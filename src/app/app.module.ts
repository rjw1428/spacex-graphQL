import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchListComponent } from './launch-list/launch-list.component';
import { LaunchDetailsComponent } from './launch-details/launch-details.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImagePopupComponent } from './image-popup/image-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RelativeTimePipe } from './relative-time/relative-time.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LaunchListComponent,
    LaunchDetailsComponent,
    ImagePopupComponent,
    RelativeTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ImagePopupComponent]
})
export class AppModule { }
