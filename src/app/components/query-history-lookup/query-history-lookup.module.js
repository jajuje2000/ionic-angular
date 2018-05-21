"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var query_history_lookup_component_1 = require("./query-history-lookup.component");
var query_history_lookup_routing_module_1 = require("./query-history-lookup-routing.module");
var loading_spinner_module_1 = require("../../shared/loading-spinner/loading-spinner.module");
var kendo_angular_grid_1 = require("@progress/kendo-angular-grid");
var material_1 = require("@angular/material");
var kendo_angular_intl_1 = require("@progress/kendo-angular-intl");
var kendo_angular_dateinputs_1 = require("@progress/kendo-angular-dateinputs");
var QueryHistoryLookupModule = /** @class */ (function () {
    function QueryHistoryLookupModule() {
    }
    QueryHistoryLookupModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                query_history_lookup_routing_module_1.QueryHistoryLookupRoutingModule,
                kendo_angular_grid_1.GridModule,
                material_1.MatButtonModule,
                material_1.MatFormFieldModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatCardModule,
                material_1.MatSidenavModule,
                material_1.MatListModule,
                material_1.MatGridListModule,
                material_1.MatSelectModule,
                material_1.MatTooltipModule,
                material_1.MatDialogModule,
                //MatDialogRef,
                kendo_angular_intl_1.IntlModule,
                kendo_angular_dateinputs_1.DateInputsModule,
                loading_spinner_module_1.LoadingSpinnerModule
            ],
            entryComponents: [],
            declarations: [
                query_history_lookup_component_1.QueryHistoryLookupComponent //,
                //DialogOverviewExampleDialog
            ]
        })
    ], QueryHistoryLookupModule);
    return QueryHistoryLookupModule;
}());
exports.QueryHistoryLookupModule = QueryHistoryLookupModule;
//# sourceMappingURL=query-history-lookup.module.js.map