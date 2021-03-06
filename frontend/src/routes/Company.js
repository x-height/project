import React, { Component } from 'react';
import Card from '../components/Card';
import axios from 'axios';
import './Company.css';

class Company extends Component {
    constructor() {
        super();
        this.state = {
            companyArray : [],
            type : '전체'
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleCategory = this.handleCategory.bind(this);
        this.handleFront = this.handleFront.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleApp = this.handleApp.bind(this);
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
    handleClick(company_id) {
        this.props.history.push(`/company/${company_id}`)
    }
    handleCategory(e) {
        this.setState({
            type : e.target.innerHTML
        });
    }
    handleFront() {
        this.props.history.push(`/company/front`);
    }
    handleBack() {
        this.props.history.push(`/company/back`);
    }
    handleApp() {
        this.props.history.push(`/company/app`);
    }
    render() {
        const {companyArray} = this.state;
        // const newArray = companyArray.filter((v) => {
        //     if (type === '전체') {
        //         return v;
        //     }
        //    return v.type === type;
        // });
        const list = companyArray.map((v) => {
            return (
                <Card
                    cardLink = {this.handleClick}
                    key={v.id}
                    company_id={v.id}
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
                <ul className="category">
                    <li onClick={this.handleCategory}>전체</li>
                    <li onClick={this.handleFront}>프론트엔드개발자</li>
                    <li onClick={this.handleBack}>백엔드개발자</li>
                    <li onClick={this.handleApp}>앱개발자</li>
                </ul>
                <div className="list">
                    {list}
                </div>
            </div>
        );
    }
}

export default Company;