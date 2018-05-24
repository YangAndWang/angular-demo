import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponentComponent } from './components/demo-component/demo-component.component';
import { DemoPipePipe } from './pipes/demo-pipe.pipe';
import { DemoDirectiveDirective } from './directives/demo-directive.directive';
import { StaticUtilsModule } from 'projects/static-utils/src/public_api';
import { RouteModule } from './route/route.module';
import { Login2Component } from './route/login2/login2.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponentComponent,
    DemoPipePipe,
    DemoDirectiveDirective
  ],
  imports: [
    BrowserModule,
    StaticUtilsModule,
    RouteModule
  ],
  entryComponents: [Login2Component],
  bootstrap: [AppComponent, Login2Component]
})
export class AppModule { }
