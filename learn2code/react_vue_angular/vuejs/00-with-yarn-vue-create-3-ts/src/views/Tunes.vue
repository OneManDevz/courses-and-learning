<template>
	<div>
		<h1>Tunes</h1>
		<tunes-search-form />
		<tunes-list />
	</div>
</template>

<script lang="ts">
import TunesSearchForm from '@/components/tunes/TunesSearchForm.vue'
import TunesList from '@/components/tunes/TunesList.vue'

export default {
	components: {
		TunesSearchForm,
		TunesList
	}
}
</script>

<style lang="scss" scoped></style>
