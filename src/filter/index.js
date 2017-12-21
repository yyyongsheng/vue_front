// Vue插件编写非常简单, 只需要一个函数即可, 这个函数在Vue.use(函数)的时候, 会接收到Vue对象

export default function (Vue) {
     // 日期格式化过滤器
    // 过滤器函数在调用时, 会自动接收到来自模版的数据, 要求我们数据处理后返回, 返回什么最终渲染什么
  Vue.filter("date",function (tplData) {
    
    
    function goodTime(str) {
      var now = new Date().getTime(),
          oldTime = new Date(str).getTime(),
          difference = now - oldTime,
          result = '',
          minute = 1000 * 60,
          hour = minute * 60,
          day = hour * 24,
          halfamonth = day * 15,
          month = day * 30,
          year = month * 12,


          _year = difference / year,
          _month = difference / month,
          _week = difference / (7 * day),
          _day = difference / day,
          _hour = difference / hour,
          _min = difference / minute;
      if (_year >= 1) {
          result = "发表于 " + ~~(_year) + " 年前"
      } else if (_month >= 1) {
          result = "发表于 " + ~~(_month) + " 个月前"
      } else if (_week >= 1) {
          result = "发表于 " + ~~(_week) + " 周前"
      } else if (_day >= 1) {
          result = "发表于 " + ~~(_day) + " 天前"
      } else if (_hour >= 1) {
          result = "发表于 " + ~~(_hour) + " 个小时前"
      } else if (_min >= 1) {
          result = "发表于 " + ~~(_min) + " 分钟前"
      } else result = "刚刚";
      return result;
  }

  
      return goodTime(tplData)
   })
}



// // Vue插件还有第二种写法, 是提供一个对象, 对象里面必须含有一个install方法
// export default {

//     // Vue.use(该对象)的时候, 会自动调用install方法
//     install(Vue) {
//         // 这里可以定义全局过滤器
//         // 这里可以定义全局组件
//         // 这里可以给原型进行扩展
//     }

// };
