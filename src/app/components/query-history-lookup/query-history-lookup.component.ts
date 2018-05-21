import {
    Component,
    Inject,
    HostListener
} from '@angular/core';
import {
    Router,
    NavigationExtras
} from '@angular/router';
import {
    process,
    GroupDescriptor,
    State,
    aggregateBy,
    SortDescriptor,
    orderBy
} from '@progress/kendo-data-query';
import {
    GridDataResult,
    DataStateChangeEvent
} from '@progress/kendo-angular-grid';


import {
    FormControl,
    FormGroupDirective,
    NgForm,
    Validators
} from '@angular/forms';

import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogRef,
    ErrorStateMatcher
} from '@angular/material'


//import { AuthService } from './auth.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    templateUrl: './query-history-lookup.html'//,
    // styleUrls: ['./query-history-lookup.css']
})
export class QueryHistoryLookupComponent {
    constructor(public dialog: MatDialog) { }

    private isLoading = false;
    private searchClicked = false;
    private citationNumber: any;
    private showScroll = false;
    private timeValue: string = new Date().toString();
    private dialogWidth: string = '30%';
    private aggregates: any[] = [{ field: 'UnitPrice', aggregate: 'sum' }];
    private state: State = {
        skip: 0,
        take: 5
    };

    private data: any[];

    //openCitationDialog(): void {
    //    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    //        width: this.dialogWidth,
    //        data: {}
    //    });

    //    dialogRef.afterClosed().subscribe(result => {
    //        console.log('The dialog was closed');
    //    });
    //}

    citationNumberFormControl = new FormControl('', [
        Validators.required
    ]);

    onResize(event: any) {
        const innerWidth = event.target.innerWidth;

        if (innerWidth <= 767) {
            this.dialogWidth = '90%';
        }
        else {
            this.dialogWidth = '30%';
        }
    }

    @HostListener('touchmove', ['$event'])
    public onWindowScroll(event: Event): void {
        if (this.showScroll === false) {
            this.showScroll = true;
            window.setTimeout(() => {
                this.showScroll = false;
            }, 2000);
        }
    }

    scrollToTop() {
        this.scrollToTop();
    } 

    private searchCitation(): void {
        this.searchClicked = true;
        this.isLoading = true;
        if (this.citationNumber === "1") {
            this.data = [{
                'dateTime': '03/26/2018 13:59',
                'tagNumber': '104050921',
                'licenseNumber': 'UUU3456',
                'switch': 'SOV/Non-switchable',
                'laneMode': 'I-680 SB Tolling Default',
                'corridor': 'I-680 SB',
                'zone': 'Bollinger Canyon',
                'zoneId': 4100
            }, {
                'dateTime': '03/26/2018 12:59',
                'tagNumber': '104050921',
                'licenseNumber': 'UUU3456',
                'switch': 'SOV/Non-switchable',
                'laneMode': 'I-680 SB Tolling Default',
                'corridor': 'I-680 SB',
                'zone': 'Bollinger Canyon',
                'zoneId': 4101
            }, {
                'dateTime': '03/26/2018 11:59',
                'tagNumber': '104050921',
                'licenseNumber': 'UUU3456',
                'switch': 'SOV/Non-switchable',
                'laneMode': 'I-680 SB Tolling Default',
                'corridor': 'I-680 SB',
                'zone': 'Bollinger Canyon',
                'zoneId': 4102
            }, {
                'dateTime': '03/26/2018 10:59',
                'tagNumber': "104050921",
                'licenseNumber': 'UUU3456',
                'switch': 'SOV/Non-switchable',
                'laneMode': 'I-680 SB Tolling Default',
                'corridor': 'I-680 SB',
                'zone': 'Diablo',
                'zoneId': 4103
            }, {
                'dateTime': '03/26/2018 09:59',
                'tagNumber': "104050921",
                'licenseNumber': '0',
                'switch': 'SOV/Non-switchable',
                'laneMode': 'I-680 SB Tolling Default',
                'corridor': 'I-80 EB',
                'zone': 'Diablo',
                'zoneId': 4104
            }, {
                'dateTime': '03/26/2018 08:59',
                'tagNumber': "104050921",
                'licenseNumber': '0',
                'switch': 'SOV/Non-switchable',
                'laneMode': 'I-680 SB Tolling Default',
                'corridor': 'I-80 EB',
                'zone': 'Diablo',
                'zoneId': 4105
            }, {
                'dateTime': '03/26/2018 07:59',
                'tagNumber': "104050921",
                'licenseNumber': 'UUU3456',
                'switch': 'SOV/Non-switchable',
                'laneMode': 'I-680 SB Tolling Default',
                'corridor': 'I-680 SB',
                'zone': 'Suisun Valley',
                'zoneId': 4106
            }, {
                'dateTime': '03/26/2018 07:59',
                'tagNumber': "104050921",
                'licenseNumber': 'UUU3456',
                'switch': 'SOV/Non-switchable',
                'laneMode': 'I-680 SB Tolling Default',
                'corridor': 'I-680 SB',
                'zone': 'Suisun Valley',
                'zoneId': 4106
            }, {
                'dateTime': '03/26/2018 07:59',
                'tagNumber': "104050921",
                'licenseNumber': 'UUU3456',
                'switch': 'SOV/Non-switchable',
                'laneMode': 'I-680 SB Tolling Default',
                'corridor': 'I-680 SB',
                'zone': 'Suisun Valley',
                'zoneId': 4106
            }, {
                'dateTime': '03/26/2018 07:59',
                'tagNumber': "104050921",
                'licenseNumber': 'UUU3456',
                'switch': 'SOV/Non-switchable',
                'laneMode': 'I-680 SB Tolling Default',
                'corridor': 'I-680 SB',
                'zone': 'Suisun Valley',
                'zoneId': 4106
            }, {
                'dateTime': '03/26/2018 07:59',
                'tagNumber': "104050921",
                'licenseNumber': 'UUU3456',
                'switch': 'SOV/Non-switchable',
                'laneMode': 'I-680 SB Tolling Default',
                'corridor': 'I-680 SB',
                'zone': 'Suisun Valley',
                'zoneId': 4106
            }];
        }
        else if (this.citationNumber === "2") {
            this.data = [{
                'dateTime': '03/26/2018 13:59',
                'tagNumber': '105050433',
                'licenseNumber': 'EXU5557',
                'switch': 'SOV/Non-switchable',
                'laneMode': 'I-680 NB Tolling Default',
                'corridor': 'I-680 NB',
                'zone': 'Travis',
                'zoneId': 4100
            }, {
                'dateTime': '03/26/2018 12:59',
                'tagNumber': '105050433',
                'licenseNumber': '0',
                'switch': 'SOV/Non-switchable',
                'laneMode': 'I-680 NB Tolling Default',
                'corridor': 'I-680 NB',
                'zone': 'Travis',
                'zoneId': 4101
            }, {
                'dateTime': '03/26/2018 11:59',
                'tagNumber': '105050433',
                'licenseNumber': '0',
                'switch': 'SOV/Non-switchable',
                'laneMode': 'I-680 NB Tolling Default',
                'corridor': 'I-680 NB',
                'zone': 'Travis',
                'zoneId': 4102
            }, {
                'dateTime': '03/26/2018 10:59',
                'tagNumber': "105050433",
                'licenseNumber': 'EXU5557',
                'switch': 'SOV/Non-switchable',
                'laneMode': 'I-680 NB Tolling Default',
                'corridor': 'I-680 NB',
                'zone': 'Diablo',
                'zoneId': 4103
            }, {
                'dateTime': '03/26/2018 09:59',
                'tagNumber': "105050433",
                'licenseNumber': 'EXU5557',
                'switch': 'SOV/Non-switchable',
                'laneMode': 'I-680 NB Tolling Default',
                'corridor': 'I-80 WB',
                'zone': 'Bollinger Canyon',
                'zoneId': 4104
            }, {
                'dateTime': '03/26/2018 08:59',
                'tagNumber': "105050433",
                'licenseNumber': 'EXU5557',
                'switch': 'SOV/Non-switchable',
                'laneMode': 'I-680 NB Tolling Default',
                'corridor': 'I-80 WB',
                'zone': 'Bollinger Canyon',
                'zoneId': 4105
            }, {
                'dateTime': '03/26/2018 07:59',
                'tagNumber': "105050433",
                'licenseNumber': 'EXU5557',
                'switch': 'SOV/Non-switchable',
                'laneMode': 'I-680 NB Tolling Default',
                'corridor': 'I-680 NB',
                'zone': 'Suisun Valley',
                'zoneId': 4106
            }];
        }
        else {
            this.data = [];
        }


        this.gridData = process(this.data, this.state);
        this.total = aggregateBy(this.data, this.aggregates);
        this.isLoading = false;
    }

    public gridData: any;
    public total: any;
    public sort: SortDescriptor[] = [{
        field: 'ProductName',
        dir: 'asc'
    }];
    public gridView: GridDataResult;
    public products: any[] = this.data;

    public dataStateChange(state: DataStateChangeEvent): void {
        if (state && state.group) {
            state.group.map(group => group.aggregates = this.aggregates);
        }

        this.state = state;

        this.gridData = process(this.data, this.state);
        this.total = aggregateBy(this.data, this.aggregates);
    }

    public sortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
        this.loadProducts();
    }

    private loadProducts(): void {
        this.gridView = {
            data: orderBy(this.products, this.sort),
            total: this.products.length
        };
    }



}
