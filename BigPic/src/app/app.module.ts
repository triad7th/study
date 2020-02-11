import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProductModule } from './products/product.module';


@NgModule({
    declarations: [
        AppComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
            { path: 'welcome', component: AboutComponent },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
        ]),
        ProductModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
