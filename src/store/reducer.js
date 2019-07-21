let intialState = [
    {email: "makwana.kaushik98@gmail.com", password: "1", gender: "male", hobbies: ['Reading','Dance'], country: "India"},
    {email: "makwaa.kaushik98@gmail.com", password: "1", gender: "male", hobbies: ['Reading','Dance'], country: "India"},
    {email: "makna.kaushik98@gmail.com", password: "1", gender: "male", hobbies: ['Reading','Dance'], country: "India"},
    {email: "mawana.kaushik98@gmail.com", password: "1", gender: "male", hobbies: ['Reading','Dance'], country: "India"},
    {email: "mkwana.kaushik98@gmail.com", password: "1", gender: "male", hobbies: ['Reading','Dance'], country: "India"},
    {email: "akwana.kaushik98@gmail.com", password: "1", gender: "male", hobbies: ['Reading','Dance'], country: "India"},
];

const reducer = (state = [], action) => {
    //Payload will have all information about new user like intialState 
    if(action.type === 'ADD_Student' )
    {
        return state.concat([action.data]);
    }
    // Payload will have array of emailids of students to be deleted
    if(action.type === 'DELETE_Students' )
    {
        let dltStudents = action.data;
        for(let i=0; i<dltStudents.length;i++){
            state = state.filter( e => e.email !==dltStudents[i])
        }
        return state;

    }
    //Payload will have updateed data so will remove previous entry and concat new data 
    if(action.type === 'Update_Student' )
    {
        console.log(action.data);
        state = state.filter( e => e.email !== action.data.email );
        state = state.concat(action.data);
        console.log(state);
        return state;
    }
    // default
    else{
        return state
    }    
    
}

export default reducer;