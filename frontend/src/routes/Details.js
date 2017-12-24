import React, { Component } from 'react';
import axios from 'axios';
import './Details.css';

class Details extends Component {
    constructor() {
        super();
        this.state = {
            details : null
        }
    }
    componentDidMount() {
        const company_id = this.props.match.params.id;
        axios.get(`http://localhost:4000/company/${company_id}`)
        .then((response) => {
            this.setState({
                details : response.data
            });
        });
    }
    render() {
        const { details } = this.state;
        return (
            <div className="details">
                <div className="left">
                    <div className="photo"></div>
                    <div className="desc">
                        <div className="desc_info">
                            <h2>{details && details.recruit}</h2>
                            <div>{details && details.name}</div>
                        </div>
                        <div className="desc_body">
                            {details && details.name} 채용상세내용
                        </div>
                    </div>
                </div>
                <div className="right">
                    {details && details.recommendation} 추천
                </div>
            </div>
        );
    }
}

export default Details;