import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
class StudentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
             email:'',
             password:'',
             gender:'',
             hobbies:[],
             country:''
        }
    }

   validateEmail = (email) =>{
       if(email.length===0)
       {
        document.getElementById('err-email').style.display='block';
       }
       else{
            return true;
        }
    }
   validatePassword = (pw1) =>{
        if(pw1.length===0){
            document.getElementById('pwd-empty').style.display='block';
        }
        else{
            return true;
        }
    }

   validateGender = (gender) =>{
        if(gender.length===0){
            document.getElementById('err-gender').style.display='block';   
        }
        else{
            return true;
        }
    }
   validateHobby = (hobbies) =>{
        if(hobbies.length>1){
           return true;
        }
        else{
            document.getElementById('err-hobby').style.display='block';
        }        
    }
   validateCountry = (country) =>{
        if(country.length !==0)
        return true;
   }
   onInputChange = ()=>{
        let x = document.getElementsByClassName('error');
        for(var i=0; i<x.length; i++){
           x[i].style.display='none'; 
        }
    }
    onSubmit = (e) =>{
        e.preventDefault();
        let data= e.target;
        let email= data.email.value;
        let password= data.password.value;
        let gender = data.gender.value;
        let hobbies = [];
        data.hobby.forEach(e => {
                if(e.checked)
                hobbies.push(e.value) ;
        });
        let country = data.country.value;
        if(
            this.validateEmail(email) && 
            this.validatePassword(password) &&
            this.validateGender(gender) &&
            this.validateHobby(hobbies) &&
            this.validateCountry(country)
        )
        {
            this.setState({
                email,
                password,
                gender,
                hobbies,
                country
                },
                ()=>{ //callback function from state state
                const studentDetails = {...this.state};            
                // dispatch action to add new student in the list
                this.props.dispatch({
                    type:'Update_Student',
                    data: studentDetails
                });  
                if(window.confirm('Thanks Record has been updated!!')){
                    this.props.history.replace("/details")
                }
            })
            
    }    
}

componentDidMount() {
        if(this.props.location.hobbies){

            this.props.location.hobbies.map(
                h =>  document.getElementById(h).checked='true'
                )
        }
}


    
    render() {
    if(this.props.location.email){
    return (
        <div>
            <form  className="pb-5" id="my-form" onSubmit={this.onSubmit}>
            <p className="h4 mb-4 text-center">Update Student Information</p>
            <div className="form-group row">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                <input type="email" 
                className="form-control" 
                name="email" 
                placeholder="Email" 
                onChange={this.onInputChange}
                defaultValue={this.props.location.email}
                readOnly
                />
                <div className="error" id='err-email'>Please provide email ID </div>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                <input type="text" 
                className="form-control" 
                name="password"  
                placeholder="Password" 
                onChange={this.onInputChange} 
                defaultValue={this.props.location.password}
                />
                <div className="error" id="pwd-empty">Password can't be empty</div>
                </div>
            </div>
            <fieldset className="form-group">
                <div className="row">
                <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                <div className="col-sm-10">
                    <div className="form-check-inline">
                    <input className="form-check-input" type="radio" name="gender" defaultChecked={(this.props.location.gender==='male')} value="male" onChange={this.onInputChange}  />
                    <label className="form-check-label" htmlFor="gridRadios1">
                        Male
                    </label>
                    </div>
                    <div className="form-check-inline">
                    <input className="form-check-input" type="radio" name="gender" id="gridRadios2" defaultChecked={(this.props.location.gender==='female')} value="female" onChange={this.onInputChange} />
                    <label className="form-check-label" htmlFor="gridRadios2">
                        Female
                    </label>
                    </div>
                    <div className="error" id="err-gender">Please select appropriate option</div>
                </div>
                </div>
            </fieldset>
            <div className="form-group row">
                <div className="col-sm-2">Hobbies</div>
                <div className="col-sm-10">
                <div className="error" id="err-hobby">Please select atleast 2 of them</div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="hobby" value="Reading" id='Reading' onChange={this.onInputChange} />
                    <label className="form-check-label" htmlFor="gridCheck1">
                    Reading
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="hobby" value="traveling" id='traveling' onChange={this.onInputChange}  />
                    <label className="form-check-label" htmlFor="gridCheck1">
                    Traveling
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="hobby"  value="Music" id='Music' onChange={this.onInputChange} />
                    <label className="form-check-label" htmlFor="gridCheck1">
                    Music
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="hobby" value="Dance" id='Dance' onChange={this.onInputChange} />
                    <label className="form-check-label" htmlFor="gridCheck1">
                    Dance
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="hobby" value="Gaming" id="Gaming" onChange={this.onInputChange} />
                    <label className="form-check-label" htmlFor="gridCheck1">
                    Gaming
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="hobby" value="Swimming" id='Swimming' onChange={this.onInputChange} />
                    <label className="form-check-label" htmlFor="gridCheck1">
                    Swimming
                    </label>
                </div>
                </div>
            </div>
            <div className="form-group row mt-3">
            <div className="col-sm-2">Country</div>
            <div className="col-sm-10">
            <select className="form-control col-sm-2" name='country' defaultValue={this.props.location.country}>
                <option >India</option>
                <option>USA</option>
                <option>Japan</option>
                <option>China</option>
                <option>Other</option>
            </select>
            </div>
            </div>
            
            <div className="form-group row">
                <div className="col-sm-10 m-auto" >
                <button type="submit" className="btn btn-primary btn-block">UPDATE</button>
                </div>
            </div>
            </form>


        </div>
    )
}
else{
    return(
        <Redirect to='/' />
    )
}
}



}


const mapStateToProps = (state) => {
    return {
        StudentsDetails: state
    }
}

export default  connect(mapStateToProps)(StudentForm);