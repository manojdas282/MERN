import {render, screen, expect} from '@testing-library/react'
import Login from './Login'

test("User email field should render", () => {
    render(<Login />);
    const emailInput = screen.findAllByLabelText(/Email Address/i);
    expect(emailInput).toBeInTheDocument();
})