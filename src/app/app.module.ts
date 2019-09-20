import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from 'src/app/app.component';
import { BreadcrumbComponent } from 'src/app/Component/Layouts/breadcrumb/breadcrumb.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AuthGuard } from 'src/app/Component/auth/auth.guard';
import { HomepageComponent } from 'src/app/Component/homepage/homepage.component';
import { NavigationComponent } from 'src/app/Component/Layouts/navigation/navigation.component';
import { SliderComponent } from 'src/app/Component/Layouts/slider/slider.component';
import { FooterComponent } from 'src/app/Component/Layouts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BreadcrumbComponent,
    NavigationComponent,
    SliderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
