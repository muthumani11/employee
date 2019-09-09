import React from 'react';
import Employ from './Employ';
import './App.css';

class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = { Employe :
                 {EmployeId: '001',
                  EmployeName: 'Mahesh',
                  EmployeSalary: '14000'} };

 this.EmplosId = this.EmplosId.bind(this);
 this.EmplosName = this.EmplosName.bind(this);
 this.EmplosSalary = this.EmplosSalary.bind(this);

 }


 EmplosId(e) {
   this.setState({Employe:{EmployeId: e.target.value}});
 }
 EmplosName(e) {
   this.setState({Employe:{EmployeName: e.target.value}});
 }
 EmplosSalary(e) {
   this.setState({Employe:{EmployeSalary: e.target.value}});
 }


 render() {
   return (

<div>

<h1> Employees Details </h1>

<Employ empDetails={this.state.Employe}
         empId={this.EmplosId}
         empName={this.EmplosName}
         empSalary={this.EmplosSalary} />



</div>

   );
 }
}

export default App;
