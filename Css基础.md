



* 选择器 [选择器](./Css选择器.md)  [伪类伪元素](./Css伪类伪元素.md)

* 伪类 伪元素  [伪类伪元素](./Css伪类伪元素.md)
* css函数
	
	* var
	* attr
	* calc

	```
	var配合:root  定义值 
	:root{
		--background-color:"red",
	}
	.ccc{
		background-color:var(--background-color)
	}
	```
	```
	<div data-tip="abcd">AAA </div>
	
	div:after{
		content:attr(data-tip)
	}
	```
	```
	calc用于弹性布局
	div{
		width:calc(50% - 1rem -100px)
	}
	```

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
* Css字体  [字体](./domes/居中/Css居中.html)
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
	