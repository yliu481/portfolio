import React from 'react';
import Skills from './index';
import Skill from './Skill';
import {render, screen} from '@testing-library/react'

test('Skills rendered correctly.', ()=>{
    render(<Skills/>);
    expect(screen.getByText("Skills")).toBeInTheDocument();
});

test('Skill rendered correctly', ()=>{
    render(<Skill skill = {{
        name:'Test',
        score:90
    }}/>);
    expect(screen.getByText('Test')).toBeInTheDocument();
});