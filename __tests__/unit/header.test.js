/* eslint-env jest */

import { shallow } from 'enzyme'

import Nav from '../../components/Navigation'

describe('Navigation test', () => {
    it('Navigation have two items, item1 and item2', () => {
        const nav = shallow(<Nav />)
        const navItemTexts = ['item1', 'item2']

        const navItems = nav.find('li').children()

        navItems.forEach(function(val, idx) {
            expect(val.text()).toBe(navItemTexts[idx])
        })
    })
})