import React from 'react';
import Experiences from './index';
import {render, screen} from '@testing-library/react'

test('Experiences rendered correctly.', ()=>{
    render(<Experiences/>);
    expect(screen.getByText("Careers")).toBeInTheDocument();
    expect(screen.getByText("Educations")).toBeInTheDocument();
});