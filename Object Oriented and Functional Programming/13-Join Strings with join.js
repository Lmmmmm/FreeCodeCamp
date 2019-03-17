/*
我们还可以使用 join 方法来把数组转换成字符串，里面的每一个元素可以用你指定的连接符来连接起来，这个连接符就是你要传入的参数。

下面展示了使用 join 来将数组中的每一项放入字符串，并用 and 进行连接：

var veggies = ["Celery", "Radish", "Carrot", "Potato"];
var salad = veggies.join(" and ");
console.log(salad); // "Celery and Radish and Carrot and Potato"
使用 join 方法，连接符为' '把数组 joinMe 转化成字符串 joinedString.
 */

 var joinMe = ["Split","me","into","an","array"];
 var joinedString = '';

 // 只能在这一行下面写代码

 joinedString = joinMe.join(" ");
