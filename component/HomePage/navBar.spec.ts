import { describe, it, expect, beforeAll, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import { setup } from '@nuxt/test-utils'
import NavBar from './navBar.vue'

beforeAll(async () => {
  await setup({
    rootDir: '../../',
    browser: false
  })
})

describe('NavBar', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(NavBar)
  })
  
  it('renders the navbar', () => {
    expect(wrapper.find('[data-testid="navbar"]').exists()).toBeTruthy()
  })
  
  it('renders the logo', () => {
    expect(wrapper.find('[data-testid="logo"]').text()).toBe('DM')
  })
  
  it('renders the search bar', () => {
    expect(wrapper.find('[data-testid="search-bar"]').exists()).toBeTruthy()
  })
  
  it('renders the like button', () => {
    expect(wrapper.find('[data-testid="like-icon"]').exists()).toBeTruthy()
  })
})