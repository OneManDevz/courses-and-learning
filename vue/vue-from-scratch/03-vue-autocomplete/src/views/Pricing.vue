<template>
    <div class="flex justify-center">
      <div class="w-1/2 bg-blue-900 rounded-lg shadow px-6 py-12 flex flex-col items-center">
        <div class="bg-gray-400 rounded-full flex justify-aroung p-1">
            <button 
                @click="currentFrequency = frequency" 
                v-for="(price, frequency) in plans[0].pricing" v-bind:key="frequency"
                class="rounded-full text-xs font-bold px-6 py-1 uppercase focus:outline-none"
                :class="currentFrequency == frequency ? 'bg-blue-600 text-gray-200' : '' "
                >{{ frequency }}
            </button>
        </div>

        <div class="flex w-full pt-8">
            <div v-for="plan in plans" v-bind:key="plan.name" class="text-white w-1/2">
                <h1 class="text-2xl font-bold">{{ plan.name}}</h1>
                <ul class="pt-4">
                    <li v-for="benefit in plan.benefits[currentFrequency]" v-bind:key="benefit">{{ benefit }}</li>
                </ul>

                <div class="flex justify-center pt-8">
                    <div class="text-4xl font-bold">{{ getPrice(plan.pricing[currentFrequency].price)}}</div>
                    <div class="pl-1 pt-2 text-gray-300">{{ plan.pricing[currentFrequency].label}}</div>
                </div>
                
            </div>
        </div>

        <div class="pt-4 text-center text-gray-400 text-sm font-bold">
            <a href="#" @click.prevent="currency = 'usd'">USD</a> | <a href="#" @click.prevent="currency = 'eur'">EUR</a>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                currentFrequency: 'monthly',
                currency: 'usd',
                plans: [
                    {
                        id: 0,
                        name: 'Starter',
                        pricing: {
                            monthly: { price: 99, label: '/mo' },
                            yearly: { price: 499, label: '/yo' },
                            lifetime: { price: 1200, label: '' },
                        },
                        benefits: {
                            monthly: ["Benefit 1","Benefit 2","Benefit 3",],
                            yearly: ["Benefit 1","Benefit 2","Benefit 3","Benefit 4",],
                            lifetime: ["Benefit 1","Benefit 2","Benefit 3","Benefit 4","Benefit 5"]
                        }
                    },
                    {
                        id: 1,
                        name: 'Pro',
                        pricing: {
                            monthly: { price: 199, label: '/mo' },
                            yearly: { price: 999, label: '/yo' },
                            lifetime: { price: 2200, label: '' },
                        },
                        benefits: {
                            monthly: ["Benefit 1","Benefit 2","Benefit 3",],
                            yearly: ["Benefit 1","Benefit 2","Benefit 3","Benefit 4",],
                            lifetime: ["Benefit 1","Benefit 2","Benefit 3","Benefit 4","Benefit 5"]
                        }
                    },
                    {
                        id: 3,
                        name: 'Pro+',
                        pricing: {
                            monthly: { price: 499, label: '/mo' },
                            yearly: { price: 1999, label: '/yo' },
                            lifetime: { price: 3200, label: '' },
                        },
                        benefits: {
                            monthly: ["Benefit 1","Benefit 2","Benefit 3",],
                            yearly: ["Benefit 1","Benefit 2","Benefit 3","Benefit 4",],
                            lifetime: ["Benefit 1","Benefit 2","Benefit 3","Benefit 4","Benefit 5"]
                        }
                    }
                ]
            }
        },
        methods: {
            getPrice(price){
                return this['currency'+ this.currency.toUpperCase()](price);
            },
            currencyUSD(price){
                return '$ ' + price
            },
            currencyEUR(price){
                return Math.ceil(price *0.85) + ' €'
            }
        }
    }
</script>