<template>
	<div
		class="three-cols"
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
		<div class="three-cols-container">
			<div class="col">
				<p
					contenteditable="true"
					@blur="params.text.p1 = $event.target.innerText"
					class="editable-content"
				>{{ params.text.p1 }}</p>
			</div>
			<div class="col">
				<p
					contenteditable="true"
					@blur="params.text.p2 = $event.target.innerText"
					class="editable-content"
				>{{ params.text.p2 }}</p>
			</div>
			<div class="col">
				<p
					contenteditable="true"
					@blur="params.text.p3 = $event.target.innerText"
					class="editable-content"
				>{{ params.text.p3 }}</p>
			</div>
		</div>
	</div>
</template>

<script>

import Styler from '@/components/Styler.vue';
// import store from '@/store/store.js';

export default {
	name: 'ThreeCols',
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

.three-cols {
		position: relative;
		margin: 2em;
}
.three-cols-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
}
.col {
		display: flex;
		margin: 1em;
}
.editable-content {

}

</style>
