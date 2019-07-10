<template>
  <div id="app">
    <!--顶部区域-->
    <mt-header fixed title="商城"></mt-header>

	<!-- main区域 -->
    <transition>
			<router-view/>
		</transition>

    <!--底部导航区域-->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {

};
</script>


<style>

#app{
	/* padding-top: 2.5rem;
	padding-bottom: 4.25rem; */
	padding: 40px 0px 50px;
	overflow-x: hidden;
}

.v-enter {
	opacity: 0;
	transform: translateX(100%)
}

.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position : absolute;
}

.v-enter-active,
.v-leave-active {
	transition: all 0.5s ease;
}
</style>
