// courses.js
const aCourse = {
  code: "WDD131",
  name: "Javascript Language",
    sections: [
        {
            sectionNum: 1,
            roomNum: 'STC 353',
            enrolled: 26,
            days: 'TTh',
            instructor: 'Bro T'
        },
        {
            sectionNum: 2,
            roomNum: 'STC 221',
            enrolled: 28,
            days: 'TTh',
            instructor: 'Sis A'
        }
    ],
    enrollStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
        this.sections[sectionIndex].enrolled++;
        renderSections(this.sections);
        }
    },
    dropStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
        this.sections[sectionIndex].enrolled--;
        renderSections(this.sections);
        }
    }
};

document.querySelector('#enrollStudent').addEventListener('click', function(){
    const sectionNum = document.querySelector('#sectionNumber').value;
    aCourse.enrollStudent(sectionNum);
});

document.querySelector('#dropStudent').addEventListener('click', function(){
    const sectionNum = document.querySelector('#sectionNumber').value;
    aCourse.dropStudent(sectionNum);
});

console.log(aCourse.code);

console.log(aCourse.sections[1].roomNum);

document.querySelector('#courseName').textContent = aCourse.name;
document.querySelector('#courseCode').textContent = aCourse.code;

function sectionTemplate(section) {
  return `
  <tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td>
  </tr>`
}

function renderSections(sections) {
  const html = sections.map(sectionTemplate);
  document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);