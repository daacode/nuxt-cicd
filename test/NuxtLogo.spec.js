import { mount, shallowMount } from '@vue/test-utils'
import NuxtLogo from '@/components/NuxtLogo.vue'


describe('NuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NuxtLogo)
    expect(wrapper.vm).toBeTruthy()
  });

  test("NuxtLogo renders properly", () => {
    const wrapper = shallowMount(NuxtLogo, {})
    expect(wrapper.html()).toMatchSnapshot();
  });
})

