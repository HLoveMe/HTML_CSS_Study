var YoLink;
(function (YoLink) {
    class Node {
        constructor(value, index, next) {
            this.value = value;
            this.index = index;
            this.next = next;
        }
    }
    class SingLinkList {
        constructor() {
            this.eleCount = 0;
            this.header = new Node(null, 0, null);
        }
        static from(values = []) {
            const link = new SingLinkList();
            values.forEach(link.append.bind(link));
            return link;
        }
        get length() {
            return this.eleCount;
        }
        set length(len) {
            if (len >= this.eleCount)
                return;
            else if (len < this.eleCount && len > 0) {
                var value = this.header;
                while (--len >= 0 && value != null) {
                    value = value.next;
                }
                value.next = null;
                this.eleCount = len;
            }
            else {
                this.header.next = null;
                this.eleCount = 0;
            }
        }
        _getElement(index) {
            var count = index + 1;
            var node = this.header;
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
        append(ele) {
            var node = this._getElement(this.eleCount - 1);
            const nextNode = new Node(ele, this.eleCount, null);
            node.next = nextNode;
            this.eleCount += 1;
            return this.eleCount;
        }
        getElementByIndex(index) {
            const node = this._getElement(index);
            return node ? node.value : null;
        }
        getIndexByElement(ele) {
            var node = this.header;
            while (node != null) {
                if (node.value == ele) {
                    return node.index;
                }
                node = node.next;
            }
            return -1;
        }
        removeElementByIndex(index) {
            var node = this._getElement(index);
            if (node == null || node == this.header) {
                return null;
            }
            else {
                if (node.index == 0) {
                    this.header.next == this._getElement(1);
                }
                else if (node.index == this.eleCount - 1) {
                    this._getElement(index - 1).next = null;
                }
                else {
                    this._getElement(index - 1).next = this._getElement(index + 1);
                }
                this.eleCount -= 1;
                this._resetIndex();
            }
        }
        removeElement(ele) {
            if (ele == null)
                return -1;
            var node = this.header;
            while (node != null && node.next.value != ele) {
                node = node.next;
            }
            if (node == null)
                return -1;
            const index = node.next.index;
            var selectNode = node.next;
            if (index == 0) {
                this.header.next = selectNode;
            }
            else {
                node.next = selectNode.next;
            }
            this.eleCount -= 1;
            this._resetIndex();
            // this.deleteElementByIndex(index);
            return index;
        }
        setValue(index, value) {
            const node = this._getElement(index);
            if (node) {
                node.value = value;
            }
        }
        insert(index, value) {
            const node = this._getElement(index);
            if (node) {
                const next = node.next;
                const newNode = new Node(value, index, next);
                node.next = newNode;
            }
            else if (index == this.eleCount) {
                const newNode = new Node(value, index, null);
                const last = this._getElement(this.eleCount - 1);
                last.next = newNode;
            }
            else {
                return;
            }
            this.eleCount += 1;
            this._resetIndex();
        }
        get a() {
            return this.eleCount;
        }
        get values() {
            const values = [];
            var node = this.header.next;
            if (node == null)
                return values;
            do {
                values.push(node.value);
            } while ((node = node.next) != null);
            return values;
        }
    }
    YoLink.SingLinkList = SingLinkList;
})(YoLink || (YoLink = {}));
const singLink2 = new YoLink.SingLinkList();
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
//# sourceMappingURL=SingLinkList.js.map