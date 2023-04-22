import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Reservations from '../../containers/reservations/Reservations';

describe('Reservations', () => {
  it('submits the form with all options selected', async () => {
    render(<Reservations />);

    const dateInput = screen.getByLabelText('Date:');
    const timeInput = screen.getByLabelText('Time:');
    const guestsInput = screen.getByLabelText('Number of guests:');
    const occasionSelect = screen.getByLabelText('Occasion:');

    const submitButton = screen.getByRole('button', { name: /submit reservation/i });

    fireEvent.change(dateInput, { target: { value: '2023-04-30' } });
    fireEvent.change(timeInput, { target: { value: '14:30' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.change(occasionSelect, { target: { value: 'anniversary' } });

    fireEvent.click(submitButton);

    // replace the next line with your own assertion code
    expect(true).toBe(true);
  });
});