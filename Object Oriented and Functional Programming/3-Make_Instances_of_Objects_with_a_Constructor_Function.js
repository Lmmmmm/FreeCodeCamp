/*
现在，我们把上一节课我们写的 构造函数 在这里用起来！

使用构造函数时，我们通过在它前面使用 new 关键字 来对它进行调用，如下：

var myCar = new Car();

myCar 现在成为了 Car 的一个 实例（instance），它被 构造函数 描述成下面的样子：

{
  wheels: 4,
  engines: 1,
  seats: 1
}
记住：要使用 new 关键字 去调用构造函数。因为只有这样，Javascript才知道这是要去构造一个新 对象 ，并且把构造函数中的 this 指向这个新对象。

现在，当 myCar （即 Car 的一个 实例 ）创建后，他可以像普通对象一样被使用，包括创建、访问、修改它的属性等，就像我们使用其他对象一样。如下：

myCar.turboType = "twin";

我们的 myCar 变量现在有了一个 turboType 属性了，且值为 "twin" 。

在编辑器中，使用 Car 这个构造函数去创建一个新的 实例 ，并且把这个实例赋值给 myCar 。

然后给 myCar 创建一个 nickname 属性，且属性值为一个字符串
 */
 var Car = function() {
   this.wheels = 4;
   this.engines = 1;
   this.seats = 1;
 };

 // 只能在这一行下面写代码

 var myCar;
 myCar = new Car();
 myCar.wheels = 4;
 myCar.nickname = "String";
