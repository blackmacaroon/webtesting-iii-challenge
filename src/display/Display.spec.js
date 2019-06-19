import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Display from './Display';

describe('<Display />', () => {
      it('should render the display component without errors', () => {
            render(<Display />)
      })
})