import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Field from './Field';

Enzyme.configure({ adapter: new Adapter() });

let inputList = [{
    name: 'emailId',
    key: 'emailid',
    type: 'text',
    value: 'test@gmail.com',
    placeholder: 'Enter Email',
    onChange: () => { }
}, {
    name: 'userName',
    key: 'username',
    type: 'text',
    value: 'test',
    placeholder: 'Enter username',
    onChange: () => { }
},
{
    name: 'mobileNo',
    key: 'mobileNo',
    type: 'text',
    value: '1234567890',
    placeholder: 'Enter Mobile No',
    onChange: () => { }
},
{
    name: 'userStatus',
    key: 'userstatus',
    type: 'select',
    options: ['All', 'Active', 'Inactive'],
    value: 'Active',
    placeholder: 'User Active Status',
    onChange: () => { }
},
{
    name: 'mappedRole',
    key: 'mappedrole',
    type: 'select',
    options: ['All', 'Manager', 'Supervisor'],
    value: 'Manager',
    placeholder: 'Mapped Roles',
    onChange: () => { }
},
{
    name: 'mappedNode',
    key: 'mappednode',
    type: 'select',
    options: ['A', 'B', 'C'],
    value: 'B',
    placeholder: 'Mapped Nodes',
    onChange: () => { }
},
{
    name: 'dao',
    key: 'dao',
    type: 'checkbox',
    value: false,
    placeholder: 'DAO',
    onChange: () => { }
},
]

const simulateOnChange = (wrapper, selector, newVal) => {
    const input = wrapper.find(selector)
    input.simulate('change', {
        target: { value: newVal }
    })
}

it('test onChange handler', () => {

    let element = {
        name: 'emailId',
        key: 'emailid',
        type: 'text',
        value: 'test@gmail.com',
        placeholder: 'Enter Email',
        onChange: () => { }
    }
    const wrapper = shallow(<Field element={element} />)
    simulateOnChange(wrapper, '#emailid', 'test@gmail.com')
})

it('test onChange handler', () => {

    let element = {
        name: 'mappedRole',
        key: 'mappedrole',
        type: 'select',
        options: ['All', 'Manager', 'Supervisor'],
        value: 'Manager',
        placeholder: 'Mapped Roles',
        onChange: () => { }
    }
    const wrapper = shallow(<Field element={element} />)
    simulateOnChange(wrapper, '#mappedrole', 'Manager')
})

it('test onChange handler', () => {
    let element = {
        name: 'mappedNode',
        key: 'mappednode',
        type: 'select',
        options: ['A', 'B', 'C'],
        value: 'B',
        placeholder: 'Mapped Nodes',
        onChange: () => { }
    }
    const wrapper = shallow(<Field element={element} />)
    simulateOnChange(wrapper, '#mappednode', 'B')
})

it('test onChange handler', () => {
    let element = {
        name: 'userStatus',
        key: 'userstatus',
        type: 'select',
        options: ['All', 'Active', 'Inactive'],
        value: 'Active',
        placeholder: 'User Active Status',
        onChange: () => { }
    }
    const wrapper = shallow(<Field element={element} />)
    simulateOnChange(wrapper, '#userstatus', 'Active')
})

it('test onChange handler', () => {
    let element = {
        name: 'dao',
        key: 'dao',
        type: 'checkbox',
        value: false,
        placeholder: 'DAO',
        onChange: () => { }
    }
    const wrapper = shallow(<Field element={element} />)
    const input = wrapper.find('#dao')

    expect(input).toHaveLength(1);
    expect(input.props().checked).toBeTruthy;

    input.simulate('change', { target: { checked: false } });

    wrapper.update();

    expect(input.props().checked).toBeFalsy


})
