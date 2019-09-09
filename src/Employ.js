import React,{ Component} from 'react';




export class Employ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Products:props.Productvalue
  };
  this.clickevent = this.clickevent.bind(this);

}
clickevent(){
  alert(JSON.stringify(this.props.empDetails));
}


    render(){
const {empDetails} = this.props;
console.log(empDetails);
        return (
          <form >
    <label>
      Empploye Id :
      <input type="text" name="empDetails" value={empDetails.EmployeId} onChange={this.props.empId} />
    </label><br/>
    <label>
      Empploye Name:
      <input type="text" name="name" value={empDetails.EmployeName} onChange={this.props.empName} />
    </label><br/>
    <label>
      Employe Salary:
      <input type="text" name="name" value={empDetails.EmployeSalary} onChange={this.props.empSalary} />
    </label><br/>
    <input  type="submit" value="click"  onClick={this.clickevent}/>
  </form>
        );
    }
}


export default Employ;
