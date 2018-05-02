import { Injectable } from '@angular/core';
import { _ } from 'underscore';

@Injectable()
export class FunctionsService {

  constructor() { }

  /**
   * Bind a function to an object, meaning that whenever the function is called, the value of this will be the object. 
   * Optionally, pass arguments to the function to pre-fill them, also known as partial application. 
   * For partial application without context binding, use partial.
   * @param delegate 
   * @param data 
   * @param parameters 
   */
  public bind<T>(delegate: Function, data: T, ...parameters: Array<any>): Function {
    return _.bind(delegate, data, ...parameters);
  }

}