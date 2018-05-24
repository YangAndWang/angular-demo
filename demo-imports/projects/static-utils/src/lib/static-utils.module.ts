import { NgModule } from '@angular/core';
import { StaticUtilsComponent } from './static-utils.component';
import { StaticUtilsService } from './static-utils.service';

@NgModule({
  imports: [
  ],
  declarations: [
    StaticUtilsComponent,
  ],
  exports: [
    StaticUtilsComponent,
  ],
  providers: [StaticUtilsService]
})
export class StaticUtilsModule { }
