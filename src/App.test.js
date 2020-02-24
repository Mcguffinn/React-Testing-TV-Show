import {render,
    fireEvent,
    waitForElement,
    wait,} from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import App from './App';



test('User clicked Season DropDown', () => {
    userEvent.click(getByText(/select a season/i));
    getByText(/season1/i)
  });
