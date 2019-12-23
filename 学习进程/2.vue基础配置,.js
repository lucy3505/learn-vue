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
``preset  预设  多个插件包的集合
有几十个插件包，20几个常用的包放在一个大包里，这个包就是预设包
这里就用了两个预设包
这里我们设置了两个包  env和stage-2包 ，这两个都是简写，package.json里可以看到这两包都安装了，
    "babel-preset-env": "^1.3.2",
    "babel-preset-stage-2": "^6.22.0",

 "plugins": ["transform-vue-jsx", "transform-runtime"]里面的两个名字也是简写
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-plugin-transform-vue-jsx": "^3.5.0",
还写了plugins说明
``preset里面没有包含plugins里面这两个插件

规范的插件都集合放在env里面
?preset为什么写两个？
规范的语法插件都是放在dev里面的，但在规范之前是有草案阶段的
``任何语法插件都是先进入到草案里，然后才都规范dev里。
草案又分成stage0--->stage4   五个阶段，stage4之后就到规范里

*/
{
  "presets": [
    ["env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }],
    "stage-2"
  ],
  "plugins": ["transform-vue-jsx", "transform-runtime"]
}
/* 
    规范语法插件包都在env里面，stage-2说明所有在stage2里的语法包都进来，stage-0不稳定，stage-2基本稳定
    ?预设包与插件包的关系
    一个预设包里包含许多插件包
    一开始上来肯定是配置预设包env，然后也有可能配置插件包

 */
 /* 
    ``.eslintignore  里放eslint不做检查的文件
    eslint默认对所有文件检查
    /build/
    /config/
    /dist/
    /*.js
    ``有 / 代表对根目录下的这些文件不做eslint检查
    1. *.js 代表对所有的js文件不做eslint检查
    2. *.vue代表对所有vue文件不做eslint检查
    *  1和2和在一起写等于eslint不起作用
 ``eslintrc  eslint的配置文件
 一个对象模块
 
  */