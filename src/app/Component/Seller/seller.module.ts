import { CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerPageComponent } from 'src/app/Component/Seller/seller-page/seller-page.component';
import { AddPageComponent } from 'src/app/Component/Seller/add-page/add-page.component';
import { EditPageComponent } from 'src/app/Component/Seller/edit-page/edit-page.component';
import { AuthGuard } from 'src/app/Component/auth/auth.guard';
import { SellerRoutingModule } from 'src/app/Component/Seller/seller-routing.module';

@NgModule({
  declarations: [
    SellerPageComponent,
    AddPageComponent,
    EditPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SellerRoutingModule
  ],
  providers: [AuthGuard],
})
export class SellerLazyModule {}
