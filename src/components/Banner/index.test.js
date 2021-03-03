import React from 'react';
import Banner from './index';
import {render, screen} from '@testing-library/react'

test('Banner rendered correctly.', ()=>{
    render(<Banner/>);
    expect(screen.getByText("I'm a Web Developer.")).toBeInTheDocument();
});