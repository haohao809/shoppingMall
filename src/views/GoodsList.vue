<template>
	<div id="">
		<nav-header></nav-header>
		<nav-bread>
			<span>Goods</span>
		</nav-bread>
		<!-- filter -->
		<div class="container">
		  <div class="filter-nav">
            <span class="sortby">Sort by:</span>
            <a href="javascript:void(0)" class="default cur">Default</a>
            <a href="javascript:void(0)" class="price" v-bind:class="{'sort-up':sortFlag}" @click="sortGoods()">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
            <a href="javascript:void(0)" class="filterby stopPop" @click.stop="showFilterPop">Filter by</a>
          </div>
			<div class="accessory-result">
				<div class="filter stopPop" id="filter" :bind="{'filterby-show': filterBy}">
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
	         </div>
         </div>
		<div id="">
			
		</div>
		<div class="md-overlay hidden" v-show="overLayFlag" @click.stop="closePop">
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
                priceChecked: 'all',
                filterBy: false,
                overLayFlag: false
			}
		},
		components:{
			NavFooter,
			NavHeader,
			NavBread
		},
		methods:{
			showFilterPop(){
				this.filterBy = true;
				this.overLayFlag = false;
			},
			sortGoods(){
				
			},
			closePop(){
			},
			
			
			
			
		}
	}
</script>

<style>
</style>