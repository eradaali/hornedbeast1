import React, { Component,Form } from 'react'
import hornsData from './hornsData'
 class SelectHornes extends Component {
    render() {
        return (
            <div className="Container m-2,p-4">

               <select className="Custom_select" onChange={(e)}=>{
                let count=selectHorens.   
               }}>
                   <option  value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                   <option value="100">10</option>
                   
                   </select> 
                   <hornsData/>
            </div>
        )
    }
}

export default SelectHornes
