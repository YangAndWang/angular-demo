import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoParentComponent } from './components/demo-parent/demo-parent.component';
import { DemoChildrenComponent } from './components/demo-parent/demo-children/demo-children.component';

@NgModule({
  declarations: [AppComponent, DemoParentComponent, DemoChildrenComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [DemoChildrenComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
