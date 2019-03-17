/*
现在让我们开始学习最流行的JavaScript库jQuery吧，不用担心JavaScript本身，我们稍后会提到它。

在开始学习使用jQuery之前，我们需要加一些代码到HTML文件中。

首先在页面顶端增加一行script元素，然后写上结束符。

浏览器会运行script 里所有的Javascript，包括jQuery。

在你的script里，添加这个方法:$(document).ready(function() {到你的script，接下来用});结束这个方法

接下来我们来学习如何写方法，方法里面的代码会被浏览器加载。

在没有document ready function以前，你的代码会在HTML没有渲染完成就执行，这样会产生bug。
 */
 <script>
   $(document).ready(function() {

   });
 </script>

 <!-- 请只修改这条注释以上的代码 -->

 <div class="container-fluid">
   <h3 class="text-primary text-center">jQuery Playground</h3>
   <div class="row">
     <div class="col-xs-6">
       <h4>#left-well</h4>
       <div class="well" id="left-well">
         <button class="btn btn-default target" id="target1">#target1</button>
         <button class="btn btn-default target" id="target2">#target2</button>
         <button class="btn btn-default target" id="target3">#target3</button>
       </div>
     </div>
     <div class="col-xs-6">
       <h4>#right-well</h4>
       <div class="well" id="right-well">
         <button class="btn btn-default target" id="target4">#target4</button>
         <button class="btn btn-default target" id="target5">#target5</button>
         <button class="btn btn-default target" id="target6">#target6</button>
       </div>
     </div>
   </div>
 </div>
