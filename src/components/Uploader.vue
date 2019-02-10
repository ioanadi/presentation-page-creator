<template>
	<div class="uploader">
		<img :src="img" />
		<input
			type="file"
			class="uploader-input"
			ref="uploader"
			@change="updateImage"
		>
		<div v-if="!img" class="icon">
			<font-awesome-icon icon="image" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'Uploader',
	props: ['img'],
	data: () => ({

	}),
	methods: {
		updateImage() {
			const file = this.$refs.uploader.files[0];
			if (!file) return;
			const imageURL = URL.createObjectURL(file);
			this.src = imageURL;
			this.$emit('update-imgSrc', imageURL);
		},
	},
};
</script>

<style>


.uploader {
	position: relative;
	width: 100%;
	cursor: pointer;
	outline: none;
}
.uploader-input {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	opacity: 0;
	z-index: 100;
	cursor: pointer;
}
img {
	width: 100%;
	display: block;
	max-height: 35em;
}
.icon {
	display: flex;
	justify-content: center;
}


</style>
