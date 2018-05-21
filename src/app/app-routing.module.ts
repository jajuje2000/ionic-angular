import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
    {
        path: 'home',
        loadChildren: 'src/app/components/home/home.module#HomeModule',
        canLoad: [AuthGuard]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: true//, // <-- debugging purposes only
                // preloadingStrategy: SelectivePreloadingStrategy

            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
        // SelectivePreloadingStrategy
    ]
})
export class AppRoutingModule { }