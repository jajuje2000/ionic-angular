import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    QueryHistoryLookupComponent//,
    //DialogOverviewExampleDialog
} from './query-history-lookup.component';
import { QueryHistoryLookupRoutingModule } from './query-history-lookup-routing.module';
// import { LoadingSpinnerModule } from '../../shared/loading-spinner/loading-spinner.module';
import { GridModule } from '@progress/kendo-angular-grid';
import {
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule//,
    //MatDialogRef
} from '@angular/material';
import { IntlModule } from '@progress/kendo-angular-intl';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { process, GroupDescriptor, State, aggregateBy, SortDescriptor, orderBy } from '@progress/kendo-data-query';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        QueryHistoryLookupRoutingModule,
        GridModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatCardModule,
        MatSidenavModule,
        MatListModule,
        MatGridListModule,
        MatSelectModule,
        MatTooltipModule,
        MatDialogModule,
        //MatDialogRef,
        IntlModule,
        DateInputsModule//,
        // LoadingSpinnerModule
    ],
    entryComponents: [
        //DialogOverviewExampleDialog
    ],
    declarations: [
        QueryHistoryLookupComponent//,
        //DialogOverviewExampleDialog 
    ]
})
export class QueryHistoryLookupModule {
}