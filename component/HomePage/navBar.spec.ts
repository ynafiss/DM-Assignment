import { describe, it, expect, beforeAll, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { setup } from '@nuxt/test-utils'
import NavBar from './navBar.vue'

beforeAll(async () => {
  await setup({
    rootDir: '../../',
    browser: false
  })
})

describe('NavBar', () => {
  beforeEach(() => {
    render(NavBar)
  })
  
  it('renders the navbar', () => {
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
  })
  
  it('renders the logo', () => {
    expect(screen.getByTestId('logo')).toHaveTextContent('DM')
  })
  
  it('renders the search bar', () => {
    expect(screen.getByTestId('search-bar')).toBeInTheDocument()
  })
  
  it('renders the like button', () => {
    expect(screen.getByTestId('like-icon')).toBeInTheDocument()
  })
})