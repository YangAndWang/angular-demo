import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  ViewContainerRef,
  ComponentFactoryResolver,
  ViewChildren,
  ViewChild
} from '@angular/core';
import { DemoChildrenComponent } from './demo-children/demo-children.component';

@Component({
  selector: 'app-demo-parent',
  templateUrl: './demo-parent.component.html',
  styleUrls: ['./demo-parent.component.css']
})
export class DemoParentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
