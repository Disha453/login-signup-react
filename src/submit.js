import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';




const Form1 = () => {


    const navigate = useNavigate();
    const [data, setData] = useState({ fname: "", lname: "" })
    const [search, setSearch] = useState(JSON.parse(localStorage.getItem("d")) || []);

    function Info(e) {
        let { name, value } = e.target;
        setData({ ...data, [name]: value });
    }
    function Change(e) {
        setSearch([...search, data]);
        localStorage.setItem("d", JSON.stringify([...search, data]));
    }
    return (
        <>
            <div>
                <h1>Sing Up</h1>
                <form>
                    <label htmlFor='fname'>FIRST NAME:</label>
                    <input type="text" id="fname" name="fname" onChange={Info} onClick={Change} /><br /><br />
                    <label htmlFor='lname'>LAST NAME:</label>
                    <input type="text" id="lname" name="lname" onChange={Info} onClick={Change} /><br /><br />
                    <button type="button" htmlType="submit" onClick={() => navigate("/Submit")} >Submit</button><br /><br />
                </form>
            </div>
        </>
    )
}
export default Form1;