/*
每个HTML元素根据继承属性都有父parent元素。

举个例子，h3 元素的父元素是 <div class="container-fluid">，<div class="container-fluid">的父元素是 body。

jQuery有一个方法叫parent()，它允许你访问指定元素的父元素。

举个例子：让left-well 元素的父元素parent()的背景色变成蓝色。

$("#left-well").parent().css("background-color", "blue")

试试让#target1元素的父元素的背景色变成红色。
 */
 <script>
   $(document).ready(function() {
     $("#target1").css("color", "red");
     $("#target1").prop("disabled", true);
     $("#target4").remove();
     $("#target2").appendTo("#right-well");
     $("#target5").clone().appendTo("#left-well");
     $("#target1").parent().css("background-color", "red");

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
