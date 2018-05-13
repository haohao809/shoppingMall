<template>
	<div id="">
		<nav-header></nav-header>
		<nav-bread>
			<span>Goods</span>
		</nav-bread>
		<!-- filter -->
		<div class="filter stopPop" id="filter">
			<dl class="filter-price">
				<dt>Price:</dt>
				<dd><a href="javascript: void(0)" :class="{'cur': priceChecked === 'all'}" @click="priceChecked='all'">All</a></dd>
				<dd v-for="(price,index) in priceFilter">
					<a href="javascript:void(0)" @click="priceChecked=index":class="{cur:priceChecked===index}">{{price.startPrice}}-{{price.endPrice}}</a>
				</dd>
			</dl>
		</div>
        <div class="accessory-list-wrap">
              <div class="accessory-list col-4">
                <ul>
                  <li v-for="item in goodsList">
                    <div class="pic">
                      <a href="#"><img v-lazy="'static/'+item.productImage" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">{{item.productName}}</div>
                      <div class="price">{{item.salePrice | currency('$')}}</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m" @click="addCart(item.productId)">加入购物车</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
         </div>
		<div id="">
			
		</div>
		<nav-footer></nav-footer>
	</div>
</template>

<script>
	import './../assets/css/base.css'
	import './../assets/css/product.css'
	import NavHeader from '@/components/NavHeader.vue'
	import NavFooter from '@/components/NavFooter.vue'
	import NavBread from '@/components/NavBread.vue'
	export default{
		data() {
			return {
				goodsList:[],
				priceFilter:[
                  {
                      startPrice:'0.00',
                      endPrice:'100.00'
                  },
                  {
                    startPrice:'100.00',
                    endPrice:'500.00'
                  },
                  {
                    startPrice:'500.00',
                    endPrice:'1000.00'
                  },
                  {
                    startPrice:'1000.00',
                    endPrice:'5000.00'
                  }
                ],
                priceChecked: 'all'
			}
		},
		components:{
			NavFooter,
			NavHeader,
			NavBread
		}
	}
</script>

<style>
</style>