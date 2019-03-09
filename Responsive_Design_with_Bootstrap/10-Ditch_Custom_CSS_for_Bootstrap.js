/*
现在，让我们清理一下之前的代码了，以让我们的 Cat Photo 应用看起来更简洁，用 Bootstrap 内置的样式来替换我们之前自定义的样式。

别担心 —— 以后我们会有大把时间来自定义我们的 CSS 样式的 ：）

删除 style 元素里的 .red-text, p 和 .smaller-image CSS声明，这样你的 style 留下的声明就只有 h2 和 thick-green-border。

然后删除包含死链接的 p 元素。 移除 h2 元素的 red-text class 并且用 Bootstrap的 text-primary class替换之。

最后，移除第一个 img 元素的 "smaller -image" class ，替换为 Bootstrap的 img-responsive class。
 */

 <link href="//fonts.gdgdocs.org/css?family=Lobster" rel="stylesheet" type="text/css">
 <style>
   h2 {
     font-family: Lobster, Monospace;
   }

   .smaller-image {
     width: 100px;
   }
 </style>

 <div class="container-fluid">
   <h2 class="text-primary text-center">CatPhotoApp</h2>

   <a href="#"><img class="img-responsive thick-green-border" src="/images/relaxing-cat.jpg"></a>

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
