import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { DemoChildrenComponent } from './components/demo-parent/demo-children/demo-children.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private cfr: ComponentFactoryResolver) {}

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    console.log(this.cfr.resolveComponentFactory(DemoChildrenComponent));
  }
}
