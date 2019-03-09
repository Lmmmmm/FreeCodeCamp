/*
通常情况下，你的 button 元素仅与它所包含的文本一样宽。通过使其成为块级元素，你的按钮将会伸展并填满页面整个水平空间，任何在它之下的元素都会跟着浮动至该区块的下一行。

这张图阐述了行内元素与块级元素的区别：

btn.png

注意，这些按钮仍然需要 btn class。

添加Bootstrap的 btn-block class 到你的按钮。
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
   <button class="btn btn-block">Like</button>
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
