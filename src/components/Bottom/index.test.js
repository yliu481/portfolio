import React from 'react';
import Bottom from './index';
import {render, screen} from '@testing-library/react'

test('Bottom rendered correctly.', ()=>{
    render(<Bottom/>);
    expect(screen.getByText("Please contact me if I meet your expectation")).toBeInTheDocument();
});