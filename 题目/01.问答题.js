for(let i=0;i<2;i++){
  setTimeout(function(){
        console.log(i)
      },100
  );
}
for(var i=0;i<2;i++){
  setTimeout(function(){
        console.log(i)
      },100
  );
}
// ①Js是单线程的，setTimeout是异步宏任务，所以代码执行遇到异步的，就放在事件队列中的，等线程中的任务执行完后才会执行事件队列中的任务。
// ②let是es6中声明变量的方式，有自己的作用域块，可以放变量，所以let绑定for循环时，每个i都有自己的值.在这个for循环中就是满足一次条件向事件队列中添加一个打印i的事件，且每个事件中的i有自己的值
// ③Var没有作用域块，for循环的变量就会后一个覆盖前一个，当循环完毕时i就只有一个值，又因为for循环的判断条件是不满足跳出，所以i最后是2而不是1
// ④这些完了后执行事件队列中的任务，就打印了0122


// 以下哪个语句打印出来的结果时false？
// A.alert(3==true)
// B.alert(2=="2")
// C.alert(null == undefined)
// D.alert(isNaN("true"))
// A、
// 1 == true   // 布尔值会转成number true即为1 所以结果是true
// 2 == true   // 布尔值会转成number true即为1 所以结果是false
// 3 == true   // 布尔值会转成number true即为1 所以结果是false
// 1 == false  // 布尔值会转成number false即为0 所以结果是false
// 0 == false  // 布尔值会转成number false即为0 所以结果是true
// B、数字字符串2会转换成数字2在和数字2进行比较 。
// == js会优先选择将字符串转成数字==
// C、Javascript规范中提到， 要比较相等性之前，不能将null和undefined转换成其他任何值，并且规定null和undefined是相等的。
//
// null和undefined都代表着无效的值。
// D、
// isNaN() 函数用于检查其参数是否是非数字值。
// 如果参数值为 NaN 或字符串、对象、undefined等非数字值则返回 true, 否则返回 false。

// iframe是用来在网页中插入第三方页面，早期的页面使用iframe主要是用于导航栏这种很多页面都相同的部分，这样在切换页面的时候避免重复下载
// iframe的创建比一般的DOM元素慢了1-2个数量级
// iframe标签会阻塞页面的的加载
/*\
iframe局限：
1、创建比一般的 DOM 元素慢了 1-2 个数量级
iframe 的创建比其它包括 scripts 和 css 的 DOM 元素的创建慢了 1-2 个数量级，使用 iframe 的页面一般不会包含太多 iframe，所以创建 DOM 节点所花费的时间不会占很大的比重。但带来一些其它的问题：onload 事件以及连接池（connection pool）
2、阻塞页面加载
及时触发 window 的 onload 事件是非常重要的。onload 事件触发使浏览器的 “忙” 指示器停止，告诉用户当前网页已经加载完毕。当 onload 事件加载延迟后，它给用户的感觉就是这个网页非常慢。
window 的 onload 事件需要在所有 iframe 加载完毕后（包含里面的元素）才会触发。在 Safari 和 Chrome 里，通过 JavaScript 动态设置 iframe 的 SRC 可以避免这种阻塞情况
3、唯一的连接池
浏览器只能开少量的连接到 web 服务器。比较老的浏览器，包含 Internet Explorer 6 & 7 和 Firefox 2，只能对一个域名（hostname）同时打开两个连接。这个数量的限制在新版本的浏览器中有所提高。Safari 3+ 和 Opera 9+ 可同时对一个域名打开 4 个连接，Chrome 1+, IE 8 以及 Firefox 3 可以同时打开 6 个
绝大部分浏览器，主页面和其中的 iframe 是共享这些连接的。这意味着 iframe 在加载资源时可能用光了所有的可用连接，从而阻塞了主页面资源的加载。如果 iframe 中的内容比主页面的内容更重要，这当然是很好的。但通常情况下，iframe 里的内容是没有主页面的内容重要的。这时 iframe 中用光了可用的连接就是不值得的了。一种解决办法是，在主页面上重要的元素加载完毕后，再动态设置 iframe 的 SRC。
4、不利于 SEO
搜索引擎的检索程序无法解读 iframe。另外，iframe 本身不是动态语言，样式和脚本都需要额外导入。综上，iframe 应谨慎使用。
 */


/*
1.常见的浏览器端的存储技术有哪些？
 浏览器端：
  cookie
  WebStorage(localStorage、sessionStorage)
  userData
  indexedDB
 服务器端：
  session
 */