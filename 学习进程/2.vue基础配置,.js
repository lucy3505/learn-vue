/* 

biuld和config是两个配置文件夹
build是webpack配置
build里：base是dev和prod的公共配置

config里的配置也是整个公共配置的一部分，特别是index
`` config/index
autoOpenBrowser:配置自动打开浏览器
proxyTable:配置代理   react在package.json里配
vue的配置时暴露在外面配置的  react是内嵌在包里的
``static静态文件夹  用来放全局css等
git的特点：如果你是空文件夹是不会对你进行管理，.gitkeep可以让他管理

``babelrc
babel本身是不能对代码编译，
?靠什么对代码进行编译？

``需要插件进行编译，特定插件编译特定语法
rc:runtime control
linux下面的一种名称，专门用来代表配置文件，看到rc就知道是配置文件，babelrc就是babel配置文件，本质上是json文件，对象里可以配置plugin数组，plugin插件包，还可以配置preset预设包。
光下载包没有用，还有些配置才有用，就像webpack光下载没有用，要在里面写配置，
按理说要把babel的配置都写在babelrc里，但包特别多，可以用预设
``preset  预设
有几十个插件包，20几个常用的包放在一个大包里，这个包就是预设包
这里就用了两个预设包
这里我们设置了两个包  env和stage-2包 ，这两个都是简写，package.json里可以看到这两包都安装了，
    "babel-preset-env": "^1.3.2",
    "babel-preset-stage-2": "^6.22.0",

 "plugins": ["transform-vue-jsx", "transform-runtime"]里面的两个名字也是简写
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-plugin-transform-vue-jsx": "^3.5.0",
还写了plugins说明preset里面没有包含plugins里面这两个插件

规范的插件都集合放在env里面

*/