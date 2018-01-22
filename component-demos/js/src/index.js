'use strict';

import JSXComponent from 'metal-jsx';

// components
import Dropdown from '../../../components/atoms/Dropdown';

class ComponentDemos extends JSXComponent {
	render() {
		return (
			<div class="partners-app">
				<Dropdown />
			</div>
		);
	}
}

export { ComponentDemos };
export default ComponentDemos;
