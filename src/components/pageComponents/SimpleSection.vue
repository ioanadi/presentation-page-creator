<template>
	<div
		class="simple-section"
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
		<h4
			contenteditable="true"
			@blur='params.text.h4 = $event.target.innerText'
		>{{params.text.h4}}</h4>
	</div>
</template>

<script>

import Styler from '@/components/Styler.vue';

export default {
	name: 'SimpleSection',
	components: {
		'Styler': Styler,
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

	},
};

</script>

<style scoped>

.simple-section {
	margin: 2em;
	padding: 1em;
	position: relative;
	border-radius: 25px;
}
.image {
	height: 20em;
	background-repeat: no-repeat;
	background-size: cover;
	width: 15em;
}

</style>
