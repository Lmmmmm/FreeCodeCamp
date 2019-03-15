/*
你还可以将 Bootstrap 的 col-xs-*用在 form 元素中。这样的话，我们的单选按钮就可以均匀地在页面上展开，不需要知道屏幕的分辨率有多宽。

将页面中的两个单选按钮放置于一个 <div class="row"> 元素中。然后，添加 <div class="col-xs-6"> 元素并分别包裹每一个单选按钮。
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
     <label><input type="checkbox" name="personality"> Loving</label>
     <label><input type="checkbox" name="personality"> Lazy</label>
     <label><input type="checkbox" name="personality"> Crazy</label>
     <input type="text" placeholder="cat photo URL" required>
     <button type="submit">Submit</button>
   </form>
 </div>