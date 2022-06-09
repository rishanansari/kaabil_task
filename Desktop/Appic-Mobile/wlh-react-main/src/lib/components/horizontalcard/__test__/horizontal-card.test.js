import { mount } from "enzyme";

import HorizontalCard from '../HorizontalCard.js'
import { Label, Column2, IconLabel } from '../../../../App.js'

import editIcon from '../../assets/images/edit.svg'
import phone from '../../assets/images/phone.svg'
import email from '../../assets/images/email.svg'
import duedate from '../../assets/images/time.svg'
import logout from '../../assets/images/logout.svg'
import appclients from '../../assets/images/appclients.svg'
import roles from '../../assets/images/roles.svg'
import nodes from '../../assets/images/nodes.svg'

//1) check the rendering of shallow and mount Horizontal Card component
describe('Test HorizontalCard component', () => {
    let horizontalcard

    beforeEach(() => {
        horizontalcard = mount(
            <HorizontalCard
                data={[
                    {
                        component: <Label content={{ primaryLabel: 'John Doe', secondaryLabel: '#user_id_1' }} />
                    },
                    {
                        component: <Column2 content1={[
                            {
                                icon: email, label: 'john.doe@gmail.com'
                            },
                            {
                                icon: phone, label: '+12162337891'
                            }]}
                            content2={[
                                {
                                    icon: duedate, label: '15/07/2021'
                                },
                                {
                                    icon: logout, label: '08:30 PM 13/07/2021'
                                }
                            ]} />
                    },
                    {
                        component: <IconLabel content={{ iconComponent: editIcon, label: 'Edit' }} />
                    },
                    {
                        component: <IconLabel content={{ iconComponent: appclients, label: '2 Appclients' }} />
                    },
                    {
                        component: <IconLabel content={{ iconComponent: roles, label: '2 Roles' }} />
                    },
                    {
                        component: <IconLabel content={{ iconComponent: nodes, label: '3 Nodes' }} />
                    },
                ]}
                colorCode="#E01E37"
                backgroundOpacityValue="rgba(0, 174, 80, 0.04)"
            //backgroundOpacityValue="rgba(224, 30, 55, 0.04)"
            />
        )
    })


    //2) should have prop data with [] 
    it('should have a prop "data" with a value of []', () => {
        expect(horizontalcard.find(HorizontalCard).props().data).toEqual([{
            component: <Label content={{ primaryLabel: 'John Doe', secondaryLabel: '#user_id_1' }} />
        },
        {
            component: <Column2 content1={[
                {
                    icon: email, label: 'john.doe@gmail.com'
                },
                {
                    icon: phone, label: '+12162337891'
                }]}
                content2={[
                    {
                        icon: duedate, label: '15/07/2021'
                    },
                    {
                        icon: logout, label: '08:30 PM 13/07/2021'
                    }
                ]} />
        },
        {
            component: <IconLabel content={{ iconComponent: editIcon, label: 'Edit' }} />
        },
        {
            component: <IconLabel content={{ iconComponent: appclients, label: '2 Appclients' }} />
        },
        {
            component: <IconLabel content={{ iconComponent: roles, label: '2 Roles' }} />
        },
        {
            component: <IconLabel content={{ iconComponent: nodes, label: '3 Nodes' }} />
        },
        ]);
    });

    //3)should have string prop 'data' with "hexcode "
    it('should have a prop "colorCode" with a value of hexcode', () => {
        expect(horizontalcard.find(HorizontalCard).props().colorCode).toEqual("#E01E37");
    });

    //4)should have string prop 'opacity' with "0.1 to 1" 
    it('should have a prop "backgroundOpacityValue" with a value of 0.1 to 1', () => {
        expect(horizontalcard.find(HorizontalCard).props().backgroundOpacityValue).toEqual("rgba(0, 174, 80, 0.04)");
    });

})