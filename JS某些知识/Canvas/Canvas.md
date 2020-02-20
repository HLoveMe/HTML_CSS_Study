* Canvas元素

	* 使用width height 属性指定高度
		
		```
		<canvas id="canvasId"  width="600" height="300"/>
		```
	* 使用css指定高宽 【有问题】

		```
		<canvas id="canvasId" />
		#canvasId{
			width:600px;
			height:300px
		}
		只会指明 canvas元素的大小
		canvas画布大小还是默认的200x150
		canvas会被拉伸到元素大小
		```
	