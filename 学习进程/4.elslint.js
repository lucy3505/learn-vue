/* 
    eslint是代码检查工具
    ?https://eslint.org/docs/rules/semi  地址格式
    rules规则列表  semi规则名字

    某些文件不做这些检查
    比如main.js里面  new Vue({})会报 no new的检查错误
   添加 /* eslint-disable no-new */

// 做一个具不规则的忽略

/* 
    觉得规则不需要，做整体不做这个规则检查
    在eslintrc里做配置
?不想做eslint检查
    可以在.eslintignore里加上
    `` *.js
    `` *.vue

 */
