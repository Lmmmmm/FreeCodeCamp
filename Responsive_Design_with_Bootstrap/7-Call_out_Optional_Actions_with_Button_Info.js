/*
Bootstrap自带了一些预定义的按钮颜色。浅蓝色 btn-info 被用在那些用户可能会采取的操作上。

在你的 "Like" 按钮下面添加一个文本为 "Info" 的块级Bootstrap按钮，并为其添加 btn-info 和 btn-block class属性。

注意：这些按钮仍然需要 btn 和 btn-block class属性
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
   <button class="btn btn-block btn-primary">Like</button>
   <button class="btn btn-info btn-block">Info</button>
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
