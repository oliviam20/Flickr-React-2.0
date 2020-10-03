import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App/App';

jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('Root index', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const img = document.createElement('img')
    ReactDOM.render(<App />, div);
    global.document.getElementById = (id) => id === 'root' && div
    expect(ReactDOM.render).toHaveBeenCalledWith(<App />, div);
  });
});
