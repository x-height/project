import React, { Component } from 'react';
import Card from '../components/Card';

import './Company.css';


class Company extends Component {
    render() {
        const companyArray = [
            {
                position : "보안솔루션 담당자",
                company : "GS SHOP",
                rebate : {1000000},
                recom : {11},
                favorite : {0}
            },
            {
                position : "Web Frontend Software",
                company : "망고플레이트",
                rebate : {1000000},
                recom : {36},
                favorite : {1}
            }
        ]
        return (
            <div className="container">
<!--
                <Card
                    position="보안솔루션 담당자"
                    company="GS SHOP"
                    rebate={1000000}
                    recom={11}
                    favorite={0}
                />
                <Card
                    position="Web Frontend Software"
                    company="망고플레이트"
                    rebate={1000000}
                    recom={36}
                    favorite={1}
                />
-->
                <Card
                    position="Android Develop"
                    company="매스프레소"
                    rebate={1000000}
                    recom={0}
                    favorite={0}
                />
                <Card
                    position="iOS Develop"
                    company="매스프레소"
                    rebate={1000000}
                    recom={0}
                    favorite={0}
                />
            </div>
        );
    }
}

export default Company;