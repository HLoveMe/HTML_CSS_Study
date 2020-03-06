namespace YoLink {
  class Node<T> {
    value: T;
    index: number;
    cursor: number;
    constructor(index: number, cursor: number, value: T) {
      this.value = value;
      this.index = index;
      this.cursor = cursor;
    }
  }
  export class StaticLink<T> {
    container: Node<T>[];
    eleCount: number = 0;
    constructor(size: number = 100) {
      this.container = new Array(size)
        .fill(0)
        .map((_, index) => new Node(index, index + 1, null));
      this.container[size - 1].cursor = 0;
    }
    _getLastDateNode(): Node<T> {
      const dataHeader = this.container[1];
      var node = dataHeader;
      while (node.cursor != 0) {
        node = this.container[node.cursor];
      }
      return node;
    }
    get isFill() {
      return this.container[0].cursor == 0;
    }
    append(value: T) {
      if (value == null || this.isFill) return;
      const header = this.container[0];
      const cursor = header.cursor;
      const target = this.container[cursor];
      target.value = value;
      header.cursor = target.cursor;
      this.eleCount += 1;
    }
    remove(index: number) {
      const node = this.container[index];
      if (node == null || node.value == null) return;
      node.value = null;
      const header = this.container[0];
      node.cursor = header.cursor;
      header.cursor = index;
      return;
    }
    inset(index: number, value: T) {
      if (index > this.container.length) return;
    }
  }
}
const staticL = new YoLink.StaticLink();
staticL.append("AAA");
staticL.append("BBB");
staticL.append("CCC");
staticL.append("DDD");
console.log(staticL);
