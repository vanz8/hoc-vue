<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header :style="{paddingTop: '4px'}">
      <div :style="{marginLeft: '15px', float: 'left'}">
        <a href="/" :style="{color: '#fff', fontWeight: 500}">KREATIVE</a>
      </div>
      <a-menu
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '58px', float: 'right', paddingTop: '2px' }"
      >
        <a-menu-item key="1">
          Contact
        </a-menu-item>
        <a-menu-item key="2">
          Login
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
export default {
  name: 'App'
}
</script>
