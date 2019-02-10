<template>
		<div class="styler">
			<div class="styler-container">
				<div
					@click='selectTab("bg-color")'
					:class='{ selected: selectedTab == "bg-color"}'
					class="icon-container"
				>
					<font-awesome-icon icon="palette"/>
				</div>
				<div
					@click='selectTab("text")'
					v-bind:class='{ selected: selectedTab == "text"}'
					class="icon-container"
				>
					<font-awesome-icon icon="font" />
				</div>
				<div
					v-if="!notRemovable"
					@click='$emit("remove-component")'
					class="icon-container"
				>
					<font-awesome-icon icon="trash-alt" />
				</div>
				<div @click='$emit("close-styler")' class="icon-container">
					<font-awesome-icon icon="times" />
				</div>
			</div>
				<div v-if='selectedTab == "text"'>
						<div class="option-list">
							<div
								v-for="(option,index) in colorList"
								v-bind:key='index'
							>
								<div
									v-bind:style='{ "background-color": option }'
									@click='styledElement.color = option'
									class="styler-dot"
								></div>
							</div>
						</div>
						<div class="option-list-col">
								<div
									v-for="(option,index) in fontList"
									v-bind:key='"font" + index'
								>
										<div class="font-container"
											v-bind:style='{ "font-family": option }'
											@click='styledElement.font = option'
										>{{option}}</div>
								</div>
						</div>

				</div>
				<div v-if='selectedTab == "bg-color"' class="option-list">
						<div
								v-for="(option,index) in colorList"
								v-bind:key='"bgc" + index'
						>
								<div
										v-bind:style='{ "background-color": option }'
										@click='styledElement.backgroundColor = option'
										class="styler-dot"
								></div>
						</div>
				</div>
		</div>
</template>

<script>

export default {
	name: 'Styler',
	props: ['colorList', 'fontList', 'notRemovable'],
	data() {
		return {
			styledElement: {
				backgroundColor: null,
				color: null,
				font: null,
			},
			selectedTab: null,
		};
	},

	mounted() {

	},
	beforeDestroy() {

	},
	watch: {
		styledElement: {
			handler: function() {
				this.$emit('update-styled-element', this.styledElement);
			},
			deep: true,
		},
	},
	methods: {
		selectTab(tab) {
			if (this.selectedTab == tab) this.selectedTab = '';
			else this.selectedTab = tab;
		},
	},
};

</script>
<style scoped>


.styler-container {
	display: flex;
	width: fit-content;
	padding: 0.2em;
}
.styler {
	position: absolute;
	top: 0;
	left: 0;
	background-color: #ef9477;
	z-index: 10;
}
.icon-container {
	padding: 0.5em;
	color: white;
	cursor: pointer;
}
.icon-container:hover{
	color: teal !important
}

.option-list {
	padding: 0 4px;
	display: flex;
}
.option-list-col {
	padding: 0 4px;
	display: flex;
	flex-direction: column;
}
.styler-dot {
	height: 15px;
	width: 15px;
	border-radius: 50%;
	display: inline-block;
	margin: 0.2em;
	cursor: pointer;
	border: 1px solid pink;
}
.styler-dot:hover {
	border: 1px solid white;
}
.selected {
	color: white !important;
}
.font-container {
	cursor: pointer
}


</style>
