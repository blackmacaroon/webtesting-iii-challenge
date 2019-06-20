import React from 'react';
import "jest-dom/extend-expect"; 
// import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Controls from './Controls.js';
import Dashboard from '../dashboard/Dashboard.js'

describe('<Controls />', () => {
      it('should render the controls component without errors', () => {
            //renders the controls component
            render(<Controls />)
      })

      it('should render initial state, unlocked and open', () => {
            const { getByText } = render(<Dashboard />);
            //renders the dashboard component and finds gate both unlocked and opened, with an option to close
            getByText(/unlocked/i)
            getByText(/open/i)
            getByText(/close gate/i)
      })

      describe('open/closed toggle', () => {
            it('should close, from initial open state, when close gate button is clicked', async () => {
                  //make sure the gate is opened and button displays close gate option 
                  const { getByText } = render(<Dashboard />)
                  const toggle = getByText(/close gate/i)
                  // waits til button it clicked, gate closes
                  await fireEvent.click(toggle)
                  // button will change to say 'open gate'
                  getByText(/open gate/i)
            })

            it('should close, then open, when open gate button is clicked', async () => {
                  const { getByText } = render(<Dashboard />)
                  const toggle = getByText(/close gate/i)
                  //closes gate 
                  await fireEvent.click(toggle)
                  // button changes to open
                  getByText(/open gate/i)
                  //opens gate
                  await fireEvent.click(toggle)
                  //button changes to close
                  getByText(/close gate/i)
            })
      })

      describe('lock/unlock toggle', () => {
            it('should lock, from initial unlocked state, when button is clicked', async () => {
                  //gate is unlocked so button should say 'lock'
                  const { getByText } = render(<Dashboard />)
                  const toggle = getByText(/lock gate/i)
                  // lock the gate
                  await fireEvent.click(toggle)
                  //button changes to unlock
                  getByText(/unlock/i)
                  
            })
            it('should unlock after locking', async () => {
                  const { getByText } = render(<Dashboard />)
                  const toggle = getByText(/lock gate/i)
                  //locks the gate
                  await fireEvent.click(toggle)
                  //button changes to unlock
                  getByText(/unlock/i)
                  //unlocks the gate
                  await fireEvent.click(toggle)
                  //button changes to lock
                  getByText(/lock gate/i)

            })
      })

})