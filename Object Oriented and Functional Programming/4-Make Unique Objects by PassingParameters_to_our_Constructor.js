/*
我们之前写的 构造函数 很好，但是我们不想总是创建相同的对象，怎么办呢？

为了解决这个问题，我们要向 构造函数 中添加 参数 。像下面这样：

var Car = function(wheels, seats, engines) {
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};
现在，我们可以在调用 构造函数 时传入一组 参数 了。

var myCar = new Car(6, 3, 1);

这段代码将会使用这一组 参数 来创建出下面的对象：

{
  wheels: 6,
  seats: 3,
  engines: 1
}
现在该你试试了！改动 Car 的 构造函数 ，使它能够通过使用 参数 来为 wheels 、 seats 、 engines 属性进行赋值。

然后调用你刚刚改写过的 构造函数 ，并传入三个 参数 ，我们就能看到创建的新对象赋值给了 myCar 。
 */

 var Car = function(wheels, seats, engines) {
   //Change this constructor
   this.wheels = wheels;
   this.seats = seats;
   this.engines = engines;
 };

 //Try it out here
 var myCar1 = new Car(3,1,2);
 var myCar2 = new Car(4,4,2);
 var myCar = new Car(2,6,3);
