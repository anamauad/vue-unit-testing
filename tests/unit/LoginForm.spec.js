import LoginForm from '@/components/LoginForm'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
  test('emits an event with a user data payload', () => {
    const wrapper = mount(LoginForm)

    // const input = wrapper.find('input')
    // const input = wrapper.find('input[type="text"]')
    const input = wrapper.find('input[data-testid="name-input"]')

    input.setValue('My Name')

    wrapper.trigger('submit')

    const formSubmittedCalls = wrapper.emitted('formSubmitted')

    expect(formSubmittedCalls).toHaveLength(1)

    const expectedPayload = { name: 'My Name' }
    expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(
      expectedPayload
    )
  })
})
