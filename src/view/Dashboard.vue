<script>
import axios from 'axios';
import ButtonComponent from '../components/ButtonComponent.vue';
import CategoryComponent from '../components/CategoryComponent.vue';
import PromotionComponent from '../components/PromotionComponent.vue';
import MenuComponent from '../components/MenuComponent.vue';
import ProductComponent from '../components/ProductComponent.vue';
import PanelComponent from '../components/PanelComponent.vue';
import HeaderSectionComponent from '../components/HeaderSectionComponent.vue';
export default{
  name: 'App',
  components:{
    ButtonComponent,
    CategoryComponent,
    PromotionComponent,
    MenuComponent,
    ProductComponent,
    PanelComponent,
    HeaderSectionComponent
  },
  data() {
    return {
      Categories: [],
      Promotions: [],
      Groups: [],
      Products: [],
      title: {
        name1: 'Featured Categories',
        name2: 'Popular Products'
      },
      API_BASE_URL: "http://localhost:3000",
    }
},
  methods:{
    fetchCategories() { 
      axios.get(this.API_BASE_URL+'/api/categories')
      .then(response => {
        // Access the data
        // console.log(response.data); 
        this.Categories = response.data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
  });
         },
    fetchPromotions() {
      axios.get(this.API_BASE_URL+'/api/promotions')
      .then(response => {
        // Access the data
        // console.log(response.data); 
        this.Promotions = response.data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
  });
          
         },
    fetchGroups() {
      axios.get(this.API_BASE_URL+'/api/groups')
      .then(response => {
        // Access the data
        // console.log(response.data); 
        this.Groups = response.data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
  });
          
         },
    fetchProducts() {
      axios.get(this.API_BASE_URL+'/api/products')
      .then(response => {
        // Access the data
        console.log(response.data); 
        this.Products = response.data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
  });
          
         },
    getImageUrl(imageString) {
      try {
        const images = JSON.parse(imageString);
        return images.length ? `${this.API_BASE_URL}/${images[0].replace(/\\\\/g, '/')}` : null;
      } catch (e) {
        console.error('Failed to parse image string:', imageString);
        return null;
      }
    }
  },

  mounted () {
          // Mounted life cycle - It will be executed every time
          // this component is loaded
          this.fetchCategories()
          this.fetchPromotions()
          this.fetchGroups()
          this.fetchProducts()
          
          
     }
}
</script>

<template>
  <div class="header-section">
    <HeaderSectionComponent></HeaderSectionComponent>
  </div>
  <div class="panel">
    <PanelComponent></PanelComponent>
  </div>
  <div class="menu">
      <MenuComponent :title="title.name1" :groups="Groups"></MenuComponent>
  </div>
  <div class="category">
    <template v-for="category in Categories">
      <CategoryComponent :name="category.name" :amount="category.productCount" :color="category.color" :image="this.API_BASE_URL+'/'+category.image"></CategoryComponent>
    </template>
  </div>
  <div class="promotion">
    <template v-for="promotion in Promotions">
      <PromotionComponent :title="promotion.title" :color="promotion.color" :btnColor="promotion.buttonColor" :image="this.API_BASE_URL+'/'+promotion.image"></PromotionComponent>
    </template>
  </div>
  <div class="menu">
      <MenuComponent :title="title.name2" :groups="Groups"></MenuComponent>
  </div>
  <div class="product">
    <template v-for="product in Products">
      <ProductComponent
       :name="product.name" 
       :rating="product.rating" 
       :size="product.size" 
       :price="product.price" 
       :promotionAsPercentage="product.promotionAsPercentage" 
       :categoryId="product.categoryId" 
       :instock="product.instock" 
       :countSold="product.countSold" 
       :group="product.group" 
       :image="getImageUrl(product.image)">
      </ProductComponent>
    </template>
  </div>
</template>

<style scoped>
.category{
  padding-top: 20px;
  margin: auto;
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  /* overflow-x: auto; */
}
.promotion{
  padding-top: 40px;
  margin: auto;
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
}
.menu{
  margin-top: 20px;
  width: 100vw;
}
.product{
  padding: 20px;
  margin: auto;
  width: 90%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
}
.panel{
  margin: auto;
  margin-top: 20px;
}
</style>
