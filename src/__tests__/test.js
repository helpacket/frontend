import { mount } from '@vue/test-utils'
import App from "../App.vue";

describe('App', () => {
    // Now mount the component and you have the wrapper
    const wrapper = mount(App);
    // it's also easy to check for the existence of elements

    it('has router', () => {
        expect(wrapper.contains('router-view')).toBe(true)
    });

});