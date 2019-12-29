<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Router Test</h2>
        </div>
      </div>
    </div>

    <div class="row">
      <!-- 左侧的路由链接 -->
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--生成路由链接-->
          <router-link to="/about" class="list-group-item">About</router-link>
          <router-link to="/home" class="list-group-item">Home</router-link>
        </div>
      </div>

      <!-- 右侧的界面 以前的react就会在这里写<Route/>的配置，哪里要显示路由组件界面，哪里就配置Route  但vue不是这样，vue是统一在一个文件配置router/index.js
      现在问题：现在组件里面如何告诉他在某个位置去显示当前匹配的路由组件界面呢？
        很简单：<router-view></router-view>
      -->
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!--标识在此显示当前路由组件界面 说白了，他最后至少会在此插入About或Home标签:<About/><Home/> 我们没有亲自在这插入About或Home标签，路由组件我们从来不亲自写标签，但他最后是会产生标签的，不用我们亲自去做-->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  methods: {
    hint() {
      Toast({
        message: "操作成功",
        position: "button"
      });
    }
  }
};
</script>

<style scoped >
</style>

