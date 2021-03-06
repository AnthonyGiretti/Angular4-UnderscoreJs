import { Injectable } from '@angular/core';
import { _ } from 'underscore';

@Injectable()
export class ObjectsService {

  constructor() { }

  /**
   * Retrieve all the names of the object's own enumerable properties.
   */
  public keys(object: Object): Array<String> {
    return _.keys(object);
  }

  /**
   * Retrieve all the names of object's own and inherited properties.
   */
  public allKeys(object: Object): Array<String> {
    return _.allKeys(object);
  }

  /**
   * Return all of the values of the object's own properties.
   * @param object 
   */
  public values(object: Object): Array<any> {
    return _.values(object);
  }

  /**
   * Like map, but for objects. Transform the value of each property in turn.
   * @param object 
   * @param delegate 
   */
  public mapObject(object: Object, delegate: Function): Object {
    return _.mapObject(object, delegate);
  }

  /**
   * Convert an object into a list of [key, value] pairs. 
   * The opposite of object.
   * @param object 
   */
  public pairs(object: Object): Array<Array<any>> {
    return _.pairs(object);
  }

  /**
   * Returns a copy of the object where the keys have become the values and the values the keys. 
   * For this to work, all of your object's values should be unique and string serializable.
   * @param object 
   */
  public invert(object: Object): Object {
    return _.invert(object);
  }

  /**
   * Creates a new object with the given prototype, optionally attaching props as own properties. 
   * Basically, Object.create, but without all of the property descriptor jazz.
   * @param prototype 
   * @param properties 
   */
  public create(prototype: any, properties: Object) {
    return _.create(prototype, properties);
  }

  /**
   * Returns a sorted list of the names of every method in an object — that is to say, the name of every function property of the object.
   * @param object 
   */
  public functions(object: Object): Array<String> {
    return _.functions(object);
  }

  /**
   * Similar to _.findIndex but for properties in objects. 
   * Returns the key where the predicate truth test passes or undefined. 
   * predicate is transformed through iteratee to facilitate shorthand syntaxes.
   * @param object 
   * @param delegate 
   */
  public findKey(object: Object, delegate: Function): String {
    return _.findKey(object, delegate);
  }

  /**
   * Shallowly copy all of the properties in the source objects over to the destination object, and return the destination object. 
   * Any nested objects or arrays will be copied by reference, not duplicated. 
   * It's in-order, so the last source will override properties of the same name in previous arguments.
   * @param destination 
   * @param sources 
   */
  public extend(destination: Object, ...sources: Array<Object>): Object {
    return _.extend(destination, ...sources);
  }

  /**
   * Like extend, but only copies own properties over to the destination object.
   * @param destination 
   * @param sources 
   */
  public extendOwn(destination: Object, ...sources: Array<Object>): Object {
    return _.extendOwn(destination, ...sources);
  }

  /**
   * Return a copy of the object, filtered to only have values for the whitelisted keys (or array of valid keys). 
   * Alternatively accepts a predicate indicating which keys to pick.
   * @param originalObject 
   * @param delegate 
   * @param keys 
   */
  public pick(originalObject: Object, delegate?: Function, ...keys: Array<String>): Object {
    if (delegate == null) {
      return _.pick(originalObject, ...keys);
    }
    else {
      return _.pick(originalObject, delegate);
    }
  }

  /**
   * Return a copy of the object, filtered to omit the blacklisted keys (or array of keys). 
   * Alternatively accepts a predicate indicating which keys to omit.
   */
  public omit(originalObject: Object, delegate?: Function, ...keys: Array<String>): Object {
    if (delegate == null) {
      return _.omit(originalObject, ...keys);
    }
    else {
      return _.omit(originalObject, delegate);
    }
  }

  /**
   * Returns object after filling in its undefined properties with the first value present in the following list of defaults objects.
   */
  public defaults(originalObject: Object, ...defaults: Array<Object>): Object {
    return _.defaults(originalObject, ...defaults);
  }

  /**
   * Create a shallow-copied clone of the provided plain object. 
   * Any nested objects or arrays will be copied by reference, not duplicated.
   * @param originalObject 
   */
  public clone(originalObject: Object): Object {
    return _.clone(originalObject);
  }

  /** 
   * Does the object contain the given key? Identical to object.hasOwnProperty(key), 
   * but uses a safe reference to the hasOwnProperty function, in case it's been overridden accidentally. 
   */
  public has(object: Object, key: String): Boolean {
    return _.has(object,key);
  }

  /**
   * Returns a function that will return the specified property of any passed-in object. 
   * path may be specified as a simple key, or as an array of object keys or array indexes, for deep property fetching.
   * @param keys 
   */
  public property(path: String | Array<String>): Function {
    return _.property(path);
  }

  /**
   * Inverse of _.property. 
   * Takes an object and returns a function which will return the value of a provided property.
   * @param object 
   */
  public propertyOf(object: Object): Function {
    return _.propertyOf(object);
  }

  /**
   * Returns a predicate function that will tell you if a passed in object contains all of the key/value properties present in attrs.
   * @param attributes 
   */
  public matcher(attributes: Object): Function {
    return _.matcher(attributes);
  }

  /**
   * Performs an optimized deep comparison between the two objects, to determine if they should be considered equal.
   * @param objectToCompare 
   * @param otherObjectToCompare 
   */
  public isEqual(objectToCompare: Object, otherObjectToCompare: Object): Boolean {
    return _.isEqual(objectToCompare, otherObjectToCompare);
  }

  /**
   * Tells you if the keys and values in properties are contained in object.
   * @param object 
   * @param attributes 
   */
  public isMatch(object: Object, attributes: Object): Boolean {
    return _.isMatch(object, attributes);
  }

  /**
   * Returns true if an enumerable object contains no values (no enumerable own-properties). 
   * For strings and array-like objects _.isEmpty checks if the length property is 0.
   * @param object 
   */
  public isEmpty<T>(object: T): Boolean {
    return _.isEmpty(object);
  }

  /**
   * Returns true if object is a DOM element.
   */
  public isElement(domElement: any): Boolean {
    return _.isElement(domElement);
  }

  /**
   * Returns true if object is an Array.
   * @param object 
   */
  public isArray(object: any): Boolean {
    return _.isArray(object);
  }

  /**
   * Returns true if value is an Object. 
   * Note that JavaScript arrays and functions are objects, while (normal) strings and numbers are not.
   * @param object 
   */
  public isObject(object: any): Boolean {
    return _.isObject(object);
  }

  /**
   * Returns true if object is an Arguments object.
   * @param object 
   */
  public isArguments(object: any): Boolean {
    return _.isArguments(object);
  }

  /**
   * Returns true if object is a Function.
   */
  public isFunction(object: any): Boolean {
    return _.isFunction(object);
  }

  /**
   * Returns true if object is a String.
   * @param object 
   */
  public isString(object: any): Boolean {
    return _.isString(object);
  }

  /**
   * Returns true if object is a Number (including NaN).
   * @param object 
   */
  public isNumber(object: any): Boolean {
    return _.isNumber(object);
  }

  /**
   * Returns true if object is a finite Number.
   * @param object 
   */
  public isFinite(object: any): Boolean {
    return _.isFinite(object);
  }

  /**
   * Returns true if object is either true or false.
   * @param object 
   */
  public isBoolean(object: any): Boolean {
    return _.isBoolean(object);
  }

  /**
   * Returns true if object is a Date.
   * @param object 
   */
  public isDate(object: any): Boolean {
    return _.isDate(object);
  }

  /**
   * Returns true if object is a RegExp.
   * @param object 
   */
  public isRegExp(object: any): Boolean {
    return _.isRegExp(object);
  }

  /**
   * Returns true if object inherits from an Error.
   * @param object 
   */
  public isError(object: any): Boolean {
    return _.isError(object);
  }

  /**
   * Returns true if object is a Symbol.
   * @param object 
   */
  public isSymbol(object: any): Boolean {
    return _.isSymbol(object);
  }

  /**
   * Returns true if object is a Map.
   * @param object 
   */
  public isMap(object: any): Boolean {
    return _.isMap(object);
  }

  /**
   * Returns true if object is a WeakMap.
   * @param object 
   */
  public isWeakMap(object: any): Boolean {
    return _.isWeakMap(object);
  }

  /**
   * Returns true if object is a Set.
   * @param object 
   */
  public isSet(object: any): Boolean {
    return _.isSet(object);
  }

  /**
   * Returns true if object is a WeakSet.
   * @param object 
   */
  public isWeakSet(object: any): Boolean {
    return _.isWeakSet(object);
  }

  /**
   * Returns true if object is NaN.
    Note: this is not the same as the native isNaN function, 
    which will also return true for many other not-number values, such as undefined.
   * @param object 
   */
  public isNan(object: any): Boolean {
    return _.isNan(object);
  }

  /**
   * Returns true if the value of object is null.
   * @param object 
   */
  public isNull(object: any): Boolean {
    return _.isNull(object);
  }

  /**
   * Returns true if value is undefined.
   */
  public isUndefined(object: any): Boolean {
    return _.isUndefined(object);
  }

}