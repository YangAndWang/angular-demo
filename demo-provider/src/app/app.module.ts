import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule,
  TypeProvider,
  ValueProvider,
  ClassProvider,
  ExistingProvider,
  FactoryProvider,
  Injectable
} from '@angular/core';

import { AppComponent } from './app.component';
import { SssService, TTypeService } from './sss.service';

// TypeProvider

const typeProvider: TypeProvider = TTypeService;

// ValueProvider

const valueProvider: ValueProvider = {
  provide: 'valueProvider',
  useValue: { value: 'valueProvider' }
};

// ClassProvider

const classProvider: ClassProvider = {
  provide: 'classProvider',
  useClass: class CClassProvider {
    value = 'classProvider';
  }
};

// ExistingProvider

const existingProvider: ExistingProvider = {
  provide: 'existingProvider',
  useExisting: 'classProvider'
};

// FactoryProvider

const factoryProvider: FactoryProvider = {
  provide: 'factoryProvider',
  useFactory: (opts: any) => {
    return Object.assign({ value: 'factoryProvider' }, opts);
  },
  deps: ['existingProvider']
};

// any[]

const anyProvider: any[] = [
 {
   provide: 'v',
   useValue: 'v'
 }
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    typeProvider,
    valueProvider,
    classProvider,
    existingProvider,
    factoryProvider,
    anyProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
