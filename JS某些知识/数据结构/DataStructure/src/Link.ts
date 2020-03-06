export declare interface Link<T> {
  length: number;
  values:T[];
  append(ele: T): number;
  setValue(index:number,value:T):void;
  insert(index:number,value:T):void;
  removeElementByIndex(index: number): T | null;
  removeElement(ele: T): number;
  getElementByIndex(index: number): T | null;
  getIndexByElement(ele:T):number;
}
