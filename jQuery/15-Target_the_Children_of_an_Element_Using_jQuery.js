/*
每个人都继承了自己的父母的一些属性，譬如：DNA、相貌、血型、体型等等，HTML也不例外。

许多HTML元素都有children(子元素)，每个子元素都从父元素那里继承了一些属性。

举个例子，每个HTML元素都是 body 的子元素， 你的 "jQuery Playground" h3 元素是 <div class="container-fluid"> 的子元素。

jQuery有一个方法叫children()，它允许你访问指定元素的子元素。

举个例子：让left-well 元素的子元素children()的文本颜色变成蓝色。

$("#left-well").children().css("color", "blue")

任务：让#right-well元素的所有子元素的文本颜色都变成橙色（orange）。
 */
 <script>
   $(document).ready(function() {
     $("#target1").css("color", "red");
     $("#target1").prop("disabled", true);
     $("#target4").remove();
     $("#target2").appendTo("#right-well");
     $("#target5").clone().appendTo("#left-well");
     $("#target1").parent().css("background-color", "red");
     $("#right-well").children().css("color", "orange");

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