<template>
	<div id="">
		<nav-header></nav-header>
		<nav-bread>
			<span>Goods</span>
		</nav-bread>
		<!-- filter -->
  <div class="accessory-result-page accessory-page">
		<div class="container">
		  <div class="filter-nav">
            <span class="sortby">Sort by:</span>
            <a href="javascript:void(0)" class="default cur">Default</a>
            <a href="javascript:void(0)" class="price" v-bind:class="{'sort-up':sortFlag}" @click="sortGoods()">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
            <a href="javascript:void(0)" class="filterby stopPop" @click.stop="showFilterPop">Filter by</a>
          </div>
			<div class="accessory-result">
				<div class="filter stopPop" id="filter" :class="{'filterby-show': filterBy}">
					<dl class="filter-price">
						<dt>Price:</dt>
						<dd><a href="javascript: void(0)" :class="{'cur': priceChecked === 'all'}" @click="priceChecked='all'">All</a></dd>
						<dd v-for="(price,index) in priceFilter">
							<a href="javascript:void(0)" @click="setPriceFilter(index)":class="{cur:priceChecked===index}">{{price.startPrice}}-{{price.endPrice}}</a>
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
		                      <div class="price">{{item.salePrice }}</div>
		                      <div class="btn-area">
		                        <a href="javascript:;" class="btn btn--m" @click="addCart(item.productId)">加入购物车</a>
		                      </div>
		                    </div>
		                  </li>
		                </ul>		                
		              </div>
		              <div class="view-more-normal"
                   			v-infinite-scroll="loadMore"
                   			infinite-scroll-disabled="busy"
                   			infinite-scroll-distance="20">
                			<img src="./../assets/loading-spinning-bubbles.svg" v-show="loading">
              		  </div>
		         </div>
	         </div>
         </div>
      </div>
	<modal :mdShow="mdShow" @close="closeModal">
		<p slot="message">
             	请先登录,否则无法加入到购物车中!			
		</p>		
		<p slot="btnGroup">
			<a class="btn btn--m" href="javascript:;" @click="mdShow = false">关闭</a>			
		</p>
	</modal>
		<div class="md-overlay" v-show="overLayFlag" @click.stop="closePop">
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
	import Modal from './../components/Modal'
	import axios from 'axios'
	export default{
		data() {
			return {
				goodsList:[],
                mdShow:false,
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
                overLayFlag: false,
                sortFlag:true,
                page:1,
                pageSize: 8,
                busy: true,
                loading:false
			}
		},
		mounted(){
			this.getGoodList();
		},
		components:{
			NavFooter,
			NavHeader,
			NavBread,
			Modal
		},
		methods:{
			showFilterPop(){
				this.filterBy = true;
				this.overLayFlag = true;
			},
			sortGoods(){
				this.sortFlag = !this.sortFlag;
				this.page = 1;
				this.getGoodList();
				
			},
			closePop(){
				this.overLayFlag = false;
				this.filterBy = false;
			},   
			setPriceFilter(index){
				this.priceChecked = index;
				this.overLayFlag = false;
				this.filterBy = false;
				this.page = 1;
				this.getGoodList();
			},
			getGoodList(flag){
				var param = {
					page:this.page,
					pageSize:this.pageSize,
					sort: this.sortFlag ? 1:-1,
					priceLevel:this.priceChecked
				}
				this.loading = true;
				axios.get("/goods/list",{
					params:param
				}).then((response) =>{
				let res = response.data;
				this.loading = false;
				console.log(res)
				if(res.status === "0") {
					if(flag){
						this.goodsList = this.goodsList.concat(res.result.list);
					
						if(res.result.count === 0){
							this.busy = true;
							this.loading = false;
						}else{
							this.busy = false;
						}
					}else{
						this.goodsList = res.result.list;
						this.busy = false;
					}
				}else{
					this.goodsList = [];
				}
			})
			},
			loadMore(){
				this.loading = true;
				this.busy = true;
				setTimeout(() => {
					this.page++;
					this.getGoodList(true);
				},500)
			},
			addCart(productId){
				axios.post("/goods/addCart",{
					productId:productId
				}).then((res) => {
					 var res = res.data;
					 if(res.status == 0){
					 	alert('添加成功')
					 }else{
					 	this.mdShow = true;
					 }
				})
			}
			
			
			
		}
	}
</script>

<style>
</style>