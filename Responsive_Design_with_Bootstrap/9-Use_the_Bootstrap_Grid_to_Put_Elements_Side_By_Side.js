/*
Bootstrap 使用一种响应式网格布局——可轻松实现将多个元素放入一行并指定各个元素的相对宽度的需求。Bootstrap 中大多数的class属性都可以设置于 div 元素中。

下面这张图表显示了 Bootstraps 的12列网格布局是如何起作用的：

Stacked-to-horizontal.png

请注意，在这张图表中，class属性 col-md-* 正被使用。在这里，md 表示 medium (中等的)，* 代表一个数字，它指定了这个元素所占的列宽。通过此图表的属性设置可知，在中等大小的屏幕上(例如笔记本电脑)，元素的列宽被指定了。

在我们创建的 Cat Photo App 中，将会使用 col-xs-* ，其中 xs 是 extra small 缩写（应用于较小的屏幕，比如手机屏幕），* 是你需要填写的数字，代表在一行中,各个元素应该占的列宽。

把 Like, Info 和 Delete 三个按钮一并放入一个 <div class="row"> 元素中；然后，其中的每一个按钮都需要各自被一个 <div class="col-xs-4"> 元素包裹。

当div 元素设置了 class 属性 row 之后，那几个按钮便可嵌入其中。
 */

 <link href="//fonts.gdgdocs.org/css?family=Lobster" rel="stylesheet" type="text/css">
 <style>
   .red-text {
     color: red;
   }

   h2 {
     font-family: Lobster, Monospace;
   }

   p {
     font-size: 16px;
     font-family: Monospace;
   }

   .thick-green-border {
     border-color: green;
     border-width: 10px;
     border-style: solid;
     border-radius: 50%;
   }

   .smaller-image {
     width: 100px;
   }
 </style>

 <div class="container-fluid">
   <h2 class="red-text text-center">CatPhotoApp</h2>

   <p>Click here for <a href="#">cat photos</a>.</p>

   <a href="#"><img class="smaller-image thick-green-border" src="/images/relaxing-cat.jpg"></a>

   <img src="/images/running-cat.jpg" class="img-responsive">
   <div class="row">
   <div class="col-xs-4">
     <button class="btn btn-block btn-primary">Like</button>
   </div>
   <div class="col-xs-4">
     <button class="btn btn-block btn-info">Info</button>
   </div>
    <div class="col-xs-4">
     <button class="btn btn-block btn-danger">Delete</button>
     </div>
   </div>
   <p>Things cats love:</p>
   <ul>
     <li>cat nip</li>
     <li>laser pointers</li>
     <li>lasagna</li>
   </ul>
   <p>Top 3 things cats hate:</p>
   <ol>
     <li>flea treatment</li>
     <li>thunder</li>
     <li>other cats</li>
   </ol>
   <form action="/submit-cat-photo">
     <label><input type="radio" name="indoor-outdoor"> Indoor</label>
     <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
     <label><input type="checkbox" name="personality"> Loving</label>
     <label><input type="checkbox" name="personality"> Lazy</label>
     <label><input type="checkbox" name="personality"> Crazy</label>
     <input type="text" placeholder="cat photo URL" required>
     <button type="submit">Submit</button>
   </form>
 </div>
