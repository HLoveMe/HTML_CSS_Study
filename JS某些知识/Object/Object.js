import { any } from 'prelude-ls'

Object
    prototype
        constructor  指向函数本身
        __proto__    指向 构造该对象的构造函数的原型
        hasOwnProperty 判读是自己的属性还是继承的属性
        isPrototypeOf   O.isPrototypeOf(X)  O是否在X的原型链上
        propertyIsEnumerable  判断其中有哪些可枚举的属性
        toString

        for / in 语句块   可枚举的（自身和继承）的属性列表
        Object.keys(obj) 返回可枚举属性列表
        Object.getOwnPropertyNames(obj)  得到自身属性列表（可枚举 和 不可枚举）
        ....

    属性声明（属性描述符）
        let person = new Person()
        person.name = "ZZH"
            {
                configurable:true,
                enumerable:true,
                writable:true,
                value:"ZZH"
            }
        Object.defineProperty(person,"name",{
            configurable, // 设置为通过delete 不能删除
                如果为false 不能对enumerable | writable再次配置
                如果为true  可再次定义enumerable | writable
            enumerable,  // 设置为通过for - in 循环不能返回该属性
            writable, // 设置为不能修改属性值
            value:"AA" //包含这个属性的数据值，能写入，能读取
                get:function
                set:function
            //当使用了getter或setter方法，不允许使用writable和value这两个属性
        } || {
            configurable:false,
            enumerable:false,
            writable:false,
            value:undefined
        })

        get | set
            1：属性配置中设置
            2：a = {
                get name(){

                },
                set name(){

                },
                //es6
                get [window.name+"sasa"](){//使用变量作为名称

                }
            }

    属性:
        1：自身属性 和 原型属性是分开的
            obj.xxx (先查找自身属性 在 查找原型属性)
            let obj = {name:"zzh"}
            Object.defineProperty(obj.__proto__,"age",{get:()=>25}
            obj.age // 25
            obj.age = 16
            obj.age //依然25

            Object.defineProperty(obj,"age",{value:18,configurable:true,writable:true})
            obj.age //18
            obj.age= 100
            obj.age //100
            delete obj["age"]//删除自身属性
            obj.age //25 向上查到到原型链



对象的创建
 class Person{constructor(name){this.name = name}}
 function Person(name){this.name = name}
 var p = new Person("AA")
 new 命令通过构造函数新建对象实例的过程
    其本质是将实例的原型，指向了构造函数的prototype属性，然后在实例上执行构造函数

 等于
    var p = {}
    p.__proto__ = Object.setPrototypeOf({},Person.prototype)
    Person.call(p,"AAA")



对象的拷贝
    1：浅拷贝 仅仅对属性进行拷贝
        function copy(obj){
            let target = {}
            for(key in obj){
                target[key] = obj[key]
            }
            return target
        }
        obj1 ={a:{name:1},name:"",fly:()=>{}}
        obj2 = copy(obj1) //浅拷贝 a属性是个对象  依然会影响前后两个对象
    2:深拷贝
        function deepCopy(obj){
            if(typeof obj != 'object'){
                return obj;
            }
            var newobj = {};
            for ( var attr in obj) {
                newobj[attr] = deepCopy(obj[attr]);
            }
            return newobj;
        }

obj Function Object(function Object{}) (关系)
    > 任何对象 或者（Function | Object）有 __proto__ 指向创建该对象的函数的原型链
    > 只有函数(function ABCD{} || Function) 和 Object 才会有prototype属性。 实例没有

        function ABCD(){}; let one = new ABCD();
        one.__proto__ 指向 ABCD.prototype
            ABCD.prototype.__proto__ == Object.prototype

        Function.__proto__ 和 Function.prototype 两者是同一对象 （Function.prototype）

        Object.__proto__ == Function.prototype
        Object.prototype
            Object.prototype.__proto__ == null

    > 函数(类) 和 实例 都是 __proto__ 完成继承
      person = {}
      person.name
        1:在person本身上查找 null
        2:在原型链上查找 persopn.__proto__( == Persion.prototype )上查找
        3:最后会一直查找到 Object.prototype 上

    dome:
      Object.toString
        1:自身没有
        2：Object.__proto__(Function.prototype) 上有该函数

      Object.prototype.toString
        Object.prototype对象上有该函数

        ===> Object.toString !==  Object.prototype.toString

      function ABCD(){}
         ABCD.prototype.toString == Object.prototype.toString

    dome2 :
        function Persopn(){}
        per = new Persopn()
        per.toString
            1：per实例上无该函数
            2：per.__proto__(Persopn.prototype) 上查找
            3：Person.prototype.__proto__ (Object.prototype)上查找
            4：per.toString == Object.prototype.toString



 constructor 属性专为Function设计
    constructor 属性返回对创建此对象的函数的引用  可以被替换的

    any.constructor == any.__proto__.constructor 查找过程

    functon ABCD(){
        1:ABCD指定prototype
        2:prototype指定 constructor 为 ABCD //ABCD.prototype.constructor = ABCD
    }

    Object == function Object(){
        为Object指定prototype为AA
        为AA指定 constructor 为 Object //Object.prototype.constructor = Object
    }

    Function == function Function(){
        为Function指定prototype为AA
        为AA指定 constructor 为 Function //Function.prototype.constructor = Function
    }

    let abcd = new ABCD();
    abcd.constructor == abcd.__proto__.constructor == ABCD.prototype.constructor == ABCD

    ABCD.constructor == Function == ABCD.__proto__.constructor == Function.prototype.constructor == Object.constructor == Object.__proto__.constructor

    Object.prototype.constructor == Object


    [Object.constructor == Object.__proto__.constructor == Function.prototype.constructor == Function]