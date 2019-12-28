* requestIdleCallback(callback,{timeout:ms})
* window.cancelIdleCallback(id)

	```
	1:指定低等级任务  会在浏览器空闲时调用【时间不能确定】
	2:指定timeout 如果在指定时间内没有被调用 则回调将在接下来的空闲时间被调用
	```
	```
	window.requestIdleCallback = window.requestIdleCallback || function(handler) {
	  let startTime = Date.now();
	 
	  return setTimeout(function() {
	    handler({
	      didTimeout: false,
	      timeRemaining: function() {
	        return Math.max(0, 50.0 - (Date.now() - startTime));
	      }
	    });
	  }, 1);
	}
	
	window.cancelIdleCallback = window.cancelIdleCallback || function(id) {
	  clearTimeout(id);
	}
	```
	
* requestAnimationFrame
* cancelAnimationFrame

	```
	告诉浏览器您希望执行动画，并请求浏览器在下一次重绘之前调用指定的函数来更新动画
	能保证回调函数在屏幕每一次的刷新间隔中只被执行一次
	```
	
	```
	var progress = 0;
	//回调函数
	function render() {
		 progress += 2; //修改图像的位置
		 //一帧只能执行一次
		//在接下来的（100-0)/2  帧中执行
	    if (progress < 100) {
           //在动画没有结束前，递归渲染
           window.requestAnimationFrame(render);
	    }
	}
	//第一帧渲染
	window.requestAnimationFrame(render);
	```
	
* BroadcastChannel 广播

	* BroadcastChannel只能用于同源的页面之间进行通信
	* window.postMessage却可以用于任何的页面之间