* 选择器
	
	* 元素选择器
	
		```
		p,div { color:red } 。p和div标签的字体为红色
		```
	* 派生选择器 后代选择器 子元素选择器 相邻兄弟选择器
	  
	  	```
	  	后代选择器: ul li { color:red }  ul 中的 li字体为红色
	  	子元素选择器: ul >li {}  选择ul 的直接子类li
	  	相邻兄弟选择器: p+div{}  和p相邻的 一个div标签。 并且p div有相同父类
	  			ul>li+li{ border-top:1px solid red }
	  			ul>li:not(:last-child){  border-bottom:1px solid red  }
	  	兄弟选择器：p~div 在p之后的所有div 有相同的直接父类
	  	```
	  	* 配合class选择器
	  	
		  	```
		  	ul li.error{ color:red }
		  	ul li.success{ color:blue }
		  	
		  		<ul >
		  			<ol>
		  				<li class='error'>A</li>
		  				<li class='error'>B</li>
		  				<li class='success'>C</li>
		  			</ol>
		  		</ul>
		  	```
	* 属性选择器
		
		 * p[attr]  选择拥有该属性的标签
		 * p[attr=value]   选择   属性值为value标签
		 * p[attr~=women]   选择   属性值包含某个字段    people = "sex  women "
		 * p[attr*=value]  选择   属性值包含value  标签
		 * p[attr|=value]  选择   属性值包含value 或者"value-" 的 标签
		 * p[attr^=value]           属性值以什么开头
		 * p[attr$=value]           属性值以什么结尾

		 ```
		 <p    class="header" title="some" />
		 
		 p[class~='header'][title]{
		 	//p标签
		 	//class属性包含header
		 	//有title属性
		 }
		 ```
		
	* class ,id选择器

		```
		<div id="App">
			<p class="title">AAA</p>
		</div>
		#App{}
		.title{}
		```
	* 结构选择器 = 伪类选择器
	
		```
		-child    关心节点
		-of-type  关心类型
		```
		*  p:first-child    得到p,且为第一个_子_元素
		*  p:last-child
		*  p:first-of-type  得到p标签 它属于父亲下第一个p
		*  p:last-of-type  得到p标签 它属于父亲下最后一个p
		*  p:only-of-type   得到p标签 在父标签下,只有一个p 可以有其他标签
		*  p:only-child     得到父类下p标签  且唯一p  无其他标签
		*  p:nth-child(index)    选择所有p 它在父亲下第index个 1开始
			
			```
			<div>
				<a>
				<p>AA</p>     2
			</div>
			2n+0    个数为偶数
			3n+1    个数为3倍数的下一个元素
			Odd 和 even  计数和偶数   nth-child(Odd)
			
			li:nth-child(-n+3){}显示前面3个
			```
		*  nth-last-child(2)   从后开始计数
		*  p:nth-of-type(2)     得到父类第2个p元素    1开始     
		*  p:nth-last-of-type(n)     得到父类第2个p元素    1开始  (倒数)
		*  p:not 排除选择   
			*  li:not(:last-child){}//排除最后一个
			*  a[href]:not([class]){}  没有class属性
		* div:empty 没有子元素的 元素