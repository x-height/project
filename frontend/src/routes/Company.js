import React, { Component } from 'react';
import Card from '../components/Card';
import axios from 'axios';
import './Company.css';

class Company extends Component {
    constructor() {
        super();
        this.state = {
            companyArray : []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:4000/company')
        .then((response) => {
            const data = this.state.companyArray.concat(response.data.company);
            this.setState({
                companyArray : data
            });
        });
    }
    render() {
        const {companyArray} = this.state;
        const lost = companyArray.map((v) => {
            return (
                <card
                    key={v.id}
                    company={v.name}
                    recruit={v.recruit}
                    rebate={v.rebate}
                    recom={v.recommendation}
                    favorite={v.favorite}
                />
            );
        });
        return (
            <div>
                <div className="list">
                    {list}
                </div>
            </div>
        );
    }
}

export default Company;