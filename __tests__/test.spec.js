/**
 * A sample unit test
 */

// Import the `mount()` method from Vue Test Utils
import { shallowMount } from '@vue/test-utils'

// The component to test
const MessageComponent = {
    template: '<p>{{ msg }}</p>',
    props: ['msg']
}

test('displays message', () => {
    // mount() returns a wrapped Vue component we can interact with
    const wrapper = shallowMount(MessageComponent, {
        propsData: {
            msg: 'Hello world'
        }
    })

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('Hello world')
})
