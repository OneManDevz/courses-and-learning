<template>
	<div id="app">
		<header>
			<the-navigation />
		</header>
		<main class="content">
			<router-view />
		</main>
	</div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue'

export default {
	components: {
		TheNavigation
	}
}
</script>

<style src="@/assets/scss/main.scss" lang="scss"></style>
