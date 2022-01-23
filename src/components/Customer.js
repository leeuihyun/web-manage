import React, { Component } from 'react';

export default class Customer extends Component {
  render() {
    return (
        <div>
            <CustomerProfile image = {this.props.image} id = {this.props.id} name = {this.props.name}></CustomerProfile>
            <CustomerInfo birthday = {this.props.birthday} gender = {this.props.gender} job = {this.props.job}></CustomerInfo>

        </div>
    );
  }
}

class CustomerProfile extends Component{
    render(){
        return(
            <div>
                <img src={this.props.image} alt="Profile" />
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends Component{
    render(){
        return(
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}