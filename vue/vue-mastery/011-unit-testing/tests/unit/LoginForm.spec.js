import LoginForm from '@/components/LoginForm.vue'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
  it('emits an event with user data payload', () => {
    const wrapper = mount(LoginForm)
    const input = wrapper.find('[data-testid="name-input"]')

    input.setValue('Jabba')
    wrapper.trigger('submit')

    const formSubmitterCalls = wrapper.emitted('formSubmitted')
    expect(formSubmitterCalls).toHaveLength(1)

    const expectedPayload = { name: 'Jabba' }
    expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(
      expectedPayload
    )
  })
})
