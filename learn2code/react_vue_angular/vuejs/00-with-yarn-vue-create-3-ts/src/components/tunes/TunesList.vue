<template>
	<ul>
		<li v-for="song in songs" :key="song.id">
			{{ song }}
		</li>
	</ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	props: {
		searchedSong: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			songs: [
				{ id: 1, artist: 'Great Artist', name: 'Great Song' },
				{ id: 2, artist: 'Some Artist', name: 'Some Song' },
				{ id: 3, artist: 'Breeee', name: 'Kekeeee' }
			]
		}
	},
	mounted() {
		this.$root.$on('get-songs', (song: string) => {
			this.songs.push({
				id: Math.max(...this.songs.map(s => s.id)) + 1,
				artist: song,
				name: song
			})
		})
	}
})
</script>

<style scoped lang="scss">
.tunes-list {
	margin: 3em 0 0;
	padding-left: 0;
	list-style: none;
}

li:last-child {
	.tunes-song {
		margin-bottom: 1.25em;
	}
}

// animation
.fade-enter-active {
	transition: all 0.25s ease;
}

.fade-enter {
	transform: scale(0.85);
}
</style>
