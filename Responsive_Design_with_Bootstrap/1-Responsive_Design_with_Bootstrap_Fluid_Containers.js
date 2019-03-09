/*
现在让我们回到我们的Cat Photo应用。这次，我们将用流行的响应式框架Bootstrap来美化它。

Bootstrap将会根据你的屏幕的大小来调整HTML元素的大小 —— 强调 响应式设计的概念。

通过响应式设计，你无需再为你的网站设计一个手机版的。它在任何尺寸的屏幕上看起来都会不错。

你仅需要通过添加下列代码到你的HTML开头来将Bootstrap添加到任意应用中：

<link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.1/css/bootstrap.min.css"/>

在此案例中，我们已经帮你把上述代码添加到页面中。

首先，我们需要把所有的HTML内容放在class为container-fluid的div下。
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
 <h2 class="red-text">CatPhotoApp</h2>

 <p>Click here for <a href="#">cat photos</a>.</p>

 <a href="#"><img class="smaller-image thick-green-border" src="/images/relaxing-cat.jpg"></a>

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
