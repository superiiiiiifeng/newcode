// 排序算法类模板
function less(num1,num2) {
  return num1 < num2
}
function exch(a,i,j) {
  let t = a[i];
  a[i] = a[j];
  a[j] = t;
}
function isSorted(a) {
  for (let i = 1; i < a.length; i++) {
    if (a[i-1] > a[i]) return false
  }
  return true
}
/*
排序算法
分为
原地排序(选择排序)：无需额外的内存使用
其他排序：需要额外的内存空间来存储另一份数组副本
1.选择排序
  算法：找到数组中最小的元素—将该元素与第一个元素交换位置—再在剩下的元素中找到最小的元素—将该元素与第二个元素交换位置...如此往复，直到将整个数组排序
  复杂度：对于长度为N的数组，选择排序需要N次交换和大约N^2/2次比较
  优点：数据移动最少，交换次数和数组长度是线性关系
  缺点：运行时间和输入无关，算法没有利用输入的初始状态
 */
function chooseSort(a) {
  let N = a.length;
  for (let i = 0; i < N; i++) {
    let min = i;
    for (let j = i; j < N; j++) {
      if(a[j] <= a[min]) exch(a,min,j);
    }
  }
  return a
}
/*
2.插入排序(非冒泡排序)
  算法：对于0到N-1之间的每个i，将a[i]与a[0]到a[i-1]中比它小的元素依次有序交换，索引值i从左向右变化的过程中，它左侧的元素总是有序的，当i到达数组右端时排序就完成了
  复杂度：平均情况下插入排序需要大约N^2/4次比较和N^2/4交换
  优点：适用于非随机已接近有序的数组排序
 */
function insertSort(a) {
  let N = a.length;
  for (let i = 1; i < N; i++) {
    for (let j = i; j > 0 && less(a[j],a[j-1]); j--) {
      exch(a,j,j-1);
      console.log(a);
    }
  }
  return a
}
// 冒泡排序
function bubbleSort(a) {
  let N = a.length;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N-i-1; j++) {
      if(less(a[j+1],a[j])) exch(a,j,j+1);
      console.log(1);
    }
    if (isSorted(a)) break
  }
  return a
}
function bubbleSortPro(a) {
  let N = a.length;
  for (let i = 0; i < N; i++) {
    let flag = true;
    for (let j = 0; j < N-i-1; j++) {
      if(less(a[j+1],a[j])) {
        exch(a,j,j+1);
        flag = false;
      }
    }
    console.log(i);
    if (flag) break //如果数组已经有序(即内层循环不存在交换)，则退出剩下的循环
  }
  return a
}
// 希尔排序
// 选择增量两种方式：
// 1.h=length/k，缩小增量以 h = h/k，数组长度N必须为k的n次方,n>=1
function shellSort1(a) {
  let N = a.length;
  let h = N/2;
  console.log(h);
  while (h >= 1) {
    //插入排序
    for (let i = h; i < N; i++) {
      for (let j = i; j >= h && less(a[j],a[j-h]); j -= h) {
        exch(a,j,j-h)
      }
    }
    h = h/2;
  }
  return a
}
// console.log(shellSort1([4, 3,1,5]));
// 2.Knuth增量的初始值是1，通过3*h+1循环计算，一直得到h刚好不大于数组长度。此时就取h做最大间隔。然后继续通过h=(h-1)/3来计算剩下的增量。数组长度无限制
function shellSort2(a) {
  let N = a.length,
      h = 1;
  while (h < N/3){
    h = 3*h + 1
  }
  while (h >= 1) {
    //插入排序
    for (let i = h; i < N; i++) {
      for (let j = i; j >= h && less(a[j],a[j-h]); j -= h) {
        exch(a,j,j-h)
      }
    }
    h = (h-1)/3;
  }
  return a
}
console.log(shellSort2([4, 3]));