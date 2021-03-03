import React from 'react';
import AppBar from './index';
import {render, screen} from '@testing-library/react'

test('AppBar rendered correctly.', ()=>{
    render(<AppBar/>);
    expect(screen.queryByText('About')).toBeInTheDocument();
    expect(screen.queryByText('Experience')).toBeInTheDocument();
    expect(screen.queryByText('Projects')).toBeInTheDocument();
    expect(screen.queryByText('Skills')).toBeInTheDocument();
    expect(screen.queryByText('Contact')).toBeInTheDocument();
});