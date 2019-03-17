/*
现在让我们尝试把元素从一个div里移到另外一个div里。

jQuery有一个appendTo()方法可以把选中的元素加到其他元素中。

比如，你想让target4从我们的从right-well移到left-well，我们可以这样使用:

$("#target4").appendTo("#left-well");

来试着把target2元素从left-well移到right-well中。
 */

 <script>
   $(document).ready(function() {
     $("#target1").css("color", "red");
     $("#target1").prop("disabled", true);
     $("#target4").remove();
     $("#target2").appendTo("#right-well");

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
