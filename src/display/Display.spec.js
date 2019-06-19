import React from 'react';
import "jest-dom/extend-expect"; 
// import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Display from './Display';


describe('<Display />', () => {
      it('should render the display component without errors', () => {
            render(<Display />)
      });

      it('should show open when open', () => {
            const { getByText } = render(<Display locked={false} closed={false} />)
            const status = getByText(/open/i);
            expect(status).toBeTruthy();
      });

      it('should show closed when closed', () => {
            const { getByText } = render(<Display locked={false} closed={true} />)
            const status = getByText(/closed/i);
            expect(status).toBeTruthy();
      });

      it('should show locked when locked', () => {
            const { getByText } = render(<Display locked={true} closed={true} />)
            const status = getByText(/locked/i);
            expect(status).toBeTruthy();
      });

      it('should show unlocked when unlocked', () => {
            const { getByText } = render(<Display locked={false} closed={true} />)
            const status = getByText(/unlocked/i);
            expect(status).toBeTruthy();
      });
})