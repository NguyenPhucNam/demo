import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { LoginComponent } from 'src/app/Component/Account/login/login.component';
import { SignupComponent } from 'src/app/Component/Account/signup/signup.component';
import { HosoComponent } from 'src/app/Component/Account/hoso/hoso.component';
import { AuthGuard } from 'src/app/Component/auth/auth.guard';
import { AccountRoutingModule } from 'src/app/Component/Account/account-routing.module';

@NgModule({
  declarations: [
    HosoComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    AccountRoutingModule
  ],
  providers: [AuthGuard]
})
export class AccountLazyModule {}
