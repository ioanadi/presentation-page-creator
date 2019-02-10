<template>
	<div
		class="simple-header"
		v-bind:style='{
			"background-color": params.backgroundColor,
			"color": params.color,
			"font-family": params.font
		}'
	>
		<Styler
			v-if="showStyler"
			:colorList="colorList ? colorList: ''"
			:fontList="fontList ? fontList: ''"
			v-on:update-styled-element="updateElementStyle"
			v-on:close-styler="showStyler = 0"
			v-on:remove-component='$emit("remove-component")'
		></Styler>
		<h1
			contenteditable="true"
			@blur="params.text.h2 = $event.target.innerText"
			class="editable-content"
		>{{params.text.h2}}</h1>
	</div>
</template>

<script>

import Styler from '@/components/Styler.vue';
// import store from '@/store/store.js';

export default {
	name: 'SimpleHeader',
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

.simple-header {
	padding: 2em;
	position: relative;
}


</style>
