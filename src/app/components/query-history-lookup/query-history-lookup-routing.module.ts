import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueryHistoryLookupComponent } from './query-history-lookup.component';

const queryHistoryLookupRoutes: Routes = [
    { path: 'query-history-lookup', component: QueryHistoryLookupComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(queryHistoryLookupRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class QueryHistoryLookupRoutingModule { }