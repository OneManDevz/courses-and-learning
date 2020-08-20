<template>
	<ul>
		<li v-for="song in songs" :key="song.id">
			{{ song }}
		</li>
	</ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
			songs: [
				{ id: 1, artist: 'Great Artist', name: 'Great Song' },
				{ id: 2, artist: 'Some Artist', name: 'Some Song' },
				{ id: 3, artist: 'Breeee', name: 'Kekeeee' }
			]
		}
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
