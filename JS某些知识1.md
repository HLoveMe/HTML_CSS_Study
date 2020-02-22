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


* 修改bind函数

	```
	Function.prototype.bind = function (oThis) {
	  const aArgs = Array.prototype.slice.call(arguments, 1);
	  const fToBind = this;//你需要绑定的函数
	  function fNOP() { };
	  function fBound() {
	    return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)))
	  };
	  this.prototype.currentThis = oThis;
	  fNOP.prototype = this.prototype;
	  fBound.prototype = new fNOP();
	  return fBound;
	}
	// 得到 function ABCD(){}; ab = ABCD.bind(xx)  ab.prototype
	```
* instanceof typeof

	* typeof 判断基础类型
	*  instanceof 基于原型链判断

* 比较  == ===

	* === 类型 和 值 都需要相等
	* == 需要值得转换

		```
		两边的类型是否相同，相同的话就比较值的大小，例如1==2，返回false
		判断的是否是null和undefined，是的话就返回true
		判断的类型是否是String和Number，是的话，把String类型转换成Number，再进行比较
		判断其中一方是否是Boolean，是的话就把Boolean转换成Number，再进行比较
		如果其中一方为Object，且另一方为String、Number或者Symbol，会将Object转换成字符串，再进行比较
		```
	
* 对象 转 原始类型

	```
	如果Symbol.toPrimitive()方法，优先调用再返回
	调用valueOf()，如果转换为原始类型，则返回
	调用toString()，如果转换为原始类型，则返回
	
	let a = {
		valueOf() {
		    return 4;
		  },
		toString(){
			return "4"
		},
		[Symbol.toPrimitive]() {
		   return 6
		}
	}
	a +1 == 7
	```
	```
	a == 1 && a==2 如何为true
	
	let tt  = {
		value:1,
		valueOf(){
			return this.value ++
		}
	}
	
	```