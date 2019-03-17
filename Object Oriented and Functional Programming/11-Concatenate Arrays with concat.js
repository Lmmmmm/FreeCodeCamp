/*
concat 方法可以用来把两个数组的内容合并到一个数组中。

concat 方法的参数应该是一个数组。参数中的数组会拼接在原数组的后面，并作为一个新数组返回。

下面是一个拼接数组的例子，用concat 把 otherArray 拼接在 oldArray 的后面：

newArray = oldArray.concat(otherArray);

使用 .concat() 将 concatMe 拼接到 oldArray 后面，并且赋值给 newArray。
 */

 var oldArray = [1,2,3];
 var newArray = [];

 var concatMe = [4,5,6];

 // 只能在这一行下面写代码

 newArray = oldArray.concat(concatMe);
