import React from 'react';
import { shallow } from 'enzyme';
import RecipiesList from './RecipiesList';


it('renders without crashing', () => {
    shallow(<RecipiesList recipiesList={recipies}/>);
});