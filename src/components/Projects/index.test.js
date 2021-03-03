import React from 'react';
import '../../setupTests';
import Projects from './index';
import {render, screen} from '@testing-library/react'

test('Projects rendered correctly.', ()=>{
    render(<Projects/>);
    expect(screen.getByText("Projects")).toBeInTheDocument();
});