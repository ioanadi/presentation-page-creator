import Vue from 'vue';
import App from './App';
import router from './router';
import store from '@/store/store.js';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
	faPalette, faBrush, faFont, faTimes, faTrashAlt, faChevronUp,
	faChevronDown, faSave, faUndo, faImage,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';


library.add(
	faPalette, faBrush, faFont, faTimes, faTrashAlt, faChevronUp,
	faChevronDown, faSave, faUndo, faImage
);
Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.config.productionTip = false;


// handles paste in order not to copt html element along with text
document.addEventListener('paste', function(e) {
	// cancel paste
	e.preventDefault();
	let text = e.clipboardData.getData('text/plain');

	// insert text manually
	document.execCommand('insertHTML', false, text);
});


new Vue({
	el: '#app',
	router,
	store,
	components: {App},
	template: '<App/>',
});
