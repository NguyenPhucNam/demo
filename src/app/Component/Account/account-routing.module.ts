import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/Component/Account/login/login.component';
import { SignupComponent } from 'src/app/Component/Account/signup/signup.component';
import { HosoComponent } from 'src/app/Component/Account/hoso/hoso.component';
import { AuthGuard } from 'src/app/Component/auth/auth.guard';

const routesConfig: Routes = [
    { path: "dang-nhap", component: LoginComponent },
    { path: "dang-ky", component: SignupComponent },
    { path: "ho-so/:id", component: HosoComponent, canActivate: [AuthGuard] },
    { path: "dang-xuat", redirectTo: "/", pathMatch: "full" },
];

@NgModule({
    imports: [RouterModule.forChild(routesConfig)],
    exports: [RouterModule]
})

export class AccountRoutingModule {}