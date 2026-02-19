import { render, screen } from '@testing-library/react';
import App from './App.jsx';

describe('App', () => {
  it('renders FitnessTracker component', () => {
    render(<App />);
    // Check for a known element from FitnessTracker, e.g., a heading or label
    // This is a placeholder; update the text to match your UI
    // Example: expect(screen.getByText(/calories/i)).toBeInTheDocument();
  });
});
