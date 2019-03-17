/*
除了上一种方法外，我们还可以使用构造函数来创建对象。

 构造函数 通常使用大写字母开头，以便把自己和其他普通函数区别开。

下面便是一个 构造函数 了：

var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 1;
};
在 构造函数 中， this 指向被此 构造函数 创建出来的 对象 。所以，当我们在 构造函数 中写：

  this.wheels = 4;

这时，它创建出来的新对象将带有 wheels 属性，并且赋值为 4.

你可以认为 构造函数 描述了它所创建出来的对象。

让你的 MotorBike 构造函数 描述一个具有 wheels, engines 和 seats 属性的 对象 ，并且为这些属性设置值。
 */
 var Car = function() {
   this.wheels = 4;
   this.engines = 1;
   this.seats = 1;
 };

 // 只能在这一行下面写代码

 var MotorBike = function() {
   this.wheels = 2;
   this.engines = 1;
   this.seats = 1;
 };
