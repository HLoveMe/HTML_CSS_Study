import { Link } from "./Link";
namespace YoLink {
  class Node<T> {
    value: any;
    index: number;
    next: any;
    constructor(value: T | null, index: number, next: Node<T> | null) {
      this.value = value;
      this.index = index;
      this.next = next;
    }
  }
  export class SingLinkList<T> implements Link<T> {
    header: Node<T>;
    eleCount = 0;
    constructor() {
      this.header = new Node(null, 0, null);
    }
    static from<T>(values: T[] = []): SingLinkList<T> {
      const link = new SingLinkList<T>();
      values.forEach(link.append.bind(link));
      return link;
    }
    get length() {
      return this.eleCount;
    }
    set length(len: number) {
      if (len >= this.eleCount) return;
      else if (len < this.eleCount && len > 0) {
        var value: Node<T> = this.header;
        while (--len >= 0 && value != null) {
          value = value.next;
        }
        value.next = null;
        this.eleCount = len;
      } else {
        this.header.next = null;
        this.eleCount = 0;
      }
    }
    _getElement(index: number): Node<T> | null {
      var count = index + 1;
      var node: Node<T> = this.header;
      while (--count >= 0 && node != null) {
        node = node.next;
      }
      return node;
    }
    _resetIndex() {
      var count = this.eleCount;
      var node = this.header;
      var index = -1;
      while (count-- > 0) {
        node = node.next;
        node.index = ++index;
      }
    }
    append(ele: T): number {
      var node = this._getElement(this.eleCount - 1);
      const nextNode = new Node<T>(ele, this.eleCount, null);
      node.next = nextNode;
      this.eleCount += 1;
      return this.eleCount;
    }

    getElementByIndex(index: number): T {
      const node = this._getElement(index);
      return node ? node.value : null;
    }
    getIndexByElement(ele: T): number {
      var node = this.header;
      while (node != null) {
        if (node.value == ele) {
          return node.index;
        }
        node = node.next;
      }
      return -1;
    }
    removeElementByIndex(index: number): T | null {
      var node = this._getElement(index);
      if (node == null || node == this.header) {
        return null;
      } else {
        if (node.index == 0) {
          this.header.next == this._getElement(1);
        } else if (node.index == this.eleCount - 1) {
          this._getElement(index - 1).next = null;
        } else {
          this._getElement(index - 1).next = this._getElement(index + 1);
        }
        this.eleCount -= 1;
        this._resetIndex();
      }
    }
    removeElement(ele: T): number {
      if (ele == null) return -1;
      var node = this.header;
      while (node != null && node.next.value != ele) {
        node = node.next;
      }
      if (node == null) return -1;
      const index = node.next.index;
      var selectNode = node.next;
      if (index == 0) {
        this.header.next = selectNode;
      } else {
        node.next = selectNode.next;
      }
      this.eleCount -= 1;
      this._resetIndex();
      // this.deleteElementByIndex(index);
      return index;
    }
    setValue(index: number, value: T) {
      const node = this._getElement(index);
      if (node) {
        node.value = value;
      }
    }
    insert(index: number, value: T) {
      const node = this._getElement(index);
      if (node) {
        const next = node.next;
        const newNode = new Node(value, index, next);
        node.next = newNode;
      } else if (index == this.eleCount) {
        const newNode = new Node(value, index, null);
        const last = this._getElement(this.eleCount - 1);
        last.next = newNode;
      } else {
        return;
      }
      this.eleCount += 1;
      this._resetIndex();
    }
    get a(): number {
      return this.eleCount;
    }
    get values(): T[] {
      const values: T[] = [];
      var node = this.header.next;
      if (node == null) return values;
      do {
        values.push(node.value);
      } while ((node = node.next) != null);
      return values;
    }
  }
}

const singLink2: Link<number> = new YoLink.SingLinkList();
singLink2.append(1);
singLink2.append(2);
singLink2.append(3);
singLink2.append(4);
console.log(singLink2.values);
singLink2.removeElement(3);
console.log(singLink2.getElementByIndex(2));
singLink2.setValue(2, 100);
singLink2.insert(1, 66);
singLink2.insert(30, 99999);
console.log(singLink2.values);
singLink2.length = 2;
console.log(singLink2.values);

const singLink3 = YoLink.SingLinkList.from([1, 2, 4, 5, 6]);
console.log(singLink3.values);
