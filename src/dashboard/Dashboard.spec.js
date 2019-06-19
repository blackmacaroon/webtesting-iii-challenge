import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Dashboard from './Dashboard.js';

describe('<Dashboard />', () => {
      it('should render the dashboard component without error', () => {
            render(<Dashboard />);
      })

      it('should contain both Display and Controls child components', () => {
            render(<Dashboard />);
            // had Controls as argument, sent the whole damn page. I just want the word to show up.
            expect(document.querySelector(".controls")).toBeTruthy();
            expect(document.querySelector(".display")).toBeTruthy();
            
            // const { queryByText } = render(<Dashboard />);
            // expect(queryByText(/display/i)).toBeTruthy();
            // expect(queryByText(/controls/i)).toBeTruthy();
      })
});