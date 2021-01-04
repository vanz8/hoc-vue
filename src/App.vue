<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
      <div :style="{marginLeft: '15px', float: 'left'}">
        <a href="/" :style="{color: '#fff', fontWeight: 500}">KREATIVE</a>
      </div>
      <a-menu
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px', float: 'right' }"
      >
        <a-menu-item key="1">
          Contact
        </a-menu-item>
        <a-menu-item key="2">
          <a >Login {{ githubAuthorizeUrl }}</a>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <div
        :style="{ background: '#fff', padding: '24px', margin: '16px 0' }"
      >
        <router-view />
      </div>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<script>
import {githubAuthorizeUrl} from '@/config'
export default {
  name: 'App'
}
console.log(githubAuthorizeUrl)
</script>
