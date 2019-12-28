* IntersectionObserver

	```
	IntersectionObserver接口(从属于Intersection Observer API)
	为开发者提供了一种可以异步监听目标元素与其祖先或视窗(viewport)交叉状态的手段。
	祖先元素与视窗(viewport)被称为根(root)
	```
	
	* 监听元素和另一个元素的位置关系 [图片懒加载功能]

* globalThis  标准 直接拿到顶层对象

	* 浏览器里面，顶层对象是 window，但 Node 和 Web Worker 没有window。
	* 浏览器和 Web Worker 里面，self 也指向顶层对象，但是 Node 没有 self。
	* Node 里面，顶层对象是 global，但其他环境都不支持