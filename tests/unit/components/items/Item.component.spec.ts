import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import { IItem } from '@/models/items/IItem'
import ItemComponent from '@/components/items/children/Item.component.vue'

describe('Item.component.vue', () => {
  it('renders main model properties correctly', () => {
    const model: IItem = {
      id: 1,
      name: 'Unit test item 1',
      selected: false
    }

    const wrapper = shallowMount(ItemComponent, {
      propsData: {
        model: model
      }
    })

    // this is not very precise as we are checking if the whole rendered text contains our model.name:
    expect(wrapper.text()).to.include('Unit test item 1')

    // this is more precise as we are selecting the div with the class name and check if it rendered the correct text
    let domEl = wrapper.find('div.name')

    expect(domEl.text()).to.equal('Unit test item 1')

    // NOTE: if you prefer you can use model.name here instead of hard coding the expected result:
    // i.e.: expect(domEl.text()).to.equal(model.name)
  })

  it('has expected css class when selected is false', () => {
    const model: IItem = {
      id: 1,
      name: 'Unit test item 1',
      selected: false
    }

    const wrapper = shallowMount(ItemComponent, {
      propsData: {
        model: model
      }
    })

    const classes = wrapper.classes()
    expect(classes)
      .to.be.an('array')
      .that.includes('item')
    expect(classes)
      .to.be.an('array')
      .that.does.not.includes('selected')
  })

  it('has selected css class when selected is true', () => {
    const model: IItem = {
      id: 1,
      name: 'Unit test item 1',
      selected: true /* setting selected = true here */
    }

    const wrapper = shallowMount(ItemComponent, {
      propsData: {
        model: model
      }
    })

    const classes = wrapper.classes()
    expect(classes)
      .to.be.an('array')
      .that.includes('item')
    expect(classes)
      .to.be.an('array')
      .that.includes('selected')
  })
})
