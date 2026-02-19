import { render, screen } from '@testing-library/react';
import FitnessTracker from './FitnessTracker.jsx';

describe('FitnessTracker', () => {
  it('renders without crashing', () => {
    render(<FitnessTracker />);
    // Check for a known label or UI element
    // Example: expect(screen.getByText(/food database/i)).toBeInTheDocument();
  });
});
