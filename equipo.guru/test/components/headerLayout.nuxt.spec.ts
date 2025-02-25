import { describe, test, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import headerLayout from '@/components/headerLayout.vue'

vi.mock('#app', () => ({
    defineNuxtLink: () => ({
        template: '<a><slot/></a>'
    })
}))
describe('HeaderLayout', () => {
    test('renders header component', () => {
        const wrapper = mount(headerLayout)
        expect(wrapper.exists()).toBe(true)
    })

    test('contains h1 ', () => {
        const wrapper = mount(headerLayout)
        const h1 = wrapper.find('h1')
        expect(h1.exists()).toBe(true)
    })
    test('contains nav', () => {
        const wrapper = mount(headerLayout)
        const nav = wrapper.find('nav')
        expect(nav.exists()).toBe(true)
    })
})
