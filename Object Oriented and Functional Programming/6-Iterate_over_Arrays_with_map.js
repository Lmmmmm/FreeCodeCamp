/*
map 方法可以方便的迭代数组，例子：

var timesFour = oldArray.map(function(val){
  return val * 4;
});
 map 方法会迭代数组中的每一个元素，并根据回调函数来处理每一个元素，最后返回一个新数组。注意，这个方法不会改变原始数组。

在我们的例子中，回调函数只有一个参数，即数组中元素的值 (val 参数) ，但其实，你的回调函数也可以支持多个参数，譬如：元素的索引index、原始数组arr。

使用 map 方法来为 oldArray 中的每一项增加3，并且在 newArray 中保存它们。 oldArray 不应该被改变。
 */
 var oldArray = [1,2,3,4,5];

 // 只能在这一行下面写代码
 var newArray = oldArray.map(function(index){
   return index + 3;
 });
