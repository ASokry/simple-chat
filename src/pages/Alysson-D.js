import React,{useState,useEffect} from 'react';
import './comment.css';
import * as firebase from 'firebase';
import { Button, Form, FormGroup, Input } from 'reactstrap';

export default function HomePage() {
  const [users,setUsers] = useState([]);
  const [idNum,setIdNum] = useState(0);
  const [userComment,setUserComment] = useState('');

  const [year, setYear] = useState('');
  const [months] = useState(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']);
  const [month, setMonth] = useState('');

  // console.log(year);
  function RandomString(leng) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < leng; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }

  useEffect(()=>{setYear(new Date().getFullYear())}, []);
  useEffect(()=>{setMonth(new Date().getMonth())}, []);
  function handleSubmit(event) {
    event.preventDefault();
    writeUserData();
  }

  function writeUserData() {
    readUser();
    
    let obj = {
        timeStamp: months[month] + " " + year,
        comment: userComment
    }
    firebase.database().ref('Alysson-D-comment/' + 'user' + idNum).set(obj);
  }

  useEffect(()=>{readUser()}, []);
  function readUser() {
    firebase.database().ref('Alysson-D-comment').on('value',(snapshot)=>{
        let temp = [];
        if(snapshot.val() != null) {
            for (const [key, value] of Object.entries(snapshot.val())) {
              temp[temp.length] = value;
            }
            setUsers(temp);
            if (temp.length < 10){
              setIdNum('0' + temp.length + RandomString(6));
            }else {
              setIdNum(temp.length + RandomString(6));
            }
        }
    })
  }

  //// Return HTML
  return (
    <div className="app">
      <div className="comment-box">
        {users && users.map((item,index)=>(
            <div key={index} className="comment"> 
                <h1>{item.comment}</h1>
                
                <h3>{item.timeStamp}</h3>
            </div>
        ))}
      </div>
      <div className="input-field">
        <Form onSubmit={(event)=>{handleSubmit(event)}}>
          <FormGroup>
            <Input name="text1" id="q3" type="textarea"
              placeholder="Comment Here!" 
              onChange={(event)=>{setUserComment(event.target.value)}}
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    </div>
  );
  ////
}
