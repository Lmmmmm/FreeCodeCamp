/*
现在我们已经知道 document ready function的用法了.

现在让我们开始写第一个jQuery语句，所有jQuery方法都是由$开始的，通常称作为 美元符号，或者简称为bling。

jQuery通过选择器来选择一个元素的，然后操作元素做些改变。

举个例子，要让所有的按钮做弹回效果，只要把这段代码写在document ready function里面就可以了。

$("button").addClass("animated bounce");

我们已经在后台为你引入了jQuery库和Animate.css库，这样你就可以在编辑器里直接可以使用这两个库，进而通过jQuery给button元素添加bounce回弹动画效果。
 */
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
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
