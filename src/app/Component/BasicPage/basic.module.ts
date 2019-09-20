import { CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutComponent } from 'src/app/Component/BasicPage/about/about.component';
import { ContactComponent } from 'src/app/Component/BasicPage/contact/contact.component';
import { ErrorComponent } from 'src/app/Component/BasicPage/error/error.component';
import { BasicRoutingModule } from 'src/app/Component/BasicPage/basic-routing.module';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    BasicRoutingModule
  ]
})
export class BasicLazyModule {}
