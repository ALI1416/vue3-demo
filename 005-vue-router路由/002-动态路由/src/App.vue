<template>
  <router-view></router-view>
  <router-link to="/">访问/</router-link>
  <hr>
  <router-link to="/about/123">访问/about/123</router-link>
  <br>
  <router-link to="/about/123/">访问/about/123/</router-link>
  <br>
  <router-link to="/about/abc">访问/about/abc</router-link>
  <br>
  <router-link to="/about/abc/">访问/about/abc/</router-link>
  <br>
  <router-link to="/about">访问/about</router-link>
  <br>
  <router-link to="/about/">访问/about/</router-link>
  <br>
  <router-link to="/about/abc/def">访问/about/abc/def</router-link>
  <hr>
  <router-link to="/about2/123">访问/about2/123</router-link>
  <br>
  <router-link to="/about2/123/">访问/about2/123/</router-link>
  <br>
  <router-link to="/about2/abc">访问/about2/abc</router-link>
  <hr>
  <router-link to="/about3">访问/about3</router-link>
  <br>
  <router-link to="/about3/123">访问/about3/123</router-link>
  <br>
  <router-link to="/about3/123/456">访问/about3/123/456</router-link>
  <hr>
  <router-link to="/about4/123">访问/about4/123</router-link>
  <br>
  <router-link to="/about4/123/456">访问/about4/123/456</router-link>
  <br>
  <router-link to="/about4">访问/about4</router-link>
  <hr>
  <router-link to="/about5">访问/about5</router-link>
  <br>
  <router-link to="/about5/123">访问/about5/123</router-link>
  <br>
  <router-link to="/about5/123/456">访问/about5/123/456</router-link>
  <hr>
  <router-link to="/about6/123">访问/about6/123</router-link>
  <br>
  <router-link to="/about6/123/456">访问/about6/123/456</router-link>
  <br>
  <router-link to="/about6">访问/about6</router-link>
  <br>
  <router-link to="/about6/123/abc">访问/about6/123/abc</router-link>
  <hr>
  <router-link to="/aaa">访问/aaa</router-link>
</template>

<script>
export default {
  name: 'App'
}
</script>
