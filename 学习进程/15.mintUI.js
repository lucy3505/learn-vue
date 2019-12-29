/*
    npm i mint-ui
    按需引入（不要完整引入）：
    npm i babel-plugin-component -D //-D:开发环境使用，编译打包的时候需要，运行的时候不需要ai
                                        帮我们实现按需打包的插件包

        ``babel的插件，babel的组件插件，实际上就是根据你引入哪些组件就打包哪些组件，你不引入就不打包

        *.babelrc:
        {
        "presets": [
            ["es2015", { "modules": false }]
        ],
        "plugins": [["component", [
            {
            "libraryName": "mint-ui",
            "style": true
            }
        ]]]
        }
        尽量不要直接粘到babelrc里，看有什么差别再把差别放到rc里，比如差别主要是plugin里的东西

        ["component", [
            {
            "libraryName": "mint-ui",
            "style": true
            }
        ]]

        ?Button和Toast的区别：
        使用方式有区别，BUTTON是注册并写成标签
        Toast不需要写成标签，他是函数类型


*/