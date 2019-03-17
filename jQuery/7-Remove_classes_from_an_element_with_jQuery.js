/*
你可以通过jQuery的addClass()方法给元素添加class,也可以通过jQueryremoveClass()方法去掉元素上的class。

像下面这样：

$("#target2").removeClass("btn-default");

$("#target2").removeClass("btn-default");

来尝试把所有button元素上的btn-default class移除掉。
 */
 <script>
   $(document).ready(function() {
     $("button").addClass("animated bounce");
     $(".well").addClass("animated shake");
     $("#target3").addClass("animated fadeOut");
     $("button").removeClass("btn-default");

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
