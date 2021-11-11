import React from 'react';
import { shallow } from 'enzyme';
import TabsList from './TabsList';

it('renders without crashing', () => {
    shallow(<TabsList tabsList={[]}/>);
});