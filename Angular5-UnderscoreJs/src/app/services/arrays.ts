import { Injectable } from '@angular/core';
import { _ } from 'underscore';

@Injectable()
export class ArraysService {

  constructor() { }

  /**
   * Returns the first element of an array. Passing n will return the first n elements of the array.
   * @param array 
   * @param n 
   */
  public first<T>(array:Array<T>, n?: number): T | Array<T> {  
    if (null == n)
        return _.first(array);  
    return _.first(array, n);
  }

  /**
   * Returns everything but the last entry of the array. Especially useful on the arguments object. 
   * Pass n to exclude the last n elements from the result.
   * @param array 
   * @param n 
   */
  public initial<T>(array:Array<T>, n?: number): Array<T> {
    if (null == n)
        return _.initial(array);   
    return _.initial(array, n);
  }

  /**
   * Returns the last element of an array. 
   * Passing n will return the last n elements of the array.
   * @param array 
   * @param n 
   */
  public last<T>(array:Array<T>, n?: number): T | Array<T> {
    if (null == n)
        return _.last(array);
    return _.last(array, n);
  }

  /**
    Returns the rest of the elements in an array. 
    Pass an index to return the values of the array from that index onward.
   * @param array 
   * @param n 
   */
  public rest<T>(array:Array<T>, index?: number): Array<T> { 
    if (null == index)
        return _.rest(array);   
    return _.rest(array, index);
  }

  /**
   * Returns a copy of the array with all falsy values removed. 
   * In JavaScript, false, null, 0, "", undefined and NaN are all falsy.
   * @param array 
   */
  public compact<T>(array:Array<T>): Array<T> {
    return _.compact(array);
  }

  /**
   * Flattens a nested array (the nesting can be to any depth). 
   * If you pass shallow, the array will only be flattened a single level.
   * @param array 
   * @param shallow 
   */
  public flatten<T>(array:Array<T>, shallow?: boolean): Array<T> {
    if (shallow == null)
      return _.flatten(array);
    return _.flatten(array,true);
  }

  /**
   * Returns a copy of the array with all instances of the values removed.
   * @param array 
   * @param valuesToRemove 
   */
  public without<T>(array:Array<T>, ...valuesToRemove: Array<T>): Array<T> {
    return _.without(array, ...valuesToRemove);
  }

  /**
   * Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
   * @param arraysToMerge 
   */
  public union<T>(...arraysToMerge: Array<T>): Array<T> {
    return _.union(...arraysToMerge);
  }

  /**
   * Computes the list of values that are the intersection of all the arrays. Each value in the result is present in each of the arrays.
   * @param arraysToIntersect 
   */
  public intersection<T>(...arraysToIntersect: Array<T>): Array<T> {
    return _.intersection(...arraysToIntersect);
  }

  /**
   * Similar to without, but returns the values from array that are not present in the other array.
   * @param array 
   * @param others
   */
  public difference<T>(array:Array<T>, others: Array<T>): Array<T> {
    return _.difference(array, others);
  }

  /**
   * Produces a duplicate-free version of the array
   * Faster if array is already sorted
   * @param array 
   * @param alreadySorted
   */
  public uniq<T>(array:Array<T>, alreadySorted?: boolean): Array<T> {
    if (alreadySorted == null)
      return _.uniq(array);
    return _.uniq(array, alreadySorted);
  }

  /**
   * Merges together the values of each of the arrays with the values at the corresponding position. 
   * Useful when you have separate data sources that are coordinated through matching array indexes. 
   * Use with apply to pass in an array of arrays. 
   * If you're working with a matrix of nested arrays, this can be used to transpose the matrix.
   * @param arraysToZip 
   */
  public zip(...arraysToZip: Array<Array<any>>): Array<Array<any>> {
    return _.zip(...arraysToZip);
  }

  /**
   * The opposite of zip. Given an array of arrays, 
   * returns a series of new arrays, 
   * the first of which contains all of the first elements in the input arrays, 
   * the second of which contains all of the second elements, and so on.
   * @param arraysToZip 
   */
  public unzip(arraysToUnzip: Array<Array<any>>): Array<Array<any>> {
    return _.unzip(arraysToUnzip);
  }

  /**
   * Converts arrays into objects. 
   * Pass either a single list of [key, value] pairs, or a list of keys, and a list of values. 
   * If duplicate keys exist, the last value wins.
   * @param arrayOfKeys 
   * @param arrayOfValues 
   */
  public object<TKey,TValue>(arrayOfKeys: Array<TKey>, arrayOfValues: Array<TValue>): object {
    return _.object(arrayOfKeys, arrayOfValues);
  }

  /**
   * Converts arrays into objects. 
   * Pass either a single list of [key, value] pairs, or a list of keys, and a list of values. 
   * If duplicate keys exist, the last value wins.
   * @param arrays 
   */
  public objectFromArrays(arrays: Array<any>): object {
    return _.object(arrays);
  }

  /** 
   * Returns the index at which value can be found in the array, or -1 if value is not present in the array. 
   * If you're working with a large array, 
   * and you know that the array is already sorted, pass true for isSorted to use a faster binary search 
   * ... or, pass a number as the third argument in order to look for the first matching value in the array after the given index
  */
  public indexOf<T>(array: Array<T>, value: T, isSorted?: boolean): number {
    if (isSorted == null)
      return _.indexOf(array, value);
    return _.indexOf(array, value, isSorted);
  }

  /**
   * Returns the index of the last occurrence of value in the array, or -1 if value is not present. 
   * Pass fromIndex to start your search at a given index.
   * @param array 
   * @param value 
   * @param fromIndex 
   */
  public lastIndexOf<T>(array: Array<T>, value: T, fromIndex?: number): number {
    if (fromIndex == null)
      return _.lastIndexOf(array, value);
    return _.lastIndexOf(array, value, fromIndex);
  }

  /** 
   * Uses a binary search to determine the index at which the value should be inserted into the list in order to maintain the list's sorted order. 
   * If an iteratee function is provided, it will be used to compute the sort ranking of each value, including the value you pass. 
   * The iteratee may also be the string name of the property to sort by (eg. length).
  */
  public sortedIndex<T>(array: Array<T>, value: T, property?: string): number {
    if (property == null)
      return _.sortedIndex(array, value);
    return _.sortedIndex(array, value, property);
  }

  /**
   * Similar to _.indexOf, returns the first index where the predicate truth test passes; otherwise returns -1.
   */
  public findIndex<T>(array: Array<T>, predicate: Function | object): number {
    return _.findIndex(array, predicate);
  }

  /**
   * Like _.findIndex but iterates the array in reverse, returning the index closest to the end where the predicate truth test passes.
   */
  public findLastIndex<T>(array: Array<T>, predicate: Function | object): number {
    return _.findLastIndex(array, predicate);
  }

  /**
   * A function to create flexibly-numbered lists of integers, handy for each and map loops. 
   * start, if omitted, defaults to 0; step defaults to 1. 
   * Returns a list of integers from start (inclusive) to stop (exclusive), incremented (or decremented) by step, exclusive. 
   * Note that ranges that stop before they start are considered to be zero-length instead of negative — if you'd like a negative range, use a negative step.
   * @param stop 
   * @param start 
   * @param step 
   */
  public range(stop: number, start?: number, step?: number): Array<number> {
    start = null == start ? 0 : start;
    step = null == step ? 0 : step;
    return _.range(start, stop, step);
  }
}