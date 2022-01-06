import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('ContactForm component', () => {
    // baseline test
    it('renders', () => {
      render(<ContactForm
      />);
    })
  
    // snapshot test
    it('matches snapshot', () => {
      const { asFragment } = render(<ContactForm
      />);
      // assert value comparison
      expect(asFragment()).toMatchSnapshot();
    });
})

describe('accurate node text', () => {
    it('h1 text correct', () => {
        const { getByTestId } = render(<ContactForm
        />);
      
        expect(getByTestId('contactMe')).toHaveTextContent('Contact me');
    });

    it('submit button text correct', () => {
        const { getByTestId } = render(<ContactForm
        />);
      
        expect(getByTestId('submitButton')).toHaveTextContent('Submit');
    });
})