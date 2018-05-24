import { Component, Inject, TypeProvider, Provider } from '@angular/core';
import { TTypeService } from './sss.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  provider: string;
  constructor(
    private ttypeProvider: TTypeService,
    @Inject('valueProvider') private valueProvider,
    @Inject('classProvider') private classProvider,
    @Inject('existingProvider') private existingProvider,
    @Inject('factoryProvider') private factoryProvider,
    @Inject('v') private v,
  ) {
    this.provider =
      '' +
      ttypeProvider.value +
      ' ' +
      valueProvider.value +
      ' ' +
      classProvider.value +
      ' ' +
      existingProvider.value +
      ' ' +
      factoryProvider.value +
      ' ' +
      v + ' ';
  }
}
