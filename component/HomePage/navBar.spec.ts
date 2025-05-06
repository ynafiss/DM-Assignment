import { describe, it, expect, beforeAll } from 'vitest'
import { mount } from '@vue/test-utils'
import { setup, $fetch } from '@nuxt/test-utils'
import NavBar from './navBar.vue'

beforeAll(async () => {
  await setup({
    rootDir: '../../',
    browser: false
  })
})

describe('NavBar', () => {
  it('renders the navbar', async () => {
    const wrapper = mount(NavBar)
    expect(wrapper.find('[data-testid="navbar"]').exists()).toBe(true)
  })
  
  it('renders the logo', async () => {
    const wrapper = mount(NavBar)
    expect(wrapper.find('[data-testid="logo"]').text()).toBe('DM')
  })
  
  it('renders the search bar', async () => {
    const wrapper = mount(NavBar)
    expect(wrapper.find('[data-testid="search-bar"]').exists()).toBe(true)
  })
  
  it('renders the like button', async () => {
    const wrapper = mount(NavBar)
    expect(wrapper.find('[data-testid="like-icon"]').exists()).toBe(true)
  })
})