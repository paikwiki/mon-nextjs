/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'

import App from '../pages/index.js'
import Nav from '../components/Navigation'

describe('Show index.js', () => {    
    it('App shows navigation', () => {
        const app = shallow(<App />)
        expect(app.containsMatchingElement(<Nav />)).toBeTruthy();
    });
})