import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteRoutingModule } from './route-routing.module';
import { Login2Component } from './login2/login2.component';

@NgModule({
  imports: [
    CommonModule,
    RouteRoutingModule
  ],
  declarations: [Login2Component],
  exports: [RouteRoutingModule, Login2Component]
})
export class RouteModule { }
