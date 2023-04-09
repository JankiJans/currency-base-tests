import ResultBox from './ResultBox';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const testCasesPLN = [
  { amount: '100', from: 'PLN', to: 'USD', expected: 'PLN 100 = $28.57' },
  { amount: '20', from: 'PLN', to: 'USD', expected: 'PLN 20 = $5.71'},
  { amount: '200', from: 'PLN', to: 'USD', expected: 'PLN 200 = $57.14' },
  { amount: '345', from: 'PLN', to: 'USD', expected: 'PLN 345 = $98.57' },
];

describe('Component ResultBox', () => {
  it('should render without crashing', () => {
    render(<ResultBox from="PLN" to="USD" amount={100} />);
  });

  for (const testObj of testCasesPLN)
    it('should render proper info about conversion when PLN -> USD', () => {
      render(<ResultBox from='PLN' to='USD' amount={testObj.amount} />);
      const output = screen.getByTestId('final-amount');
      expect(output).toHaveTextContent(testObj.expected);
    });
  cleanup();
});
