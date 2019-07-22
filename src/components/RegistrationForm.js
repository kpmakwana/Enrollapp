import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        if(this.props.StudentsDetails.find(e=>e.email === email)){
            document.getElementById('err-email').innerHTML='This email is already registerd';
            document.getElementById('err-email').style.display='block';
            console.log("Student already exsits");
        }
        else{
            return true;
        }
       }
    }
   validatePassword = (pw1, pw2) =>{
        if(pw1.length===0){
            document.getElementById('pwd-empty').style.display='block';
        }
        if(pw1===pw2){
            return true;
        }    
        else{
            document.getElementById('pwd-match').style.display='block';
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
            this.validatePassword(password, data.repassword.value) &&
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
                    type:'ADD_Student',
                    data: studentDetails
                });  
                window.confirm('Thanks for enrolling!!');
                document.getElementById('my-form').reset();
            })
            
    }
    
    
}
    
    render() {
    return (
        <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
            <form  className="pb-5" id="my-form" onSubmit={this.onSubmit}>
            <p className="h4 mb-4 text-center">Student Information Form</p>
            <div className="form-group row">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                <input type="email" 
                className="form-control" 
                name="email" 
                placeholder="Email" 
                onChange={this.onInputChange}
                />
                <div className="error" id='err-email'>Please provide email ID </div>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                <input type="password" className="form-control" name="password"  placeholder="Password" onChange={this.onInputChange} />
                <div className="error" id="pwd-empty">Password can't be empty</div>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Confirm Password</label>
                <div className="col-sm-10">
                <input type="password" className="form-control" name="repassword" placeholder="Password"  onChange={this.onInputChange}/>
                <div className="error" id="pwd-match">Passwords didn't matched</div>
                </div>
            </div>
            <fieldset className="form-group">
                <div className="row">
                <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                <div className="col-sm-10">
                    <div className="form-check-inline">
                    <input className="form-check-input" type="radio" name="gender" id="gridRadios1" value="male" onChange={this.onInputChange}  />
                    <label className="form-check-label" htmlFor="gridRadios1">
                        Male
                    </label>
                    </div>
                    <div className="form-check-inline">
                    <input className="form-check-input" type="radio" name="gender" id="gridRadios2" value="female" onChange={this.onInputChange} />
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
                    <input className="form-check-input" type="checkbox" name="hobby" value="Reading" onChange={this.onInputChange} />
                    <label className="form-check-label" htmlFor="gridCheck1">
                    Reading
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="hobby" value="traveling" onChange={this.onInputChange}  />
                    <label className="form-check-label" htmlFor="gridCheck1">
                    Traveling
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="hobby"  value="Music" onChange={this.onInputChange} />
                    <label className="form-check-label" htmlFor="gridCheck1">
                    Music
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="hobby" value="Dance" onChange={this.onInputChange} />
                    <label className="form-check-label" htmlFor="gridCheck1">
                    Dance
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="hobby" value="Gaming" onChange={this.onInputChange} />
                    <label className="form-check-label" htmlFor="gridCheck1">
                    Gaming
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="hobby" value="Swimming" onChange={this.onInputChange} />
                    <label className="form-check-label" htmlFor="gridCheck1">
                    Swimming
                    </label>
                </div>
                </div>
            </div>
            <div className="form-group row mt-3">
            <div className="col-sm-2">Country</div>
            <div className="col-sm-10">
            <select className="form-control col-sm-2" name='country'>
                <option>India</option>
                <option>USA</option>
                <option>Japan</option>
                <option>China</option>
                <option>Other</option>
            </select>
            </div>
            </div>
            
            <div className="form-group row">
                <div className="col-sm-10 m-auto" >
                <button type="submit" className="btn btn-primary btn-block">Enroll</button>
                </div>
            </div>
            </form>


        </div>
    )
}



}


const mapStateToProps = (state) => {
    return {
        StudentsDetails: state
    }
}

export default  connect(mapStateToProps)(StudentForm);