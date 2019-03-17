/*
数组方法 reduce 用来迭代一个数组，并且把它累积到一个值中。

使用 reduce 方法时，你要传入一个回调函数，这个回调函数的参数是一个 累加器 （比如例子中的 previousVal) 和当前值 (currentVal）。

reduce 方法有一个可选的第二参数，它可以被用来设置累加器的初始值。如果没有在这定义初始值，那么初始值将变成数组中的第一项，而 currentVal 将从数组的第二项开始。

下面的例子使用了 reduce 来让数组中的所有值相减：

var singleVal = array.reduce(function(previousVal, currentVal) {
  return previousVal - currentVal;
}, 0);
使用 reduce 方法来让 array 中的所有值相加，并且把结果赋值给 singleVal 。
 */

 var array = [4,5,6,7,8];
 var singleVal = 0;

 // 只能在这一行下面写代码

 singleVal = array.reduce(function(tmp1, tmp2){
   return tmp1 + tmp2;
 });
