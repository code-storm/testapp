import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
    {
        component: AppComponent,
        path: 'home',
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);