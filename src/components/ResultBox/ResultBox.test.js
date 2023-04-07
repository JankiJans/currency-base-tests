import ResultBox from './ResultBox';
import { getByTestId, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Component ResultBox', () => {
  it('should render without crashing', () => {
    render(<ResultBox from="PLN" to="USD" amount={100} />);
  });

  const testCasesPLN = [
    { amount: '100', from: 'PLN', to: 'USD' },
    { amount: '20', from: 'PLN', to: 'USD' },
    { amount: '200', from: 'PLN', to: 'USD' },
    { amount: '345', from: 'PLN', to: 'USD' },
  ];

  for (const testObj of testCasesPLN) {
    it('hould render proper info about conversion when PLN -> USD', () => {
      const { container } = render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />);
      const result = getByTestId(container, 'final-amount');
      const expectedText = `${testObj.from} ${testObj.amount} = ${testObj.to} `;
      expect(result).toHaveTextContent(expectedText);
    });
  }
});
