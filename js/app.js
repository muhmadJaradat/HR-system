'use strict';
let sum=0;
let myForm=document.getElementById('myForm');
let myTable=document.getElementById('myTable');

function Employee(name,email,department)
{
this.name=name;
this.email=email;
this.department=department;
this.employeeSalary=this.salary(100,500);
Employee.all.push(this);
}

Employee.all=[]

 Employee.prototype.salary =function(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

myForm.addEventListener('submit',getTheData);

function getTheData(e){
    e.preventDefault();
    let newEmployee=new Employee(e.target.name.value,e.target.email.value,e.target.department.value);
    localStorage.setItem('employee',JSON.stringify(Employee.all));
    window.location.reload();
}

if (myTable.hasChildNodes()){
    let trEl=myTable.appendChild(document.createElement('tr'));
    let tdE1=trEl.appendChild(document.createElement('td'));
    tdE1.textContent='Name';
    let tdE2=trEl.appendChild(document.createElement('td'));
    tdE2.textContent='Email';
    let tdE3=trEl.appendChild(document.createElement('td'));
    tdE3.textContent='Department';
    let tdE4=trEl.appendChild(document.createElement('td'));
    tdE4.textContent='Salary';
        }

        let right=document.getElementById('right');
        let pEl=right.appendChild(document.createElement('p'));

       

let localEmployeeData=JSON.parse(localStorage.getItem('employee'));
if (localEmployeeData!==null) {
    Employee.all=localEmployeeData;
}
for (let i = 0; i < Employee.all.length; i++) {
   let trEl=myTable.appendChild(document.createElement('tr'));
   let tdEl1=trEl.appendChild(document.createElement('td'));
   tdEl1.textContent=Employee.all[i].name;
   let tdEl2=trEl.appendChild(document.createElement('td'));
   tdEl2.textContent=Employee.all[i].email;
   let tdEl3=trEl.appendChild(document.createElement('td'));
   tdEl3.textContent=Employee.all[i].department;
   let tdEl4=trEl.appendChild(document.createElement('td'));
   tdEl4.textContent=Employee.all[i].employeeSalary;
   sum=sum+Employee.all[i].employeeSalary;

   
   pEl.textContent=`Total = ${sum}`;
}

if (sum===0) {
    pEl.style.border='unset'
    right.style.display='none'
}

