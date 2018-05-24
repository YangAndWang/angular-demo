import { Injectable } from '@angular/core';
import { throws } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class StaticUtilsService {

  constructor() { }

  parseStringToInt(string: string): number {
    const parseInt = Number.parseInt(string);
    return parseInt;
  }
}
