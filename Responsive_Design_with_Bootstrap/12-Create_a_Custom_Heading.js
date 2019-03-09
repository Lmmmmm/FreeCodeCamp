/*
让我们来为Cat Photo 应用做一个导航吧，把标题和惬意的猫图片放在同一行。

记住，Bootstrap使用响应式栅格系统，这使得把元素放入行内并为每个元素指定宽度变得很容易。大部分的 Bootstrap的 class 都可以被用在 div 元素上。

这张图展示了 Bootstrap 的12栏栅格布局是如何工作的：

Stacked-to-horizontal.png

注意，在此图示中，我们使用了 col-md-* class 。此处 md 代表中等，* 指定了元素宽度应该占用的栏数。 在这个案例中，我们指定了元素在中等大小的屏幕（如笔记本等）上所占用的栏数。

在此应用中，我们将使用 col-xs-*， xs 意味着非常小（比如非常小的手机屏幕）， * 指定了元素宽度应该占用的栏数。

将你的第一张图片和 h2 元素放到同一个 <div class="row"> 元素下。 将你的 h2 元素放到 <div class="col-xs-8"> 下，你的图片放到 <div class="col-xs-4"> 下，这样他们就能位于同一行了。

注意现在图片是否与文字大小一致呢？
 */

 <link href="//fonts.gdgdocs.org/css?family=Lobster" rel="stylesheet" type="text/css">

 <style>
   h2 {
     font-family: Lobster, Monospace;
   }

   .thick-green-border {
     border-color: green;
     border-width: 10px;
     border-style: solid;
     border-radius: 50%;
   }
 </style>

 <div class="container-fluid">
   <div class="row">
   <div class="col-xs-8">
   <h2 class="text-primary text-center">CatPhotoApp</h2>
   </div>
   <div class="col-xs-4">
   <a href="#"><img class="img-responsive thick-green-border" src="/images/relaxing-cat.jpg"></a>
    </div>
   </div>
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
   <p>Things cats <span class="text-danger">love:</span></p>
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
