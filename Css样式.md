




* display 作用为如何显示该元素  [32个取值](https://www.cnblogs.com/gongyijie/p/8358836.html)
	
	*  外部值 【这些值只会直接影响该元素的外部表现，而不影响元素里面的儿子级孙子级元素的表现】
	
		*  block 块级元素 div h1-h6 p form header footer section..
		
			```
			1、每个块级元素都从新的一行开始，并且其后的元素也另起一行。（很霸道，一个块级元素独占一行）
			2、元素的高度、宽度、行高以及顶和底边距都可设置。
			3、元素宽度在不设置的情况下，是它本身父容器的100%（和父元素的宽度一致
			```
		*  inline行内元素 span a img b i...

			```
			1、和其他元素都在一行上；
			2、元素的高度、宽度及顶部和底部边距不可设置；
			3、元素的宽度就是它包含的文字或图片的宽度，不可改变。
			```
		*  inline-block 见下

			```
			1、和其他元素都在一行上；
			2、元素的高度、宽度、行高以及顶和底边距都可设置。
			```

	*  内部值 [ 内部值主要是用来管束自己下属的儿子级元素的排布的]
	
		*  flow 实验
		*  flow-root  它可以撑起被你 float掉的块级元素的高度 [flow-root](./domes/display/display-flow-root.html)
		*  table;
		*  flex [弹性布局](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)<-------->[inline-flex见下](./domes/display/display-inline-flex.html) 
		*  grid 网格式布局 Vue Angular类似的
	
	* 列表值
		*  list-item;
	* 属性值
		*  table-row-group
		*  table-header-group
		*  table-footer-group
		*  table-row
	* 显示值
		* display: none;
	* 混合值
		* display: inline-block;
			* 对外表现为行内元素，对内表现为块级元素
		* inline-table;
		* inline-flex; 将对象作为内联块级弹性伸缩盒显示
			* 元素变为display:inline 并作为弹性盒子
			* 对外表现为行内元素，对内弹性盒子
	* 全局值


* animation 动画
* transform 形变(对视图进行变化)
* transition [过度](./domes/过度/transition.html)(属性值变化过程的一个动画)[单纯的代码不会触发任何过渡操作，需要通过用户的行为（如点击，悬浮等）触发]
	
	* transition-property 过度的属性值
	* transition-duration 过度周期2s
	* transiton-timing-function 过度函数
		* linear ：匀速
		* ease-in：加速
		* ease-out：减速
		* ease-in-out：先加速再减速
		* cubic-bezier：三次贝塞尔曲线，可以定制
	* transiton-delay 过度延迟执行 1s
	* 
		```
		div.dome:hover{
			transition:height 1s linear;
		}
		```
		
		```
		优点：在于简单易用，
		缺点：几个很大的局限。
		（1）transition需要事件[hover actived...]触发，所以没法在网页加载时自动发生。
		（2）transition是一次性的，不能重复发生，除非一再触发。
		（3）transition只能定义开始状态和结束状态，不能定义中间状态，也就是说只有两个状态。
		（4）一条transition规则，只能定义一个属性的变化，不能涉及多个属性。
		```