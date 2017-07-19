import {PDPComponent} from './pdp.component';
import {HomePageComponent} from './homePage.component';
import {Routes} from '@angular/router';
export const appRoutes: Routes = <Routes>[
    {path: 'pdp', component: PDPComponent},
    {path: 'home', component: HomePageComponent}
];

