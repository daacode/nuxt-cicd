import { mount, shallowMount } from '@vue/test-utils'
import NuxtLogo from '@/components/NuxtLogo.vue'

const factory = () => {
  return shallowMount(NuxtLogo, {});
}

describe('NuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NuxtLogo)
    expect(wrapper.vm).toBeTruthy()
  });

  test("renders properly", () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
})

