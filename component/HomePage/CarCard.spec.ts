import { describe, it, expect, beforeAll, beforeEach } from "vitest";
import { render, screen } from "@testing-library/vue";
import { setup } from "@nuxt/test-utils";
import CarCard from "./CarCard.vue";
import "@testing-library/jest-dom";

beforeAll(async () => {
  await setup({
    rootDir: '../../',
    browser: false
  });
});

describe("Given the CarCard component", () => {
  describe("When it is rendered", () => {
    beforeEach(() => {
      render(CarCard);
    });

    it("Then it should display a card container", () => {
      const container = screen.getByTestId('card-container');
      expect(container).toBeInTheDocument();
    });
    
    describe("And checking the first card", () => {
      it("Then it should display card-1 element", () => {
        const firstCard = screen.getByTestId('card-1');
        expect(firstCard).toBeInTheDocument();
      });
      
      it("Then it should display correct heading", () => {
        const heading = screen.getByTestId('card-1-heading');
        expect(heading).toHaveTextContent('The Best Platform for Car Rental');
      });
      
      it("Then it should display correct description", () => {
        const description = screen.getByTestId('card-1-description');
        expect(description).toHaveTextContent(
          'Ease of doing a car rental safely and reliably. Of course at a low price.'
        );
      });
      
      it("Then it should display a rental button", () => {
        const button = screen.getByTestId('card-1-button');
        expect(button).toHaveTextContent('Rental Car');
      });
      
      it("Then it should display the car image", () => {
        const image = screen.getByTestId('card-1-img');
        expect(image).toHaveAttribute('src', expect.stringContaining('car.png'));
      });
    });
    
    describe("And checking the second card", () => {
      it("Then it should display card-2 element", () => {
        const secondCard = screen.getByTestId('card-2');
        expect(secondCard).toBeInTheDocument();
      });
      
      it("Then it should display correct heading", () => {
        const heading = screen.getByTestId('card-2-heading');
        expect(heading).toHaveTextContent('Easy way to rent a car at a low price');
      });
      
      it("Then it should display correct description", () => {
        const description = screen.getByTestId('card-2-description');
        expect(description).toHaveTextContent(
          'Providing cheap car rental services and safe and comfortable facilities.'
        );
      });
      
      it("Then it should display a rental button", () => {
        const button = screen.getByTestId('card-2-button');
        expect(button).toHaveTextContent('Rental Car');
      });
      
      it("Then it should display the car image", () => {
        const image = screen.getByTestId('card-2-img');
        expect(image).toHaveAttribute('src', expect.stringContaining('car2.png'));
      });
    });
  });
});