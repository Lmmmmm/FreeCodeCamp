/*
现在你已经了解了3种选择器：元素选择器：$("button")、class选择器：$(".btn")、id选择器：$("#target1")。

尽管用.addClass()这种方式就可以加不同的class，不过还是让我们尝试用不同的方式给元素添加class吧。

用上面介绍的jQuery选择器和addClass()方法：

给所有type为button的元素添加animated class。

给所有class为.btn的按钮添加shake class。

给所有id为#target1的按钮添加btn-primary class。
 */

 <script>
   $(document).ready(function() {
     $("button").addClass("animated bounce");
     $(".well").addClass("animated shake");
     $("#target3").addClass("animated fadeOut");

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
