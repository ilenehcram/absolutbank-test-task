import React from 'react';
import Order from '../../../../../../api/models/orders/Order';
import Price from './Price';
import OrganisationView from './OrganisationView';
import PersonView from './PersonView';
import StatusList from './StatusList';

interface Props {
    order: Order;
    isHovered: boolean;
}

const OrderView: React.FC<Props> = props => 
    <div>
        <Price price={props.order.price}/>
        <OrganisationView organisation={props.order.organisation}/>
        {props.isHovered &&
            <>
                <StatusList statuses={props.order.statuses}/>
                <PersonView person={props.order.person}/>
            </>
        }
    </div>

export default OrderView;