import { shallow } from 'enzyme'
import Filter from './Filter'
it("renders without props", () => {
    shallow(<Filter />);
})
it("accepts props", () => {
    let props = {
        showReset: false,
        onApply: () => { },
        onReset: () => { },
        inputList: []
    }
    shallow(<Filter {...props} />)
})

