import React from 'react';
import { shallow } from 'enzyme';
import RecipiesList from './RecipiesList';


it('renders without crashing', () => {

    const recipies = [
        {"recipe":{
            "label": "Roasted Garlic Grilling Sauce",
            "image": "http:\/\/www.kraftfoods.com\/kf\/recipes\/roasted-garlic-grilling-sauce-56344.aspx",
            "healthLabels": ["garlic", "onions"," hot sauce"],
            "url": "http:\/\/img.recipepuppy.com\/634118.jpg"}
        }
    ]
    

    shallow(<RecipiesList recipiesList={recipies}/>);
});