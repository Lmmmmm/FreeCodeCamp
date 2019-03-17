/*
filter 方法用来迭代一个数组，并且按给出的条件过滤出符合的元素。

filter 方法传入一个回调函数，这个回调函数会携带一个参数，参数为当前迭代的项（我们叫它 val ）。

回调函数返回 true 的项会保留在数组中，返回 false 的项会被过滤出数组。

下面的代码示例展示了使用 filter 来移除数组中值等于5的项：

 注意： 我们忽略了第二参数和第三参数，因为例子中我们只需要第一参数就够了。

array = array.filter(function(val) {
  return val !== 5;
});
使用 filter 来创建一个新数组，新数组的值是 oldArray 中值小于6的元素。不许改变原数组 oldArray 。
 */

 var oldArray = [1,2,3,4,5,6,7,8,9,10];

 // 只能在这一行下面写代码

 var newArray = oldArray.filter(function(val) {
   return val < 6;
 });
