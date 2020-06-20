Vue.config.devtools = true;

var eventBus = new Vue();

Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
        <div class="product">

            <div class="product-image">
                <img :src="image" />
            </div>

            <div class="product-info">
                <h1>{{ title }}</h1>
                <p>{{ desc }}</p>
                
                <product-info-tabs :details="details" :shipping="shipping" />

                <span>{{ sale }}</span>
                <p v-if="inStock > 10">In stock</p>
                <p v-else-if="inStock <= 10 && inStock">Almost sold out!</p>
                <p v-else :class=" { soldOut: !inStock}">Sold out</p>

                <div v-for="(variant, index) in variants" 
                    :key="variant.variantId"
                    class="color-box"
                    :style="{ backgroundColor: variant.variantColor }"
                    @mouseover="updateProductColor(index)">
                </div>
                
                <button @click="addToCart" 
                    :disabled="!inStock"
                    :class="{ disabledButton: !inStock}"
                    >
                    Add to cart</button>

                <button @click="removeFromCart">Remove from cart</button>

            </div>

            <product-tabs :reviews="reviews"></product-tabs>

        </div>
    `,
    data() {
        return {
            brand: 'Vue Mastery',
            name: 'Socks',
            desc: 'Foking loving socks',
            onSale: true,
            details: [
                "80% cotton",
                "20% polyester",
                "LGBT unfriendly"
            ],
            selectedVariant: 0,
            variants: [
                {
                    variantId: 2234,
                    variantColor: "Green",
                    variantImage: './assets/vmSocks-green-onWhite.jpg',
                    variantQuantity: 110
                },
                {
                    variantId: 2234,
                    variantColor: "Blue",
                    variantImage: './assets/vmSocks-blue-onWhite.jpg',
                    variantQuantity: 0
                }
            ],
            sizes: [
                38, 40, 42, 44, 46, 48
            ],
            reviews: []
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        updateProductColor(index) {
            this.selectedVariant = index
        },
        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
        }
    },
    computed: {
        title() {
            return `${this.brand} - ${this.name}`
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale() {
            if(this.onSale){
                return `${this.brand} - ${this.name} are on sale!`
            } else {
                return `${this.brand} - ${this.name} are not on sale!`
            }
        },
        shipping() {
            if(this.premium) {
                return "Free"
            }
            return "3.99 €"
        }
    },
    mounted() {
        eventBus.$on('review-submitted', productReview => {
            this.reviews.push(productReview)
        })
    }
})

Vue.component('product-review', {
    template: `
        <form class="review-form" @submit.prevent="onSubmit">

        <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul style="list-style: none; color: red">
                <li v-for="error in errors">{{ error }}</li>
            </ul>
        </p>

            <p>
                <label for="name">Name:</label>
                <input id="name" v-model="name">
            </p>

            <p>
                <label for="review">Review:</label>
                <textarea id="review" v-model="review" ></textarea
            </p>

            <p>
                <label for="rating">Rating:</label>
                <select id="rating" v-model.number="rating">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </p>

            <p>Would you recommend this product?</p>
                <label>Yes</label>
                <input 
                    type="radio"
                    id="yes"
                    name="recommend" 
                    value="Yes"
                    checked
                    v-model="recommend"
                >

                <label>No</label>
                <input 
                    type="radio"
                    id="no" 
                    name="recommend" 
                    value="No"
                    v-model="recommend"
                >
            <p>
                <input type="submit" value="Submit">
            </p>
        </form>
    `,
    data() {
        return {
            name: null,
            review: null,
            rating: null,
            recommend: null,
            errors: []
        }
    },
    methods: {
        onSubmit() {
            this.errors = [];
            if(this.name && this.review && this.rating && this.recommend){
                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating,
                    recommend: this.recommend
                }
                eventBus.$emit('review-submitted', productReview)
                this.name = null;
                this.review = null;
                this.rating = null;
                this.recommend = null;
            } else {
                if(!this.name) this.errors.push('Name required.')
                if(!this.review) this.errors.push('Review required.')
                if(!this.rating) this.errors.push('Rating required.')
                if(!this.recommend) this.errors.push('Recommendation required.')
            }
        }
    }
})

Vue.component('product-tabs', {
    props: {
        reviews: {
            type: Array,
            required: false
        }
    },
    template: `
        <div>
            <ul>
                <span
                    class="tab"
                    :class="{ activeTab: selectedTab === tab}"
                    v-for="(tab, index) in tabs"
                    :key="tab"
                    @click="selectedTab = tab"
                >{{ tab }}</span>
            </ul>

            <div v-show="selectedTab === 'Reviews'">
                <p v-if="!reviews.length">There are no reviews yet.</p>
                <ul v-else>
                    <li v-for="(review, index) in reviews" :key="index">
                        <p>{{ review.name }}</p>
                        <p>{{ review.rating }}</p>
                        <p>{{ review.review }}</p>
                        <p>{{ review.recommend }}</p>
                    </li>
                </ul>
            </div>

            <div v-show="selectedTab === 'Make a Review'">
                <product-review></product-review>
            </div>
        </div>
    `,
    data() {
        return {
            tabs: ['Reviews', 'Make a Review'],
            selectedTab: 'Reviews'
        }
    }
})

Vue.component('product-info-tabs', {
    props: {
        shipping: {
            required: true
        },
        details: {
            type: Array,
            required: true
        }
    },
    template: `
      <div>
      
        <ul>
          <span class="tab" 
                :class="{ activeTab: selectedTab === tab }"
                v-for="(tab, index) in tabs"
                @click="selectedTab = tab"
                :key="tab"
          >{{ tab }}</span>
        </ul>

        <div v-show="selectedTab === 'Shipping'">
        <p>Shipping: {{ shipping }}</p>
        </div>

        <div v-show="selectedTab === 'Details'">
          <ul>
            <li v-for="detail in details">{{ detail }}</li>
          </ul>
        </div>
    
      </div>
    `,
    data() {
        return {
            tabs: ['Shipping', 'Details'],
            selectedTab: 'Details'
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart: []
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        removeItem(id) {
            for(var i = this.cart.length - 1; i >= 0; i--) {
                if(this.cart[i] === id) {
                    this.cart.splice(i, 1)
                }
            }
        }
    }
})