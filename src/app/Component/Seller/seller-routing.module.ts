import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';import { SellerPageComponent } from 'src/app/Component/Seller/seller-page/seller-page.component';
import { AddPageComponent } from 'src/app/Component/Seller/add-page/add-page.component';
import { EditPageComponent } from 'src/app/Component/Seller/edit-page/edit-page.component';
import { AuthGuard } from 'src/app/Component/auth/auth.guard';

const routesConfig: Routes = [
    { path: "", component: SellerPageComponent, canActivate: [AuthGuard] },
    { path: "them", component: AddPageComponent, canActivate: [AuthGuard] },
    { path: "chinh-sua/:id", component: EditPageComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routesConfig)],
    exports: [RouterModule]
})

export class SellerRoutingModule {}