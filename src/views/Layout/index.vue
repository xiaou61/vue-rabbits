<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from "@/views/Layout/components/LayoutFixed.vue";
</script>

<template>
  <LayoutFixed/>
  <LayoutNav/>
  <LayoutHeader/>
<!--  二级路由出口-->
  <RouterView/>
  <LayoutFooter/>

</template>