const students = [
{ last: 'Aultz',
first: 'Aaron'
},
{ last: 'Banda',
first: 'Tamanda'
},
{ last: 'Bangerter',
first: 'Ryland'
},
{ last: 'Boss',
first: 'Seth'
},
{ last: 'Castro',
first: 'Daniel'
},
{ last: 'Christensen',
first: 'Connor'
},
{ last: 'Cockrum',
first: 'Mason'
},
{ last: 'Crisp',
first: 'Patrick'
},
{ last: 'Earl',
first: 'John'
},
{ last: 'Earl',
first: 'Joseph'
},
{ last: 'Earl',
first: 'Micah'
},
{ last: 'Giard',
first: 'Will'
},
{ last: 'Hansen',
first: 'Justin'
},
{ last: 'Harris',
first: 'Cole'
},
{ last: 'Harris',
first: 'William'
},
{ last: 'Henrie',
first: 'Jacob'
},
{ last: 'Jenne',
first: 'Samantha'
},
{ last: 'Lamer',
first: 'Kian'
},
{ last: 'Lee',
first: 'Ryan'
},
{ last: 'Madson',
first: 'Isaac'
},
{ last: 'Merrell',
first: 'Noah'
},
{ last: 'Miller',
first: 'Raquel'
},
{ last: 'Moncada',
first: 'Joshua'
},
{ last: 'Montoya Ugarte',
first: 'Alan'
},
{ last: 'Nielson',
first: 'Jesse'
},
{ last: 'Palmer',
first: 'Benjamin'
},
{ last: 'Platt',
first: 'Jaeden'
},
{ last: 'Quizon',
first: 'MJ'
},
{ last: 'Schmitz',
first: 'Emma'
},
{ last: 'Sheffer',
first: 'Darren'
},
{ last: 'Skousen',
first: 'Brian'
},
{ last: 'Smith',
first: 'Emory'
},
{ last: 'Kasapo',
first: 'Tyra'
},
{ last: 'Taylor',
first: 'Austin'
},
{ last: 'Tunquist',
first: 'Thomas'
},
{ last: 'Ukpong',
first: 'Robin'
},
{ last: 'Volmer',
first: 'Zachery'
},
{ last: 'Wicks',
first: 'Andrew'
},
{ last: 'Williams',
first: 'Eton'
},
{ last: 'Yasa',
first: 'Manny'
}
];

// console.log(students[0].first)

let container = document.querySelector('#student_container');

students.forEach(function(item){
    // console.log(item.first);

    let name = document.createElement('section');
    name.setAttribute('class', 'format');

    let html = `
        <p>${item.first}</p>
        <p>${item.last}</p>
        <hr>
    `

    name.innerHTML= html;
    
    container.appendChild(name);
})