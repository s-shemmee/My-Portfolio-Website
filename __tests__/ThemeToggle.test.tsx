import { render, fireEvent, screen } from '@testing-library/react';
import ThemeToggle from '@/components/widgets/ThemeToggle';
import { useTheme } from 'next-themes';

jest.mock('next-themes', () => ({
  useTheme: jest.fn(),
}));

describe('ThemeToggle', () => {
  it('should toggle the theme', () => {
    const mockedUseTheme = useTheme as jest.Mock;
    const setTheme = jest.fn();

    mockedUseTheme.mockReturnValue({ theme: 'light', setTheme });

    render(<ThemeToggle />);
    const toggleButton = screen.getByRole('button');

    fireEvent.click(toggleButton);

    expect(setTheme).toHaveBeenCalledWith('dark');
  });
});
