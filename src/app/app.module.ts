import { DevExtremeModule } from 'devextreme-angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SheetComponent } from './sheet/sheet.component';
import { CreateSheetComponent } from './create-sheet/create-sheet.component';
import { AppRoutingModule } from './app.routing';


const appRoutes: Routes = [
    { path: 'sheet', component: SheetComponent },
    {
        path: 'landing',
        component: LandingComponent,
        data: { title: 'Landing Page' }
    },
    {
        path: '',
        redirectTo: '/landing',
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        SheetComponent,
        LandingComponent,
        CreateSheetComponent
    ],
    imports: [
        AppRoutingModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        ),
        BrowserModule,
        DevExtremeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
