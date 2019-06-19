import React from 'react';
import "jest-dom/extend-expect"; 
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Controls from './Controls';

describe('<Controls />', () => {
      it('should render the controls component without errors', () => {
            render(<Controls />)
      })
})