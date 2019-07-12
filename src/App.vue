<template>
  <div id="app">
    <!--顶部区域-->
    <mt-header fixed title="商城">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
		</mt-header>

	<!-- main区域 -->
    <transition>
			<router-view/>
		</transition>

    <!--底部导航区域-->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="set-mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="set-mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="set-mui-tab-item" to="shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="set-mui-tab-item" to="/search">
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


<style scoped>
html, body{
	font-size: 10px;
}

.mint-header.is-fixed{
	z-index: 100;
}

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

.mui-bar-tab .set-mui-tab-item.mui-active {
    color: #007aff;
}

.mui-bar-tab .set-mui-tab-item {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}

.mui-bar-tab .set-mui-tab-item .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .set-mui-tab-item .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}

</style>
