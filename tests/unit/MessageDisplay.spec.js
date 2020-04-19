import MessageDisplay from '@/components/MessageDisplay'
import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/axios'
import flushPromises from 'flush-promises'

jest.mock('@/services/axios')
beforeEach(() => {
  jest.clearAllMocks()
})

describe('MessageDisplay', () => {
  it('calls getMessage and displays message text', async () => {
    const mockedMessage = 'mocked text for the message'
    getMessage.mockResolvedValueOnce({ text: mockedMessage })

    const wrapper = mount(MessageDisplay)

    await flushPromises()
    expect(getMessage).toHaveBeenCalledTimes(1)

    const message = wrapper.find('[data-testid="message"]').element.textContent
    expect(message).toEqual(mockedMessage)
  }),
    it('displays an error when getMessage call fails', async () => {
      const mockedError = 'Error retrieving message from the database'
      getMessage.mockRejectedValueOnce(mockedError)

      const wrapper = mount(MessageDisplay)

      await flushPromises()
      expect(getMessage).toHaveBeenCalledTimes(1)

      const error = wrapper.find('[data-testid="message-error"]').element
        .textContent
      expect(error).toEqual(mockedError)
    })
})
