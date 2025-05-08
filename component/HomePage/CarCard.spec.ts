import { describe, it, expect, beforeAll, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { setup } from '@nuxt/test-utils'
import CarCard from './CarCard.vue'

beforeAll(async () => {
  await setup({
    rootDir: '../../',
    browser: false
  })
})

describe('CarCard', () => {
  beforeEach(() => {
    render(CarCard)
  })
  
  it('renders the card container', () => {
    expect(screen.getByTestId('card-container')).toBeInTheDocument()
  })
  
  it('renders two cards', () => {
    expect(screen.getByTestId('card-1')).toBeInTheDocument()
    expect(screen.getByTestId('card-2')).toBeInTheDocument()
  })
  
  it('renders first card with correct heading', () => {
    expect(screen.getByTestId('card-1-heading')).toHaveTextContent('The Best Platform for Car Rental')
  })
  
  it('renders second card with correct heading', () => {
    expect(screen.getByTestId('card-2-heading')).toHaveTextContent('Easy way to rent a car at a low price')
  })
  
  it('renders correct paragraph text in first card', () => {
    expect(screen.getByTestId('card-1-description')).toHaveTextContent(
      'Ease of doing a car rental safely and reliably. Of course at a low price.'
    )
  })
  
  it('renders correct paragraph text in second card', () => {
    expect(screen.getByTestId('card-2-description')).toHaveTextContent(
      'Providing cheap car rental services and safe and comfortable facilities.'
    )
  })
  
  it('renders buttons on both cards', () => {
    const button1 = screen.getByTestId('card-1-button')
    const button2 = screen.getByTestId('card-2-button')
    
    expect(button1).toHaveTextContent('Rental Car')
    expect(button2).toHaveTextContent('Rental Car')
  })
  
  it('renders car images on both cards', () => {
    const image1 = screen.getByTestId('card-1-img')
    const image2 = screen.getByTestId('card-2-img')
    
    expect(image1).toHaveAttribute('src', expect.stringContaining('car.png'))
    expect(image2).toHaveAttribute('src', expect.stringContaining('car.png'))
  })
})