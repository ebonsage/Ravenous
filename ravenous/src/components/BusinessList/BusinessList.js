import React from 'react';
import { Business } from '../Business/Business';
import './BusinessList.css';




export class BusinessList extends React.Component {

    render() {
        return (
            <div>
                <div className="BusinessList">
                    <Business />
                    <Business />
                    <Business />
                    <Business />
                    <Business />
                    <Business />
                </div>
            </div>
        );
    }
}






