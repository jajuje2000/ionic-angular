import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LoginRoutingModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule
    ],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule { }