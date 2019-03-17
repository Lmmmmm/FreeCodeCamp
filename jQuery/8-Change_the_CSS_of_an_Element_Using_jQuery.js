/*
我们可以通过jQuery来改变HTML元素的CSS样式。

jQuery有一个叫做.css()的方法能让你改变元素的CSS样式。

我们是这样来把颜色改变成蓝色的:

$("#target1").css("color", "blue");

这跟通常的CSS语法有点不同，这里CSS的属性和值是在引号内的，并且用逗号分开。

把你的document ready function清空，

来尝试把target1改变成红色。
 */
 <script>
   $(document).ready(function() {
     $("#target1").css("color", "red");

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
