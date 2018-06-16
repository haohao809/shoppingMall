<template>
	<header class="header">
		<div class="navbar">
			<div class="navbar-left-container">
				<a href='/'>
					<img class='navbar-brand-container' src="/static/logo.png">
				</a>
			</div>
			<div class="navbar-right-container" style="display: flex;">
				<div class="nav-menu-container">
					<span class="navbar-link" v-text="nickName" v-if="nickName"></span>
					<a href="javascript: ;" class="navbar-link">Login</a>
					<a href="javascript: ;" class="navbar-link">Logut</a>
					<div class="navbar-cart-container">
	                  <a class="navbar-link navbar-cart-link" href="/#/cart">
	                    <svg class="navbar-cart-logo">
	                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cart"></use>
	                    </svg>
	                  </a>						
					</div>
				</div>
			</div>
		</div>
		<div class="md-modal">
			<div class="md-modal-inner">
				<div class="md-top">
					<div class="md-title">
						Login in
					</div>
					<button class="md-close">Close</button>
				</div>
				<div class="md-content">
					<div class="confirm-tips">
						<ul>
							<li class="regi_form_input">
								<i class="icon IconPeople"></i>
								<input type="text">
							</li> 
							<li class="regi_form_input">
								<i class="icon IconPwd"></i>
								<input type="password">
							</li> 							
						</ul>
					</div>
					<div class="login-wrap">
						<a href="" class="bin-login">登 录</a>
					</div>
				</div>
			</div>
		</div>
		<div class="md-overlay" v-if="loginModalFlag"></div>
	</header>
</template>

<script>
	import './../assets/css/login.css'
	import axios from 'axios'
	export default{
		data(){
			loginModalFlag:false
		}
	}
</script>

<style>
</style>