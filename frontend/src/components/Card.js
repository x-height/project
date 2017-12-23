import React, { Component } from 'react';

const Card = (props) => {
    let classes = (props.favorite === 1) ? 'favorite active' : 'favorite';
//    let classes = '';
//    if (props.favorite === 1) {
//        classes = 'favorite active'
//    } else {
//        classes = 'favorite';
//    }
    return (
        <div>
            <div className="box">
                <div className="image">
                    <div className="icon"></div>
                </div>
                <h2>{props.position}</h2>
                <h3>{props.company}</h3>
                <p>채용보상금 {props.rebate.toLocaleString('en')}원</p>
                <div>
                    <p className="bar">{(props.recom > 0) && <span>{props.recom}명 추천</span>}</p>
                    <div className={props.favorite}></div>
                </div>
            </div>
        </div>
    );
}

export default Card;