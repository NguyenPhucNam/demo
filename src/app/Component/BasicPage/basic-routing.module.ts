import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from 'src/app/Component/BasicPage/about/about.component';
import { ContactComponent } from 'src/app/Component/BasicPage/contact/contact.component';
import { ErrorComponent } from 'src/app/Component/BasicPage/error/error.component';

const routesConfig: Routes = [
    { path: "gioi-thieu", component: AboutComponent },
    { path: "lien-he", component: ContactComponent },
    { path: "**", component: ErrorComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routesConfig)],
    exports: [RouterModule]
})

export class BasicRoutingModule {}