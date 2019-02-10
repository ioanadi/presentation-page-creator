import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		editMode: true,
		componentListParams: [],


	},
	mutations: {
		setEditMode(state) {
			state.editMode = true;
		},
		setViewMode(state) {
			state.editMode = false;
		},
		updateComponent(state, componentInfo) {
			console.log(componentInfo);
		},
	},
});
