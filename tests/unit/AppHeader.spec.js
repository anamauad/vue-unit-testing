// if user is not logged in, do not show logout button
// if user is logged in, show logout button
import AppHeader from '@/components/AppHeader.vue'
import { mount } from '@vue/test-utils'

describe('AppHeader', () => {
  test('if user is not logged in, do not show logout button', async () => {
    const wrapper = mount(AppHeader)
    await wrapper.vm.$nextTick()
    expect(wrapper.find('button').isVisible()).toBe(false)
  }),
    test('if user is logged in, show logout button', async () => {
      const wrapper = mount(AppHeader)
      wrapper.setData({ loggedIn: true })
      // wait for DOM updates
      await wrapper.vm.$nextTick()
      expect(wrapper.find('button').isVisible()).toBe(true)
    })
})
