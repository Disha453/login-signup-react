
import { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router';

function App() {
  const [student, setStudent] = useState({ fname: "", lname: "" })

  const [data, setData] = useState(JSON.parse(localStorage.getItem("d")) || [])
  const [loginData, setLoginData] = useState(JSON.parse(localStorage.getItem("t")) || [])
  const navigate = useNavigate()


  const hendelchange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value })
  }
  console.log(student)

  const hendelSubmit = () => {
    setData([...data, student]);
    const studentEmail = data.find((item) => item.fname === student.fname);
    console.log(studentEmail);

    const studentPass = data.find((item) => item?.lname === student?.lname);
    console.log(studentPass);


    if (studentEmail === studentPass) {
      window.alert('login')
      setLoginData([...loginData, data])
      localStorage.setItem("t", JSON.stringify([...loginData, data]));
      navigate('/submit')
    } else {
      window.alert('Back to Sign Up form.....!')
      navigate('/submit')
    }
  }
  console.log(data)


  return (
    <div>
      <div>
        <label htmlFor='fname'>FIRST NAME:</label>
        <input type='text' id='fname' name='fname' value={student.fname} onChange={(e) => hendelchange(e)} />
      </div>
      <div>
        <label htmlFor='lname'>LAST NAME:</label>
        <input type='text' id='lname' name='lname' value={student.lname} onChange={(e) => hendelchange(e)} />
      </div>
      <div>
        <button type='submit' onClick={hendelSubmit}>submit</button>
      </div>
    </div>
  );
}

export default App;
