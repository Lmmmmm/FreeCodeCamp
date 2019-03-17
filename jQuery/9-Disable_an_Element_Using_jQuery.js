/*
你还可以用jQuery改变除了CSS以外的属性。比如，你可以让按钮变不可选。

当你把按钮设置成不可选以后，这会让按钮变灰并且不能点击。

jQuery有一个.prop()的方法让你来调整元素的属性.

我们是这样来让按钮不可选的:

$("button").prop("disabled", true);

$("button").prop("disabled", true);

来尝试让 target1 按钮不可选.
 */

 <script>
   $(document).ready(function() {
     $("#target1").css("color", "red").prop("disabled",true);

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
