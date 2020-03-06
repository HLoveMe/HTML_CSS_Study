
#es6 新增
* Symbol
    
    ```
    是第7个基础（表示独一无二）
   	null,underfined,number,boolean,string,object,Symbol
	```
* 创建(不能直接通过new来创建）
	
	```
	let sy1 = Symbol()  会返回不同对象
	let sy2 = Symbol("desction")   会返回不同对象 仅仅作为标识 用作标记调试
	let sy3 = Symbol.for("key") 会返回同一对象

	对象有点类似string 可以作为属性key
	
	let target = {}
	let sy1 = Symbol("one property")
	target[sy1] = "NNNN"
	console.log(target[sy1])
	
	> 不能使用.语法得到Symbol键的值
	> 会被forin Object.keys Object.getOwnPropertyNames 忽略
	> Object.getOwnPropertySymbols(xx) 得到 忽略系统内置Symbol
	```
* 系统默认Symbol [参考](https://blog.csdn.net/ixygj197875/article/details/79165218)

	```
	系统Symbol 如果对象包含该Symbol属性  会在执行时调用【见底 替换】 

    Symbol.hasInstance   instanceof 时候调用
    Symbol.isConcatSpreadable  boolean  Array.prototype.concat()时，是否可以展开
    Symbol.iterator  便利 for of 行为
    Symbol.match
    Symbol.prototype
    Symbol.replace 替换行为
    Symbol.search  
    Symbol.species
    Symbol.split 调用split时候调用
    Symbol.toPrimitive  类型转换时调用 a= { [Symbol.toPrimitive](){return 1}} ;a==1
    Symbol.toStringTag
    Symbol.unscopables
	```
* 应用

	 * 枚举
			
			const MessageType = {
				TextMessage:"TextMessage"
				TextMessage:TextMessage:Symbol()
			}

	* 私有变量
		
		```
		var o = {
        val: 10,
        [ Symbol("random") ]: "I'm a symbol",
	    };
	
	    class Person{
	        let _pri = Symbol()
	        constructor(){
	            this[Symbol.for("private")] = "AA"
	            this[this._pri] = ""
	        }
	        AA(){
	            return this[Symbol.for("private")]
	            return this[this._pri]
	        }
	    }
		```
	* 修改系统默认方法

		* Symbol.replace
			
			```
			[String] replace(searchValue: { [Symbol.replace](string: string, replaceValue: string): string; }, replaceValue: string): string;
			Dome : "ABCD".replace(source,"00")
			 解释 :  会调用source的[Symbol.replace] 接受 "ABCD" 和 "00" 返回结果  并作为最终结果
			 
			 "A_B_C".replace("_","=") =>A=B=C
			 "A_B_C".replace({
			 	[Symbol.replace]:(source="A_B_C",target="=")=>{
			 		return source+target
			 	}
			 },"=") => A_B_C=
			 
			```
		
		* Symbol.iterator
			
			```
			返回一个对象 该对象实现iterator接口
			interface Iterator<T, TReturn = any, TNext = undefined> {
			    next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
			    return?(value?: TReturn): IteratorResult<T, TReturn>;
			    throw?(e?: any): IteratorResult<T, TReturn>;
			}
			用到该接口的地方
				1:对对象进行结构赋值 对数组和 Set 结构进行解构赋值时  [...some] 
				2:扩展运算符
				3:yield* 
			```
			```
			class Student{
				constructor() {
					this.grades = [];
				}
				[Symbol.iterator]() {return this}
				next() {
					return {//进行中
						done: false,
						value: value
					}
					return {//结束
						done: true,
						value: undefined
					}
				}
				[Symbol.iterator](){
					var index = -1;				
					return {
						next(){
							++index;
							return {
								done:index<this.grades.length,
								value:this.grades[index]
							}
						}
						
					}
				}
			}
			for(let key of me){}
			==>
			const inter = me[Symbol.iterator]()
			inter.next()
			inter.next()
			inter.next() 直到 {done: true,value: undefined}
			```
			```
			var some = {}
			some[Symbol.iterator]=func *(){
				yield 1;
				yield 3;
				yield 3;
			}
			for(let key of some){}
			const ss = [...some]
			```
		* Symbol.hasInstance ==> instanceof
		
			```
			class AAA{
				static [Symbol.hasInstance](x){
					return typeof x == 'number'
				}
				[Symbol.hasInstance](x){
					return typeof x == 'number'
				}
			}
			console.log(111 instanceof AAA)
			console.log(111 instanceof new AAA())
			```
		* Symbol.toPrimitive ==> "=="
    
			```
			class ABCD {
			  [Symbol.toPrimitive]() { 
			    console.log("toPrimitive===1")
			    return 1
			    return 2
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
			
			(tar==1 && tar ==2)也可以同时成立 
		
			```
