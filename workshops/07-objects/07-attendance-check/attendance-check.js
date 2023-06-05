let classRoom = [
  {
    Marnie: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: true },
      { Thursday: true },
      { Friday: true },
    ],
  },
  {
    Lena: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: true },
      { Thursday: false },
      { Friday: true },
    ],
  },
  {
    Shoshanna: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: false },
      { Thursday: true },
      { Friday: false },
    ],
  },
  {
    Jessa: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: false },
      { Thursday: false },
      { Friday: true },
    ],
  },
];

// YOUR CODE BELOW
function attendanceCheck(day) {
  let attendance = [];
  for (let i = 0; i < classRoom.length; i++) {
    let pop = classRoom[i];
    for (let x in classRoom[i]) {
      let p = pop[x];
      for (let k = 0; k < p.length; k++) {
        if (p[k][day]) {
          attendance.push(x);
          //here print the names
        }
      }
    }
  }
  //   console.log(attendance);
  return attendance;
}

attendanceCheck("Wednesday");
