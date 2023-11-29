const students = {
    "01" : "Aabis",
    "03" : "Muhammad Mehdi",
    "04" : "Hammad Raza",
    "05" : "Alishan Raza",
    "06" : "Muhammad Qasim",
    "08" : "Qusain Mehdi",
    "09" : "Measum Abbas",
    "10" : "Muhammad Kumail",
    "12" : "Akhtar Hussain",
    "13" : "Rehman Abidi",
    "14" : "Shan Ali",
    "15" : "Hussain Raza",
    "16" : "Farasat Hussain",
    "17" : "Yawar Abbas",
    "18" : "Musawir Basheer",
    "19" : "Hussain Zaidi",
    "20" : "Ammar Zaidi",
    "21" : "Hasnain Zaidi",
    "23" : "Baqar Iftekhar",
    "24" : "Faiq"
}
const studentsWithBatch = {
    "F8-01" : "Aabis",
    "F8-03" : "Muhammad Mehdi",
    "F8-04" : "Hammad Raza",
    "F8-05" : "Alishan Raza",
    "F8-06" : "Muhammad Qasim",
    "F8-08" : "Qusain Mehdi",
    "F8-09" : "Measum Abbas",
    "F8-10" : "Muhammad Kumail",
    "F8-12" : "Akhtar Hussain",
    "F8-13" : "Rehman Abidi",
    "F8-14" : "Shan Ali",
    "F8-15" : "Hussain Raza",
    "F8-16" : "Farasat Hussain",
    "F8-17" : "Yawar Abbas",
    "F8-18" : "Musawir Basheer",
    "F8-19" : "Hussain Zaidi",
    "F8-20" : "Ammar Zaidi",
    "F8-21" : "Hasnain Zaidi",
    "F8-23" : "Baqar Iftekhar",
    "F8-24" : "Faiq"
}

// Scanner
const scanner = new Html5QrcodeScanner('reader', {
    qrbox: {
        width: 350,
        height: 350,
    },
    fps: 25,
});
scanner.render(success, error);
const rollNum = [];
function success(result) {
    document.getElementById('result').innerHTML = `
    <h2>Success!</h2>
    
    <h1>${studentsWithBatch[result]}</h1>
    `;
    rollNum.push(result);
}
function error(err) {
    console.error(err);
}

// This function works on button click
function viewResult(){
    // Remove Duplicate values from an array
    let presentStudents = Array.from(new Set(rollNum));
    console.log(presentStudents);    // ['F8-01', 'F8-02', 'F8-03']
    
    // Seperate Roll No and Batch No
    const onlyRoll = presentStudents.map((item) => {
        return item.split("-")
    })

    // Collect Names from Present Student Array
    const presentStudentsName = [];
    for(let i=0; i<presentStudents.length; i++) {
        presentStudentsName.push(onlyRoll[i][1]);
    }
    console.log(presentStudentsName);  // ['01', '02', '03']

    document.getElementById("tbody").innerHTML = presentStudents.map((item, index) => {
        return (`
            <tr id={index}>
                <th scope="col">${students[presentStudentsName[index]]}</th>
                <th scope="col">${presentStudentsName[index]}</th>
                <th scope="col">${onlyRoll[0][0]}</th>
                <th scope="col">${item}</th>
            </tr>`
        )
    })

    // Display the Table
    // document.getElementById("data").style.display = "block";
}