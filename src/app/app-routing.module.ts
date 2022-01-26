import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { PageNotFoundComponent } from "./components/shared/page-not-found/page-not-found.component";

const routes: Routes = [
    { path: '', redirectTo: '/shop', pathMatch: 'full'}, // pathMatch is really important (do more research)
    { path: 'login',  component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'shop', component: ShoppingCartComponent},
    // ** means match everything, the user will be headed to this path if they didn't provide the above paths
    { path: '**', component: PageNotFoundComponent}
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}