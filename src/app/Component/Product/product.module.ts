import { CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from "src/app/Component/Product/category/category.component";
import { DetailsComponent } from 'src/app/Component/Product/details/details.component';
import { ProductRoutingModule } from 'src/app/Component/Product/product-routing.module';

@NgModule({
  declarations: [
    CategoryComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule
  ]
})
export class ProductLazyModule {}
