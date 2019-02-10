<template>
	<div class="demo-container">
		<div v-if="showMenu" class="left-menu">
			<div class="menu-title">
				<span>Drag and drop</span>
				<span  v-html="textToColorfulChars(' widgets')">
				</span>
			</div>
			<div @click="showMenu=false" class="icon-container">
				<font-awesome-icon icon="chevron-up" />
			</div>

			<draggable
				v-model="allComponents"
				:move="handleMove"
				:options="{group:{ name:'components',  pull:'clone', put:false }}"
				class="menu-list"
			>
				<div
					class="component-name-container"
					v-for="(componentFromAll,index) in allComponents"
					v-bind:key='index + "allcmp"'
				>
					<p style="text-decoration: underline;">{{componentFromAll.displayName}}</p>
				</div>
			</draggable>
			<div class="menu-actions">
				<div @click="setPreview()" class="lego-button" v-if="false">
					<p><font-awesome-icon icon="save" /> Preview</p>
				</div>
				<div @click="resetToDefault" class="lego-button">
					<p><font-awesome-icon icon="undo" /> Restore</p>
				</div>
				<div @click="save" class="lego-button" v-if="false">
					<p><font-awesome-icon icon="save" /> Save</p>
				</div>
			</div>
		</div>
		<div v-else class="left-menu-show">
				<div @click="showMenu=true" class="icon-container">
						<font-awesome-icon icon="chevron-down" />
				</div>
		</div>
		<div class="page-container">
			<Styler
				v-if="stylerVisible"
				:colorList="selectedColorList ? selectedColorList: ''"
				:fontList="fontList ? fontList: ''"
				:notRemovable="true"
				v-on:update-styled-element="updateElementStyle"
				v-on:close-styler="stylerVisible=0"
			></Styler>

			<div
				v-bind:style='{
					"background-color": pageContainer.backgroundColor,
					"color": pageContainer.color,
					"font-family": pageContainer.font
				}'
				@click.stop="stylerVisible = 'true'"
			>
				<draggable
					v-model="componentList"
					:options="{group:'components', put:true}"
				>
					<component
						v-for="(component, index) in componentList"
						v-bind:is="component.name"
						v-bind:key='index + "cmp"'


						:stylerVisible="selectedComponentIndex == index"
						:colorList="selectedColorList"
						:fontList="fontList ? fontList: ''"
						:params="component.params"

						@mouseenter.native.stop='setHoveredComponent(index)'
						@mouseleave.native.stop='setHoveredComponent(-1)'
						@click.native.stop="selectComponent(index)"
						v-on:remove-component='removeComponent(index)'
						v-on:update-params="updateParams(index, ...arguments)"

						v-bind:class='{ hoveredContainer: hoveredComponentIndex == index }'
					>
					</component>
				</draggable>
			</div>
		</div>
	</div>
</template>

<script>

import draggable from 'vuedraggable';
import Styler from '@/components/Styler.vue';

import colorLists from '@/hardcoded/color-lists.js';
import fontList from '@/hardcoded/font-list.js';
import commonMethods from '@/utils/commonMethods.js';

/* NB: each component must have implemented a styler with additional handlers,
 contenteditable functionality */
import SimpleHeader from '@/components/pageComponents/SimpleHeader.vue';
import SimpleFooter from '@/components/pageComponents/SimpleFooter.vue';
import SimpleSection from '@/components/pageComponents/SimpleSection.vue';
import ThreeCols from '@/components/pageComponents/ThreeCols.vue';
import TwoColsWithImg from '@/components/pageComponents/TwoColsWithImg.vue';
import ImgSection from '@/components/pageComponents/ImgSection.vue';

const allComponents = [
	{
		name: 'SimpleHeader',
		displayName: 'Page Title',
		params: {
			text: {
				h2: 'Write your text here!',
			},
			color: null,
			backgroundColor: null,
			font: null,
		},
	},
	{
		name: 'SimpleSection',
		displayName: 'Text Row',
		params: {
			text: {
				h4: 'Write your text here!',
			},
			color: null,
			backgroundColor: null,
			font: null,
		},
	},
	{
		name: 'ThreeCols',
		displayName: '3 Columns',
		params: {
			text: {
				p1: 'Write your text here!',
				p2: 'Write your text here!',
				p3: 'Write your text here!',
			},
			color: null,
			backgroundColor: null,
			font: null,
		},
	},
	{
		name: 'SimpleFooter',
		displayName: 'Footer',
		params: {
			text: {
				h2: 'Write your text here!',
				p: 'Write your text here!',
			},
			color: null,
			backgroundColor: null,
			font: null,
		},
	},
	{
		name: 'TwoColsWithImg',
		displayName: '2 Columns 1 Image',
		params: {
			text: {
				h5: 'Write your text here!',
				h5bis: 'Write your text here!',
			},
			other: {
				img: null,
			},
			color: null,
			backgroundColor: null,
			font: null,
		},
	},
	{
		name: 'ImgSection',
		displayName: 'Image',
		params: {
			text: {
			},
			other: {
				img: null,
			},
			color: null,
			backgroundColor: null,
			font: null,
		},
	},
];
const defaultTemplate = [
	{
		name: 'SimpleHeader',
		displayName: 'Page Title',
		params: {
			text: {
				h2: 'Write your text here!',
			},
			color: null,
			backgroundColor: null,
			font: null,
		},
	},
		{
		name: 'TwoColsWithImg',
		displayName: '2 Columns 1 Image',
		params: {
			text: {
				h5: 'Write your text here!',
				h5bis: 'Write your text here!',
			},
			other: {
				img: null,
			},
			color: null,
			backgroundColor: null,
			font: null,
		},
	},
	{
		name: 'SimpleFooter',
		displayName: 'Footer',
		params: {
			text: {
				h2: 'Write your text here!',
				p: 'Write your text here!',
			},
			color: null,
			backgroundColor: null,
			font: null,
		},
	},

];

export default {
	name: 'CreatePage',
	components: {
		'Styler': Styler,
		draggable,

		SimpleHeader,
		SimpleFooter,
		SimpleSection,
		ThreeCols,
		TwoColsWithImg,
		ImgSection,
	},
	data() {
		return {
			// page customisation params
			fontList: fontList,
			colorLists: colorLists,

			// new page params
			componentList: JSON.parse(JSON.stringify(defaultTemplate)),

			// page edit helpers
			allComponents: JSON.parse(JSON.stringify(allComponents)),
			selectedComponentIndex: null,
			hoveredComponentIndex: null,
			pageEditable: false,
			selectedColorList: this.$route.params.colorList,
			showMenu: true,
			previewMode: false,

			// page container
			pageContainer: {
				color: null,
				backgroundColor: null,
				font: null,
			},
			stylerVisible: null,

		};
	},
	beforeMount() {
		this.componentListParams = this.generateComponentListParams();
	},
	watch: {
		componentList: function(val) {
			this.componentListParams = this.generateComponentListParams();
		},
	},
	methods: {
		generateComponentListParams() {
			return Array.from(this.componentList, (el) => {});
		},
		isColorListSelected(colorList) {
			return this.selectedColorList == colorList;
		},
		selectComponent(index) {
			this.selectedComponentIndex = index;
		},
		setHoveredComponent(index) {
			this.hoveredComponentIndex = index;
		},
		updateElementStyle(styles) {
			if (styles.backgroundColor) {
				this.pageContainer.backgroundColor = styles.backgroundColor;
			}
			if (styles.color) this.pageContainer.color = styles.color;
			if (styles.font) this.pageContainer.font = styles.font;
		},
		handleMove({relatedContext, draggedContext}) {
			this.allComponents = JSON.parse(JSON.stringify(allComponents));
		},
		removeComponent(index) {
			this.componentList.splice(index, 1);
		},
		resetToDefault() {
			this.componentList = JSON.parse(JSON.stringify(defaultTemplate));
			this.allComponents = JSON.parse(JSON.stringify(allComponents));
			this.selectedColorList = null;
			this.selectedComponentIndex = -1;
			this.pageContainer.color = null;
			this.pageContainer.backgroundColor = null;
			this.pageContainer.font = null;
		},
		save() {
			console.log(JSON.stringify(this.componentList));
		},
		updateParams(index, paramsCopy) {
			let params = this.componentList[index].params;
			params.color = paramsCopy.color;
			params.backgroundColor = paramsCopy.backgroundColor;
			params.font = paramsCopy.font;
			Object.keys(paramsCopy.text).forEach((key) => {
				params.text[key] = paramsCopy.text[key];
			});
			if (paramsCopy.other) {
				Object.keys(paramsCopy.other).forEach((key) => {
					params.other[key] = paramsCopy.other[key];
				});
			}
		},
		textToColorfulChars(str) {
			return commonMethods.textToColorfulChars(str);
		},
		setPreview() {
			this.previewMode = true;
			this.showMenu = false;
		},
	},
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
p {
	margin: 0.5rem;
}
.hoveredContainer {
	outline: 1.3px solid lightgrey;
}
.page-container {
	position: relative;
	flex: 1;
}
.left-menu {
	display: flex;
	align-items: center;
	background-color: white;
	box-shadow: 2px 1px 15px teal;
	position: fixed;
    bottom: 0;
	right: 0;
    width: 100%;
    top: 80%;
	z-index: 999;
}
.left-menu-show {
	display: flex;
	align-items: center;
	background-color: teal;
	position: fixed;
    bottom: 0;
    width: 100%;

}

.demo-container {
	display: flex;
	flex-direction: row;
}
.component-name-container {
	color: red;
	cursor: grab;
}
.component-name-container:hover {
	font-weight: bold;
}
.menu-title {
	width: 4rem;
	margin: 0;
	padding: 0.5rem;
	font-size: 13px;
}
.menu-list {
	width: calc(100% - 12rem);
	display: flex;
	flex-wrap: wrap;


}
.icon-container {
	color: white;
	cursor: pointer;
	position: fixed;
	display: flex;
	margin: 0.3rem;
	justify-content: center;
	align-items: center;
	bottom: 0;
	left: 0;
	height: 2rem;
	width: 2rem;
	border-radius: 50%;
	background-color: #ef9477;
}
.icon-container:hover{
	color: teal !important;
	
}
.lego-button {
	display: flex;
	justify-content: center;
	color: white;
	cursor: pointer;
	width: 6em;
	background-color: #ef9477;
	padding: 0 0.5em;
	margin: 0.3em;
	font-size: 14px;
}
.lego-button:hover {
	color: white;
	background-color: teal;
}
.lego-button > p {
	margin: 0.3rem;
}
.menu-actions {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 8rem;
}


</style>
