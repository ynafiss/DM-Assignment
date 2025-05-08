import { describe, it, expect, beforeAll, beforeEach } from "vitest";
import { render, screen } from "@testing-library/vue";
import { setup } from "@nuxt/test-utils";
import SmallCards from "./smallCards.vue";
import "@testing-library/jest-dom";

// Mock car data to pass as prop
const mockCar = {
  title: 'Koenigsegg',
  subtitle: 'Sport',
  image: '../../assets/car.png',
  fuelCapacity: '90L',
  transmission: 'Manual',
  capacity: '2 People',
  price: 99.00
};

beforeAll(async () => {
  await setup({
    rootDir: '../../',
    browser: false
  });
});

describe("Given the SmallCards component", () => {
  describe("When it is rendered with car data", () => {
    beforeEach(() => {
      render(SmallCards, {
        props: {
          car: mockCar
        }
      });
    });

    it("Then it should display the small card container", () => {
      const card = screen.getByTestId('small-card');
      expect(card).toBeInTheDocument();
    });
    
    it("Then it should display the car title correctly", () => {
      const title = screen.getByText('Koenigsegg');
      expect(title).toBeInTheDocument();
    });
    
    it("Then it should display the car subtitle correctly", () => {
      const subtitle = screen.getByText('Sport');
      expect(subtitle).toBeInTheDocument();
    });
    
    it("Then it should display the car image", () => {
      const image = screen.getByTestId('car-image');
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', expect.stringContaining('car.png'));
    });
    
    it("Then it should display the fuel capacity", () => {
      const fuelText = screen.getByText('90L');
      expect(fuelText).toBeInTheDocument();
    });
    
    it("Then it should display the transmission type", () => {
      const transmissionText = screen.getByText('Manual');
      expect(transmissionText).toBeInTheDocument();
    });
    
    it("Then it should display the car capacity", () => {
      const capacityText = screen.getByText('2 People');
      expect(capacityText).toBeInTheDocument();
    });
    
    it("Then it should display the correct price", () => {
      const priceElement = screen.getByText('$99/');
      expect(priceElement).toBeInTheDocument();
    });
    
    it("Then it should display a rent button", () => {
      const button = screen.getByTestId('rent-button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('Rent Now');
    });
    
    it("Then it should display the like icon", () => {
      const likeIcon = screen.getByTestId('like-icon');
      expect(likeIcon).toBeInTheDocument();
    });
  });
});