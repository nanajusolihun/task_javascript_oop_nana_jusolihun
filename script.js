class Table {
  constructor(user) {
    this.user = user;
  }

  buatHeader(data) {
    let open = "<thead><tr>";
    let close = "</tr></thead>";
    data.forEach((d) => {
      open += `<th>${d}</th>`;
    });
    return open + close;
  }

  buatBody(data) {
    let open = "<tbody>";
    let close = "</tbody>";
    data.forEach((d) => {
      open += `
      <tr>
        <td>${d[0]}</td>
        <td>${d[1]}</td>
        <td>${d[2]}</td>
        <td>${d[3]}</td>
      </tr>
      `;
    });
    return open + close;
  }
  render (element) {
    let table =
    "<table class='table table-hover'>" +
    this.buatHeader(this.user.columns) +
    this.buatBody(this.user.data) +
    "</table>";
    element.innerHTML = table;
  }
}

const table = new Table({
  columns: ["ID", "Name", "Position", "Email"],
  data: [
    ["10001", "Jusolihun", "Front End", "jusolihun@gmail.com"],
    ["10002", "Maulida", "Back End", "maulida@gmail.com"],
    ["10003", "El Rahma", "UI / UX", "ramhalel@gmail.com"],
    ["10004", "Putri", "Marketing", "putri@gmail.com"],
  ]
});

const app = document.getElementById("wrapper");
table.render(app);