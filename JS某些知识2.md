* instanceof 判断左边的原型是否存在于右边的原型链中
	* 原理
		
		```
		function instanceof_(left, right){
		  left = left.__proto__
		  while(left !== right.prototype){
		    left = left.__proto__ // 查找原型，再次while判断
		    if(left === null){
		      return false
		    }
		  }
		  return true
		}
		```
	* 重写命令
		
		```
		 class AAA{
	            static [Symbol.hasInstance](x){
	                return typeof x == 'number'
	      	      }
	        }
	        1 instanceof  AAA //true
		```
	
*  == 行为 判断值是否相等
	
	* 0==-0 //true
	* NaN==NaN //false
	* null == undefined //true
	* 对象之间的对比 只要不是同一对象都是false
		
		```
		var a = {};
		var b={};
		a==b //fasle
		```
	* 基本数据和对象比较 

		```
		会对对象进行"解包"
		```
		* 1=="1"//true
		* 0==new Number(0) //true

		```
		class ABCD {
		  [Symbol.toPrimitive]() { 
		    console.log("toPrimitive===1")
		    return 1 
		  }
		  valueOf(){
		    console.log("valueOf====2")
		    return 1
		  }
		  toString() {
		    console.log("toString===3")
		    return 1
		  }
		}
		const tar =new ABCD();
		//会调用 其中一个 (如果存在)
		//顺序为 Symbol.toPrimitive valueOf  toString
		1==tar //true
		
		```
		
* 作用域

	```
	变量访问规则
	
	用来描述变量 函数  是如何被存储 如何被访问的规则
	
	Global >Closure> Local<Block 向上继承
	
	Closure 上一级函数做用户
	Local 当前函数作用域
	Block 块级作用于  for(){}
	```
	```
	let so =1
	func A(){
		let a =so;//2
		func B(){
			return a; //3
		}
	}
	A();//1
	1:执行到1  为Local_A作用域 并且存在A函数
	2:执行到2 为Local_B 上一级为Closure(之前的Local_A)作用域
	3:执行到3 为Local_C  Local_C> Closure(Local_B)> Closure(Local_A)>Global
	```
* 闭包

	```
	闭包就是当一个函数即使是在它的词法作用域之外被调用时，也可以记住并访问它的词法作用域。
	```
	```
	func A(){
		const c =11;
		return ()=>c
	}
	
	const foo = A()
	foo()==>c
	//foo 可以范围A函数下的作用域
	```
	
* let var const 

	* var定义的变量，没有块的概念，可以跨块访问, 不能跨函数访问。
	* let定义的变量，只能在块作用域里访问，不能跨块访问，也不能跨函数访问。
	* const用来定义常量，使用时必须初始化(即必须赋值)，只能在块作用域里访问，而且不能修改。

	```
		func A(){
			for(){
				var name = 11;
				 //name 其实是声明在 Closure_A函数作用域上的
				let c =1;
			}
			func B(){
				let cc=1;
				var age=12
				const bb =1
			}
			B()
			name //11 var 可以跳出块级作用域
			c // Error let 仅仅属于声明作用域
			cc//Error 不能跳出函数作用域
			age// var 不能跳出函数作用域
			bb//Error
		}
	
	```
	
* 运算符  逻辑位运算符[链接](http://c.biancheng.net/view/5469.html)

	* 运算符 || ， &&
	* 逻辑位运算符 | ,^, & ,二进制运算
	* 移位运算 >> << 二进制运算

	```
	|| == 或者
	const result == a || {}; 
	==
	var result;
	if(a != null)result=a
	else result={}
	
	&& == 并且
	const result = (a==1 && b==2)
	```
	
	```
	& 与 运算
	1 0 1 0 1 0 1
	0 0 0 1 1 0 1 
	=
	0 0 0 0 1 0 1
	
	| 位或 运算
	1 0 1 0 1 0 1 
	0 0 0 1 1 0 1 
	=
	1 0 1 1 1 0 1  
	
	^ 位异或	（不同为1，相同为0）
	1 0 1 0 1 0 1
	0 0 0 1 1 0 1 
	=
	1 0 1 1 0 0 0
	
	```
	
	```
	js 32为系统
	最多只能32位 进行移位
	0000 0000 0000 0000 0000 0000 0000 0000
	 
	<< 前移 超过32位  被丢弃
	>>  后移 超过0位 v被丢弃
	
	（5 << 2）
	0000 0000 0000 0000 0000 0000 0000 0101 | =5
	0000 0000 0000 0000 0000 0000 0001 0100 | << 2
											| = 20
	```
	