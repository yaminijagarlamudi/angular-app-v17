import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';

export const routes: Routes = [{
    path:'',
    pathMatch:'full',
    loadComponent:()=>
    {
        return import('./home/home.component').then((m) =>HomeComponent);
    }               
    },
    {
        path:'todos',
        pathMatch:'full',
        loadComponent:()=>
        {
            return import('./todos/todos.component').then((m) =>TodosComponent);
        }
    }
];
