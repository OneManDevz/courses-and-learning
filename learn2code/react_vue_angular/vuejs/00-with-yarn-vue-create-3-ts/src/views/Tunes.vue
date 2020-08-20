<template>
	<div>
		<h1>Tunes</h1>
		<tunes-search-form @get-songs="searchQuery = $event" />
		<tunes-list :searchedSong="searchQuery" />
	</div>
</template>

<script lang="ts">
import TunesSearchForm from '@/components/tunes/TunesSearchForm.vue'
import TunesList from '@/components/tunes/TunesList.vue'

export default {
	components: {
		TunesSearchForm,
		TunesList
	},
	data() {
		return {
			searchQuery: '' as string
		}
	}
}
</script>

<style lang="scss" scoped></style>
