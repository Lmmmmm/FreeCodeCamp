/*
对象拥有自己的特征，称为 属性，对象还有自己的函数，称为 方法 。

在前面的课程（构造函数）中，我们使用了 this 指向当前（将要被创建的）对象中的 公有属性 。

我们也可以创建 私有属性 和 私有方法 ，它们两个在对象外部是不可访问的。

为了完成这个任务，我们在 构造函数 中，使用我们熟悉的 var 关键字去创建变量，来替代我们使用 this 创建 属性 。

比如，我们想记录我们的car行驶的 speed ，但是我们希望外面的代码对 speed 的修改只能是加速或减速（而不是变成字符串、直接赋值成某个速度等其他操作），那么如何达到这类操作的目的呢？

编辑器中的 构造函数 展示了如何实现这种控制模式。

该你自己试试了！修改 Bike 的 构造函数 ，使它有一个名为 gear 的 私有属性 ，还有两个公有方法，叫做 getGear 和 setGear ，这两个方法用来获得和设置 gear 的值。
 */
 var Car = function() {
   // this is a private variable
   var speed = 10;

   // these are public methods
   this.accelerate = function(change) {
     speed += change;
   };

   this.decelerate = function() {
     speed -= 5;
   };

   this.getSpeed = function() {
     return speed;
   };
 };

 var Bike = function() {
   // 只能在这一行下面写代码
   var gear;
    this.getGear = function() {
      return gear;
    };

   this.setGear = function(Gear) {
     gear = Gear;
   };

 };

 var myCar = new Car();

 var myBike = new Bike();
