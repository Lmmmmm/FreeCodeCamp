/*
Font Awesome 是一个非常方便的图标库。这些图片都是矢量图，以 .svg 文件格式保存。这些图标用起来就像字体一样。你可以使用像素单位来指定他们的大小，它们会继承父级HTML元素的字体大小。

使用 Font Awesome 分别为你的 info 按钮添加 info-circle 图标，为你的 delete 按钮添加 trash 图标。
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
       <button class="btn btn-block btn-primary"><i class="fa fa-thumbs-up"></i> Like</button>
     </div>
     <div class="col-xs-4">
       <button class="btn btn-block btn-info">
         <i class="fa fa-info-circle">Info</i></button>
     </div>
     <div class="col-xs-4">
       <button class="btn btn-block btn-danger"><i class="fa fa-trash">Delete</i></button>
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
