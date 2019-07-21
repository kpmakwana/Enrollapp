import React, { Component } from 'react';
import {Link}  from 'react-router-dom';

export default class Post extends Component {
    UpdateStudent = () =>{

    }
    render() {
        return (
            <tbody>
            <tr>
                <td>
                <input  type="checkbox" className='std-select' value={this.props.details.email} />
                </td>
                <td>
                    {this.props.details.email}
                </td>
                <td>
                    {this.props.details.password}
                </td>
                <td>
                    {this.props.details.gender}
                </td>
                <td>
                    {this.props.details.country}
                </td>
                <td>
                <Link
                to={{
                pathname: "/update",
                email: this.props.details.email,
                password: this.props.details.password,
                gender: this.props.details.gender,
                country: this.props.details.country,
                hobbies: this.props.details.hobbies,
                }}
                > UPDATE </Link>
                </td>
            </tr>
            </tbody>
            
        )
    }
}
