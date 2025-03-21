import React, { useState } from "react";
import DataTable from "react-data-table-component";
function DataT(){
    const columns = [
        {
            name: 'Name',
            selector: row=> row.name,
            sortable: true
        },
        {
            name: "email",
            selector: row=> row.email,
            sortable: true
        },
        {
            name: 'Age',
            selector: row=> row.age,
            sortable: true
        },
        {
            name: 'city',
            selector: row=> row.city,
            sortable: true
        },

        {
            name: 'occupation',
            selector: row=> row.occupation,
            sortable: true
        }

    ]

    const data = [
        { id: 1, name: "Yasir", email: "yasir@gmail.com", age: 23,city: "mirpur", occupation:" student" },
        { id: 2, name: "Khalid", email: "khalid@gmail.com", age: 25,city: "sukkur", occupation:" farmer" },
        { id: 3, name: "Mazari", email: "waseem@gmail.com", age: 21,city: "hyderabad", occupation:" teacher" },
        { id: 4, name: "Ali", email: "ali@gmail.com", age: 30, city: "mirpur", occupation:" student" },
        { id: 5, name: "Aisha", email: "aisha@gmail.com", age: 27,city: "mirpur", occupation:" student" }
    ]

    const[records,setrecords]= useState(data);
    const filterData = (e) => {
        const searchValue = e.target.value.toLowerCase();
        const filtered = data.filter(row =>
            row.name.toLowerCase().includes(searchValue) ||
            row.age.toString().includes(e.target.value) ||
            row.city.toString().includes(e.target.value)||
            row.occupation.toString().includes(e.target.value)


        );
        setrecords(filtered);
    };


    return(
        <div className="div">
            
            <input  type="text"
                placeholder="Search by name or age"
                onChange={filterData} name="filterinput"
                style={{ marginBottom: "10px", padding: "5px", width: "30%", marginLeft:"5px"}}/>
                <br />
             
            <select  onChange={filterData}  style={{ marginBottom: "10px", padding: "5px", width: "30%", marginLeft:"5px"}} name="select" id="select">
                <option value="" style={{color: "red"}}> search by city</option>
                <option value="sukkur"> sukkur</option>
                <option value="mirpur"> mirpur</option>
                <option value="hyderabad"> hyderabad</option>

            </select>
            <select onChange={filterData} style={{ marginBottom: "10px", padding: "5px", width: "30%", marginLeft:"5px"}} name="select2" id="select2">
                <option value="" style={{color: "red"}}> search by occupation</option>
                <option value="student"> student</option>
                <option value="farmer">farmer</option>
                <option value="teacher"> teacher</option>

            </select>
            <DataTable  columns={columns}
                data= {records} selectableRows fixedHeader>
               
            </DataTable>
        </div>
    )
}

export default DataT;