// function in form
function resetForm(){
    document.getElementById('form').reset();
};
function showForm(){
    document.getElementById('formCreate').style.display = "flex";
};
function hideForm(){
    document.getElementById('formCreate').style.display = "none";
};
function getInformation(){
    let list = {};
    let students = document.getElementById('form').querySelectorAll('input');
    for (student of students){
        if (student.id === 'name'){
            list.name = student.value;
        }
        if (student.id === 'class'){
            list.class = student.value;
        }
        if (student.id === 'score'){
            list.score = student.value;
        }
        if (student.id === 'birth'){
            list.birth = student.value;
        }
        if (student.name === 'gender' && student.checked){
            list.gender = student.value
        }
        if (student.name === 'studentLabel' && student.checked){
            list.studentLabel = student.value;
        }
    }
    
    lists.push(list);
    displayList(lists);

};
function displayList(array){
    let studentLists = document.querySelectorAll('.studentList');
    if (studentLists.length > 0){
        studentLists[0].remove();
    }

    let studentList = document.createElement('div');
    studentList.className = "studentList";
    document.querySelector('.list').appendChild(studentList);
    for (item of array){
        
        let studentBox = document.createElement('div');
        studentBox.className = "studentBox";
        studentList.appendChild(studentBox);

        let label = document.createElement('div');
        label.className = "gradeLabel";
        if (item.studentLabel === 'no'){
            label.className += " no"
        }
        else if (item.studentLabel === 'little'){
            label.className += " little"
        }
        else if (item.studentLabel === 'need'){
            label.className += " need"
        }
        studentBox.appendChild(label);

        let itemBox = document.createElement('div');
        itemBox.className = "itemBox";
        studentBox.appendChild(itemBox);

        let profile = document.createElement('div');
        profile.className = 'profile';
        itemBox.appendChild(profile);
        
        let img = document.createElement('img');
        if (item.gender === 'male'){
            img.src = "image/male.png"
        }
        else if (item.gender === 'female'){
            img.src = "image/female.jpg"
        }
        profile.appendChild(img);

        let studentName = document.createElement('div');
        studentName.className = "studentName";
        studentName.textContent = item.name;
        itemBox.appendChild(studentName);

        let studentClass = document.createElement('div');
        studentClass.className = "studentClass";
        studentClass.textContent = item.class;
        itemBox.appendChild(studentClass);

        let studentScore = document.createElement('div');
        studentScore.className = "studentScore";
        studentScore.textContent = item.score;
        itemBox.appendChild(studentScore);
        
        let btn = document.createElement('button');
        btn.type = "reset";
        btn.className = "delete";
        itemBox.appendChild(btn);

        let icon = document.createElement('i');
        icon.className = "fa fa-close";
        btn.appendChild(icon);
    }
    
}
let lists = [
    {
        name: "Bella Swan",
        class: "A",
        score: "90",
        birth: "2021-05-05",
        gender: "female",
        studentLabel: "no",
    },
    {
        name: "Harry Potter",
        class: "B",
        score: "40",
        birth: "2021-05-05",
        gender: "male",
        studentLabel: "need",
    },
    {
        name: "Annabelle Wallis",
        class: "C",
        score: "65",
        birth: "2021-05-05",
        gender: "female",
        studentLabel: "little",
    },
];

// button in Form
let btnCloseForm = document.getElementById('closeForm');
btnCloseForm.addEventListener('click',hideForm)
let btnAddForm = document.getElementById('addForm');
btnAddForm.addEventListener('click',showForm);
let btnReset = document.getElementById('resetValue');
btnReset.addEventListener('click', resetForm);
let btnAddStudent = document.getElementById('addList');
btnAddStudent.addEventListener('click',getInformation);
//

// function in list of student
function removeItem(event) {
    let clickOn = event.target.className
    if(clickOn === 'delete'){
        event.target.parentElement.parentElement.remove();
    }
    else if(clickOn === 'fa fa-close'){
        event.target.parentElement.parentElement.parentElement.remove();
    }
}

//

// button in list of student
document.addEventListener('click',removeItem)
displayList(lists);
console.log(lists)