/*
现在让我们把 input 元素和提交按钮 button 放到同一行。我们将用和之前一样的方法：通过使用拥有 row class 属性的 div 元素和其它在它之内的具有 col-xs-* class 属性的 div 元素。

将你的表单中的 input 文本框和提交按钮 button 放到一个具有 row class 属性的 div 元素中。 将你的 input 放置于 class 为 col-xs-7 的 div元素中。 将你的表单的提交按钮 button 放置于 class 属性为 col-xs-5 的 div 元素中。

这是目前为止我们的 Cat Photo 应用的最后一个挑战了。希望你能够喜欢学习 Font Awesome，Bootstrap和响应式设计！
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
       <button class="btn btn-block btn-info"><i class="fa fa-info-circle"></i> Info</button>
     </div>
     <div class="col-xs-4">
       <button class="btn btn-block btn-danger"><i class="fa fa-trash"></i> Delete</button>
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
     <div class="row">
       <div class="col-xs-6">
         <label><input type="radio" name="indoor-outdoor"> Indoor</label>
       </div>
       <div class="col-xs-6">
         <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
       </div>
     </div>
     <div class="row">
       <div class="col-xs-4">
         <label><input type="checkbox" name="personality"> Loving</label>
       </div>
       <div class="col-xs-4">
         <label><input type="checkbox" name="personality"> Lazy</label>
       </div>
       <div class="col-xs-4">
         <label><input type="checkbox" name="personality"> Crazy</label>
       </div>
     </div>
     <div class="row">
       <div class="col-xs-7">
     <input type="text" class="form-control" placeholder="cat photo URL" required>
         </div>
       <div class="col-xs-5">
     <button type="submit" class="btn btn-primary"><i class="fa fa-paper-plane"></i> Submit</button>
         </div>
       </div>
   </form>
 </div>
