import { describe, it, expect, beforeAll, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { setup } from '@nuxt/test-utils'
import NavBar from './navBar.vue'
import '@testing-library/jest-dom'

beforeAll(async () => {
  await setup({
    rootDir: '../../',
    browser: false
  })
})

describe('Given the NavBar component', () => {
  describe('When it is rendered', () => {
    beforeEach(() => {
      render(NavBar)
    })
    
    it('Then it should display the navbar container', () => {
      const navbar = screen.getByTestId('navbar');
      expect(navbar).toBeInTheDocument()
    })
    
    it('Then it should display the logo with correct text', () => {
      const logo = screen.getByTestId('logo');
      expect(logo).toBeInTheDocument()
      expect(logo).toHaveTextContent('DM')
    })
    
    it('Then it should display the search bar', () => {
      const searchBar = screen.getByTestId('search-bar');
      expect(searchBar).toBeInTheDocument()
    })
    
    it('Then it should display the like button', () => {
      const likeIcon = screen.getByTestId('like-icon');
      expect(likeIcon).toBeInTheDocument()
    })
  })
})