<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/vuelogo.png" />
		<h1>
			{{ title }}
		</h1>

		<p>
			Hot singles in your area. <br />
			Hotter vue in your
			<a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"
				>documentation</a
			>.
		</p>
	</div>
</template>

<script lang="ts">
export default {
	data() {
		return {
			title: 'Brekeke Vue'
		}
	}
}
</script>

<style lang="scss" scoped>
img {
	width: 45%;
}
h1 {
	margin-top: 0;
}
</style>
