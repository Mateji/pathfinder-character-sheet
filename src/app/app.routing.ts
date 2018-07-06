import { CreateSheetComponent } from './create-sheet/create-sheet.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SheetComponent } from './sheet/sheet.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
    {
        path: 'sheet',
        component: SheetComponent,
        children: [
            {
                path: 'create',
                component: CreateSheetComponent
            }
        ]
    },
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

    // {
    //     path: '',
    //     component: DefaultLayoutComponent,
    //     data: {
    //         title: 'Home'
    //     },
    //     children: [
    //         {
    //             path: 'base',
    //             loadChildren: './views/base/base.module#BaseModule'
    //         },
    //         {
    //             path: 'buttons',
    //             loadChildren: './views/buttons/buttons.module#ButtonsModule'
    //         },
    //         {
    //             path: 'charts',
    //             loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
    //         },
    //         {
    //             path: 'dashboard',
    //             loadChildren: './views/dashboard/dashboard.module#DashboardModule'
    //         },
    //         {
    //             path: 'icons',
    //             loadChildren: './views/icons/icons.module#IconsModule'
    //         },
    //         {
    //             path: 'notifications',
    //             loadChildren: './views/notifications/notifications.module#NotificationsModule'
    //         },
    //         {
    //             path: 'theme',
    //             loadChildren: './views/theme/theme.module#ThemeModule'
    //         },
    //         {
    //             path: 'widgets',
    //             loadChildren: './views/widgets/widgets.module#WidgetsModule'
    //         }
    //     ]
    // }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
