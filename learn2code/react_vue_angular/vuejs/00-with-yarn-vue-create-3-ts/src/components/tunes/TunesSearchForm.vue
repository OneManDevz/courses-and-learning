<template>
	<form @submit.prevent="getMusic()">
		<input v-model="query" type="text" />
	</form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			query: '' as string
		}
	},
	methods: {
		getMusic(): void {
			// this.songs.push({
			// 	id: Math.max(...this.songs.map(s => s.id)) + 1,
			// 	artist: this.query,
			// 	name: this.query
			// })
		}
	}
})
</script>

<style scoped lang="scss">
input {
	width: 100%;
	display: block;

	padding: {
		top: 0.5em;
		bottom: 0.5em;
		left: 2.95em;
		right: 0.75em;
	}

	color: #333;
	font-size: 1.5em;
	font-weight: 700;

	border: none;
	border-radius: 0.5em;
	background: white;
	box-sizing: border-box;

	outline: none;
	appearance: none;

	background: {
		image: url('../../assets/search.svg');
		repeat: no-repeat;
		position-y: 50%;
		position-x: 1em;
		color: white;
		size: 1em;
	}
}

@media screen and (max-width: 520px) {
	input {
		font-size: 1.15em;
	}
}
</style>
