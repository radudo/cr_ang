import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProvidersComponent } from './providers/providers.component';
import { ProviderComponent } from './providers/provider/provider.component';
import { ProviderListComponent } from './providers/provider-list/provider-list.component';
import { ProviderService } from './shared/provider.service';


@NgModule({
  declarations: [
    AppComponent,
    ProvidersComponent,
    ProviderComponent,
    ProviderListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
