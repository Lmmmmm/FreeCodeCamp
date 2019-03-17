/*
你看到我们是怎么给所有的按钮做弹回效果了吗？我们用 $("button")来选中按钮，然后用.addClass("animated bounce")给按钮加CSS class。

你只需要用jQuery的.addClass()方法，就可以给元素加class了。

首先，我们来使用$(".well")来获取所有class为well的div元素。

仔细想想为什么需要在well前面添加.(注意，像使用CSS声明一样，你需要在class的名称前面添加一个.)

然后使用jQuery的.addClass()方法添加2个class：animated、shake。

例如，你可以将下面的代码写在document ready function里：

$(".text-primary").addClass("animated shake");

上面的代码给所有class为text-primary 的元素添加shake class。
 */
 <script>
   $(document).ready(function() {
     $("button").addClass("animated bounce");
     $(".well").addClass("animated shake");

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
