import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomepageComponent } from 'src/app/Component/homepage/homepage.component';

const routesConfig: Routes = [
    { path: "", component: HomepageComponent },
    { path: "san-pham", loadChildren: 'src/app/Component/Product/product.module#ProductLazyModule' },
    { path: "kenh-nguoi-ban", loadChildren: 'src/app/Component/Seller/seller.module#SellerLazyModule' },  
    { path: "us", loadChildren: 'src/app/Component/BasicPage/basic.module#BasicLazyModule' },  
    { path: "tai-khoan", loadChildren: 'src/app/Component/Account/account.module#AccountLazyModule' },  
    { path: "**", loadChildren: 'src/app/Component/BasicPage/basic.module#BasicLazyModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routesConfig, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}
