import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HomeRoutingModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule { }