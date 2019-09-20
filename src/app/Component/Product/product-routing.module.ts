import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from "src/app/Component/Product/category/category.component";
import { DetailsComponent } from 'src/app/Component/Product/details/details.component';

const routesConfig: Routes = [
    { path: "", redirectTo: "danh-muc" },
    { path: "danh-muc", component: CategoryComponent },
    { path: "chi-tiet/:id", component: DetailsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routesConfig)],
    exports: [RouterModule]
})

export class ProductRoutingModule {}