/*
你已经看到了当用jQuery选择器通过id属性来选取元素的时候是多么方便，但是你不能总是写这么整齐的id。

幸运的是，jQuery有一些另外的技巧可以达到同样的效果。

jQuery 用CSS选择器来选取元素，target:nth-child(n) CSS选择器允许你按照索引顺序(从1开始)选择目标元素的所有子元素。

示例：你可以给目标元素的第三个子元素添加bounce class。

$(".target:nth-child(3)").addClass("animated bounce");

任务：确保给目标元素的第二个子元素添加animated和bounce class，你可以通过target class来选获得目标元素。
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
     $("#left-well").children().css("color", "green");
     $(".target:nth-child(2)").addClass("animated bounce");

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
