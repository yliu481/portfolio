import React from 'react';
import Profile from './index';
import {render, screen} from '@testing-library/react'

test('Profile rendered correctly.', ()=>{
    render(<Profile/>);
    expect(screen.getByText("About me")).toBeInTheDocument();
    expect(screen.getByText("More")).toBeInTheDocument();
});