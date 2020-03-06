var YoLink;
(function (YoLink) {
    class Node {
        constructor(index, cursor, value) {
            this.value = value;
            this.index = index;
            this.cursor = cursor;
        }
    }
    class StaticLink {
        constructor(size = 100) {
            this.eleCount = 0;
            this.container = new Array(size)
                .fill(0)
                .map((_, index) => new Node(index, index + 1, null));
            this.container[size - 1].cursor = 0;
        }
        _getLastDateNode() {
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
        append(value) {
            if (value == null || this.isFill)
                return;
            const header = this.container[0];
            const cursor = header.cursor;
            const target = this.container[cursor];
            target.value = value;
            header.cursor = target.cursor;
            this.eleCount += 1;
        }
        remove(index) {
            const node = this.container[index];
            if (node == null || node.value == null)
                return;
            node.value = null;
            const header = this.container[0];
            node.cursor = header.cursor;
            header.cursor = index;
            return;
        }
        inset(index, value) {
            if (index > this.container.length)
                return;
        }
    }
    YoLink.StaticLink = StaticLink;
})(YoLink || (YoLink = {}));
const staticL = new YoLink.StaticLink();
staticL.append("AAA");
staticL.append("BBB");
staticL.append("CCC");
staticL.append("DDD");
console.log(staticL);
//# sourceMappingURL=StaticLink.js.map