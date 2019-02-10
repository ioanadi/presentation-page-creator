<template>
	<div class="hello">
		<h1>Welcome to your Presentation Page Creator!</h1>
		<h3 class="subtitle">
			Play with widgets like you do with <span v-html="textToColorfulChars('legos')"></span>

			!
			<!-- <div class="lego-image-container">
				<div class="lego-image"></div>
			</div> -->
		</h3>
		<div v-on:click="showInstructions=!showInstructions" class="show-instructions-button">
			<p >How does it work?</p>
		</div>
		<div v-if="showInstructions" class="instructions-container">
			<p style='color: red'>1. Choose a color combination <br>(or make you own combinations by clicking 'Create color combination'!)</p>
			<p style='color: darkblue; font-style: italic;'>2. Press 'Go!' and you'll be redirected to the preview page.</p>
			<p style='color: turquoise; font-weight: bold;'>3. Drag and drop widgets in you page (and sort them)</p>
			<p style='color: pink'>4. Add texts or images to you widgets.</p>
			<p style='color: orange; text-decoration: underline'>5. Click on each widget and customize it!</p>
		</div>
		<div>
			<h4 class="theme-container-title">Choose a color combination and let's get started!</h4>
				<div class="colors-column">
					<div
						class="colors-row-container"
						v-for="(colorList,index) in colorLists"
						v-bind:key='index + "allcmp"'
					>
						<div

							v-bind:class='{ selected: isColorListSelected(colorList) || hoverSelection==index}'
							@mouseover="hoverSelection=index"
							@mouseleave="hoverSelection=-1"
							class="colors-row"
						>
							<div
								v-for="(color,colorIndex) in colorList"
								v-bind:key='colorIndex'
								v-on:click='selectedColorList=colorList'
							>
								<div
									v-bind:style='{ "background-color": color }'
									class="shade"
								></div>
							</div>
						</div>
					</div>
				</div>
		</div>
		<div class="getstarted" v-on:click='goToCreatePage()'>
		 <p>Go!</p>	
		</div>
	</div>

</template>

<script>

import colorLists from '@/hardcoded/color-lists.js';
import fontList from '@/hardcoded/font-list.js';
import commonMethods from '@/utils/commonMethods.js';

export default {
	name: 'Home',

	data() {
		return {
			colorLists: colorLists,
			selectedColorList: null,
			fontList: fontList,
			showInstructions: false,
			picked: null,
			hoverSelection: false,

		};
	},
	methods: {
		goToCreatePage() {
			this.$router.push({
				name: 'CreatePage',
				params: {
					colorList: this.selectedColorList,
					fontList: this.fontList,
				},
			});
		},
		isColorListSelected(colorList) {
			return this.selectedColorList == colorList;
		},
		textToColorfulChars(str) {
			return commonMethods.textToColorfulChars(str);
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
	margin: 0.5rem;
}

.hello {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.subtitle {
	color: lightgrey;
}
.show-instructions-button {
	padding: 0.5rem;
	cursor: pointer;
}
.show-instructions-button > p {
	margin: 0;
	text-decoration: underline;
	color: teal;
}
.instructions-container {
	background-color: white;
	padding: 1rem;
	border-radius: 5px;
	box-shadow: 2px 2px 5px  lightgrey;
}
.instructions-container > p {
	color: white;
}
/* .lego-image-container {
	display: flex;
	width: 7rem;
}
.lego-image {
	background-image: url("../assets/lego.jpg");
	width: 6rem;
	height: 4rem;
	background-size: contain;
	background-repeat: no-repeat;
} */


.general-row {
	display: flex;
	width: 100%;
	flex-direction: row;
	justify-content: space-around;
}
.colors-column {
	display: flex;
	/* flex-direction: column; */
	align-items: center;
	flex-wrap: wrap;
	justify-content: center;
}
.colors-row-container {
	width: 165px;
	height: 10rem;
	margin: 0.5rem;
}
.colors-row {
	display: flex;
	flex-direction: row;
	width: 120px;
	flex-wrap: wrap;
	margin: 0.5em;
	padding: 0.5rem;
	border-radius: 25px;
	cursor: pointer;
}

.shade {
	height: 40px;
	width: 40px;
}
.getstarted {
	display: flex;
	justify-content: center;
	color: white;
	cursor: pointer;
	width: 7em;
	background-color: #ef9477;
	margin: 1em;
}
.getstarted:hover {
	color: white;
	background-color: teal;
}
.template-container {
	display: flex;
	flex-direction: row;
	align-items: center;
}
.selected {
	width: 165px;
}
.selected > div, .selected > div > .shade {
	width: 55px;
	height: 55px;
}
.templates-container {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
}
</style>
