<template>
	<div
		class="two-cols-img"
		v-bind:style='{
			"background-color": params.backgroundColor,
			"color": params.color,
			"font-family": params.font
		}'
	>
		<Styler
			v-if="showStyler"
			:colorList="colorList ? colorList : ''"
			:fontList="fontList ? fontList: ''"
			v-on:update-styled-element="updateElementStyle"
			v-on:close-styler="showStyler = 0"
			v-on:remove-component='$emit("remove-component")'
		></Styler>
		<h5
			class="col"
			contenteditable="true"
			@blur='params.text.h5 = $event.target.innerText'
		>{{params.text.h5}}</h5>
		<h5
			class="col"
			contenteditable="true"
			@blur='params.text.h5bis = $event.target.innerText'
		>{{params.text.h5bis}}</h5>

		<div class="col">

			<uploader
				:img="params.other.img"
				v-on:update-imgSrc="updateImg"
			></uploader>

		</div>

	</div>
</template>

<script>

import Styler from '@/components/Styler.vue';
import Uploader from '@/components/Uploader.vue';


export default {
	name: 'TwoColsWithImg',
	components: {
		'Styler': Styler,
		Uploader,
	},
	props: ['stylerVisible', 'colorList', 'fontList', 'params'],
	data() {
		return {
			showStyler: this.stylerVisible ? this.stylerVisible : null,
		};
	},
	watch: {
		stylerVisible: function(val) {
			this.showStyler = val;
		},
		params: {
			handler: function(val) {
				this.$emit('update-params', val);
			},
			deep: true,
		},
	},
	beforeMount() {
	},
	methods: {
		updateElementStyle(styles) {
			if (styles.backgroundColor) {
				this.params.backgroundColor = styles.backgroundColor;
			}
			if (styles.color) this.params.color = styles.color;
			if (styles.font) this.params.font = styles.font;
		},
		updateImg(imgSrc) {
			this.params.other.img = imgSrc;
		},
	},
};

</script>

<style scoped>

.two-cols-img {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin: 2em;
		position: relative;
		border-radius: 25px;
		position: relative;
}
.col {
		display: flex;
		margin: 1em;
		flex-basis: 30%;
}


</style>
