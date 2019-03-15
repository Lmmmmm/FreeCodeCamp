/*
回忆一下，我们除了可以给元素增加 class 属性，还可以给你的每个元素增添一个 id 属性。

每一个指定元素的 id 都是唯一的，并且在每个页面中只能使用一次。

现在给我们每个包含 class well 的 div 元素一个唯一的 id。

记住，你可以像这样赋予一个元素 id：

<div class="well" id="center-well">

给左边的 well 赋予 id left-well。给右边的 well 赋予 id right-well。
 */

 <div class="container-fluid">
   <h3 class="text-primary text-center">jQuery Playground</h3>
   <div class="row">
     <div class="col-xs-6">

       <div class="well" id="left-well">
         <button class="btn btn-default target"></button>
         <button class="btn btn-default target"></button>
         <button class="btn btn-default target"></button>
       </div>
     </div>
     <div class="col-xs-6">

       <div class="well" id="right-well">
         <button class="btn btn-default target"></button>
         <button class="btn btn-default target"></button>
         <button class="btn btn-default target"></button>
       </div>
     </div>
   </div>
 </div>
