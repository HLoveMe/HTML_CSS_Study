
Proxy 作为代理对象 拦截修改 对Source对象的操作

```
/*
* target 目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）
* handler 一个对象，其属性是操作对应的自定义代理函数
*/
let p = new Proxy(target, handler);
```
* Proxy可选操作

	* get set 对对象属性【读写】操作的拦截
		* 属性不可配置（configurable）且不可写（writable），则 Proxy 不能修改该属性
		
		```
		const p = {
			age:11
		}
		const handle= {
			get(target,pname){
				return target[pname]+"岁"
			}
		}
		const proxy = new Proxy(p,handle)
		
		p.age //11
		proxy.age//11岁
		```
	* has 拦截 in操作符  返回boolean
	
		```
		const p = {
			age:11
		}
		const handle= {
			has(tyarget,key){
				return key=="age"
			}
		}
		const proxy = new Proxy(p,handle)
		
		if("age" in proxy){}
		```
	* deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值。
	
	* ownKeys(target)：ownKeys方法用来拦截对象自身属性的读取操作，返回一个数组
	
		* Object.getOwnPropertyNames() //返回所有属性
		* Object.getOwnPropertySymbols()
		* Object.keys(proxy) //返回可枚举属性
		* for...in循环
	
	* getOwnPropertyDescriptor(target, propKey)
	
		* Object.getOwnPropertyDescriptor(proxy, propKey)，
	
	* defineProperty(target, propKey, propDesc)
	
		* Object.defineProperty(proxy, propKey, propDesc）
		* Object.defineProperties(proxy, propDescs)
	
	* apply(target, object, args) target为函数对象时 
	
		* proxy(...args)
		* proxy.call(object, ...args)
		* proxy.apply(...)
	
		```
			const proxy = new Proxy((a,b,c) => {
			  console.log(11111,a,b,c)
			}, {
			  apply(target, thisArg, params) {
			    return target.bind(thisArg)(...params)
			    //return target.apply(thisArg, argumentsList)
	
			  }
			})
			proxy(1, 2, 3)
		```
	* construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作 new
	
		```
		function add (a, b) {
		  return a + b
		}
		​
		let proxy = new Proxy(add, {
		  construct (target, argumentsList, newTarget) {
		    throw new Error(`Function ${target.name} cannot be invoked with 'new'`)
		  }
		})
		​
		proxy(1, 2)     // 3
		new proxy(1, 2)//Error
		```
* Reflect
	
	```
	修改某些Object方法的返回结果
	让Object操作都变成函数行为
	Reflect对象的方法与Proxy对象的方法一一对应
	```
	```
	const handle = {
		apply(target,thisArg,params){
			return target.apply(thisArg, params)
			return Reflect.apply(target,thisArg, params)
		}
	}
	
	const handle = {
		set(target,pname,value,receiver){
			target[name]=value;
			等于
			Reflect.set(target,name,value,receiver)
		}
	}
	```
	
	* Reflect.apply(target,thisArg,args)
	* Reflect.construct(target,args)
	* Reflect.get(target,name,receiver)
	* Reflect.set(target,name,value,receiver)
	* Reflect.defineProperty(target,name,desc)
	* Reflect.deleteProperty(target,name)
	* Reflect.has(target,name)
	* Reflect.ownKeys(target)
	* Reflect.isExtensible(target)
	* Reflect.preventExtensions(target)
	* Reflect.getOwnPropertyDescriptor(target, name)
	* Reflect.getPrototypeOf(target)
	* Reflect.setPrototypeOf(target, prototype)
* Dome

	*  console.assert 断言

		```
		const assert = new Proxy({},{
			set(target,pname,value){
				if(value==false){
					console.assert(true,pname)
				}
			}
		})
		assert["不能为空"] == name!=null
		```
		
	* 统计函数调用次数

		```
		const ValueF = ()=>{}
		const proxyFunction = new Proxy(ValueF,{
			apply(target,thisArg,params){
				target["count"]+=1
				return target.apply(thisArg,parms)
			}
		}}
		```