"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kendo_data_query_1 = require("@progress/kendo-data-query");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
//import { AuthService } from './auth.service';
/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());
exports.MyErrorStateMatcher = MyErrorStateMatcher;
var QueryHistoryLookupComponent = /** @class */ (function () {
    function QueryHistoryLookupComponent(dialog) {
        this.dialog = dialog;
        this.isLoading = false;
        this.searchClicked = false;
        this.showScroll = false;
        this.timeValue = new Date().toString();
        this.dialogWidth = '30%';
        this.aggregates = [{ field: 'UnitPrice', aggregate: 'sum' }];
        this.state = {
            skip: 0,
            take: 5
        };
        //openCitationDialog(): void {
        //    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        //        width: this.dialogWidth,
        //        data: {}
        //    });
        //    dialogRef.afterClosed().subscribe(result => {
        //        console.log('The dialog was closed');
        //    });
        //}
        this.citationNumberFormControl = new forms_1.FormControl('', [
            forms_1.Validators.required
        ]);
        this.sort = [{
                field: 'ProductName',
                dir: 'asc'
            }];
        this.products = this.data;
    }
    QueryHistoryLookupComponent.prototype.onResize = function (event) {
        var innerWidth = event.target.innerWidth;
        if (innerWidth <= 767) {
            this.dialogWidth = '90%';
        }
        else {
            this.dialogWidth = '30%';
        }
    };
    QueryHistoryLookupComponent.prototype.onWindowScroll = function (event) {
        var _this = this;
        if (this.showScroll === false) {
            this.showScroll = true;
            window.setTimeout(function () {
                _this.showScroll = false;
            }, 2000);
        }
    };
    QueryHistoryLookupComponent.prototype.scrollToTop = function () {
        window.scroll(0, 0);
    };
    QueryHistoryLookupComponent.prototype.searchCitation = function () {
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
        this.gridData = kendo_data_query_1.process(this.data, this.state);
        this.total = kendo_data_query_1.aggregateBy(this.data, this.aggregates);
        this.isLoading = false;
    };
    QueryHistoryLookupComponent.prototype.dataStateChange = function (state) {
        var _this = this;
        if (state && state.group) {
            state.group.map(function (group) { return group.aggregates = _this.aggregates; });
        }
        this.state = state;
        this.gridData = kendo_data_query_1.process(this.data, this.state);
        this.total = kendo_data_query_1.aggregateBy(this.data, this.aggregates);
    };
    QueryHistoryLookupComponent.prototype.sortChange = function (sort) {
        this.sort = sort;
        this.loadProducts();
    };
    QueryHistoryLookupComponent.prototype.loadProducts = function () {
        this.gridView = {
            data: kendo_data_query_1.orderBy(this.products, this.sort),
            total: this.products.length
        };
    };
    __decorate([
        core_1.HostListener('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], QueryHistoryLookupComponent.prototype, "onWindowScroll", null);
    QueryHistoryLookupComponent = __decorate([
        core_1.Component({
            templateUrl: './query-history-lookup.html',
            styleUrls: ['./query-history-lookup.css']
        }),
        __metadata("design:paramtypes", [material_1.MatDialog])
    ], QueryHistoryLookupComponent);
    return QueryHistoryLookupComponent;
}());
exports.QueryHistoryLookupComponent = QueryHistoryLookupComponent;
//@Component({
//    selector: './dialog-enforcement-lookup-citation-add',
//    templateUrl: './dialog-enforcement-lookup-citation-add.html',
//    styleUrls: ['./enforcement-lookup.css']
//})
//export class DialogOverviewExampleDialog {
//    constructor(
//        public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//        @Inject(MAT_DIALOG_DATA) public data: any) { }
//    closeDialog(): void {
//        this.dialogRef.close();
//    }
//}
//# sourceMappingURL=query-history-lookup.component.js.map