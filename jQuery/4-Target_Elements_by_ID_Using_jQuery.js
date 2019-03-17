/*
你还可以根据id属性来获取元素

首先用$("#target3")来选择id为target3的button元素。

注意，就像CSS一样，在id的名字前加上 #。

然后使用jQuery的.addClass()方法来添加 animated和fadeOutclass.

例如：下面的代码就是给id为target6的button元素添加fade out效果的：

$("#target6").addClass("animated fadeOut")
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
