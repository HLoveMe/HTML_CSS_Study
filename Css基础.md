



* 选择器
	
	* 元素选择器
	
		```
		p,div { color:red } 。p和div标签的字体为红色
		```
	* 派生选择器 后代选择器 子元素选择器 相邻兄弟选择器
	  
	  	```
	  	后代选择器: ul li { color:red }  ul 中的 li字体为红色
	  	子元素选择器: ul >li {}  选择ul 的直接子类li
	  	相邻兄弟选择器: p+div{}  和p相邻的 一个div 标签 并且p div有相同父类
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
			```
		*  nth-last-child(2)   从后开始计数
		*  p:nth-of-type(2)     得到父类第2个p元素    1开始     
		*  p:nth-last-of-type(n)     得到父类第2个p元素    1开始  (倒数)

* 伪类 伪元素

	* 伪类偏向于元素的动作行为
	* 伪元素偏向于元素的属性
	* css3 伪类使用[:]  伪元素[::]

	* 伪元素
		* :first-letter
		* :first-line
		* :before
		* :after
		* :selection 鼠标选中

	* 伪类
		* :active
		* :focus
		* :fover
		* :link
		* :visited
		* 伪类选择器
	
* 盒子模型
	
	* 标准盒子模型 content-box [查看](./domes/boxs/content_box.html)
	* border-box  [查看](./domes/boxs/content_border.html)
	* 指定盒子模式
	
		```
		box-sizing:border-box;
		-moz-box-sizing:border-box; /* Firefox */
		-webkit-box-sizing:border-box; /* Safari */
		```

		``` content-box
		<---margin--><-border-><--padding-->|<---width->|<--padding--><-border-><---margin-->
		```
		```border-box 
		 <---margin--><--------------------------------width----------------------------><---margin-->

          				<----padding---><-border->|content|<-border-><----padding--->
		```

* Css样式 [详情](./Css样式.md)
* 布局
	* 绝对定位布局
		* static（默认情况，存在文档流当中）
		* relative（根据元素本身原来所应该处的位置偏移，不会改变布局的计算）
		* absolute（绝对定位，脱离文档流，不会对别的元素造成影响，相对的是父级最近的 relative 或者 absolute 定位元素）
		* fixed（绝对定位，脱离文档流，相对于的是屏幕）
	* flex布局
		* 盒子模型 见上
		* flexbox弹性盒子 见display
	* float布局
		* 自身的影响
			* float元素拥有设置宽高等块级元素特征
			* 浮动元素靠前
			* 一行显示不下 元素往下掉
		* 兄弟影响
			* 不影响块级元素位置
			* 影响块级元素文本
			* 同是float元素在旁
		* 对父级影响
			* 元素不布局上消失
			* 高度塌陷 
				
				```清除浮动
				.clearfix:after{
					content:"";
					display:block;
					clear:both
				}
				```
	* table布局
	* 响应式布局
	