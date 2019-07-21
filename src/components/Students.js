import React, { Component } from 'react'
import { connect } from 'react-redux';
import Post from './Details'
class Students extends Component {
   
    DeleteStudents = () =>{
        let students = document.getElementsByClassName('std-select');
        let deleteStudents = [];
        for( let i= 0 ;i<students.length; i++){
            if(students[i].checked)
            {
                deleteStudents.push(students[i].value)
            }
        }
        if(deleteStudents.length === 0){
            alert('Please selcect students to delete')
        }
        this.props.dispatch({
            type:'DELETE_Students',
            data: deleteStudents
        });
       // console.log(deleteStudents);

    }
    render() {
        if(this.props.StudentsDetails.length === 0)
        {
            return(
                <div>
                    <p className="h4 mb-4 pt-2 text-center">No one has registered yet!!</p>
                </div>
            )
        }
        else{

            return (
                <div>
                <p className="h4 mb-4 pt-4 text-center">Students Details</p>
                
                <table className="table" >
                <thead>
                    <tr>
                        <th scope="col">Select</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Nationality</th>
                        <th scope="col">Update info</th>
                    </tr>
                </thead>
                
                
                {this.props.StudentsDetails.map(
                    (post)=> <Post key={post.email} details={post} />
                    )}
            
                </table>
                <button type="button" style={{marginLeft: "45%"}} className="btn btn-danger" onClick={this.DeleteStudents}>Delete Selected</button>

            </div>
        )
    }
}
}


const mapStateToProps = (state) => {
    return {
        StudentsDetails: state
    }
}



export default  connect(mapStateToProps)(Students);