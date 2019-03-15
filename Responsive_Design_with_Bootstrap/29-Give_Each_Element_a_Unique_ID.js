/*
我们也可以使用jQuery并通过每个按钮各自唯一的 id 来标识出它们。

给你的每一个按钮一个唯一的 id ，以 target1 为开始，target6 为结束。

确保 target1 到 target3 在 #left-well 之中，target4 到 target6 则在 #right-well 之中。
 */

 <div class="container-fluid">
   <h3 class="text-primary text-center">jQuery Playground</h3>
   <div class="row">
     <div class="col-xs-6">
       <h4>#left-well</h4>
       <div class="well" id="left-well">
         <button class="btn btn-default target" id="target1"></button>
         <button class="btn btn-default target" id="target2"></button>
         <button class="btn btn-default target" id="target3"></button>
       </div>
     </div>
     <div class="col-xs-6">
       <h4>#right-well</h4>
       <div class="well" id="right-well">
         <button class="btn btn-default target" id="target4"></button>
         <button class="btn btn-default target" id="target5"></button>
         <button class="btn btn-default target" id="target6"></button>
       </div>
     </div>
   </div>
 </div>
