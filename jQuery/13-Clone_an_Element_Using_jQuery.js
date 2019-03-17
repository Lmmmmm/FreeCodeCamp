/*
除了移动元素，你还可以拷贝元素。简单理解：移动元素就是剪切，拷贝元素就是复制。

jQuery的clone()方法可以拷贝元素。

比如，如果我想把target2从left-well拷贝到right-well，我们可以这样写:

$("#target2").clone().appendTo("#right-well");

你有没有发现两个jQuery方法合在一起使用了？这就叫方法链function chaining，使用起来很方便。

复制target5元素追加到left-well。

提示：当你点击run tests后left-well会有两个#target5，千万别以为这是bug。
实际上是因为编辑器中的代码会自动执行一次，点击run后会再执行一次，所以有两个#target5。
 */

 <script>
   $(document).ready(function() {
     $("#target1").css("color", "red");
     $("#target1").prop("disabled", true);
     $("#target4").remove();
     $("#target2").appendTo("#right-well");
     $("#target5").clone().appendTo("#left-well");

   });
 </script>

 <!-- 请只修改这条注释以上的代码 -->

 <body>
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
 </body>
