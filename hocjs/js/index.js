let users = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
  },

  {
    id: 2,
    name: "Nguyễn Văn B",
    email: "nguyenvanb@example.com",
  },

  {
    id: 3,
    name: "Nguyễn Văn C",
    email: "nguyenvanc@example.com",
  },

  {
    id: 4,
    name: "<b>Nguyễn Văn</b> D",
    email: "nguyenvand@example.com",
  },
];

console.log(users);

//1. Tạo đối tượng html (document.querySelector)

const tbody = document.querySelector("tbody");

// let html = "";

// if (users.length) {
//   users.forEach(({ name, email }) => {
//     html += `<tr>
//         <td>${name}</td>
//         <td>${email}</td>
//         <td><button class="btn btn-warning">Sửa</button></td>
//         <td><button class="btn btn-danger">Xóa</button></td>
//         </tr>`;
//   });
// }

// tbody.innerHTML = html;

const renderUsers = (users) => {
  tbody.innerText = "";
  if (users.length) {
    //reset tbody

    users.forEach(({ id, name, email }) => {
      const tr = document.createElement("tr"); //Tạo thẻ tr

      //Tạo thẻ td (cột Name)
      const tdName = document.createElement("td");
      tdName.innerText = name;

      tr.appendChild(tdName);

      //Tạo thẻ td (Cột email)
      const tdEmail = document.createElement("td");
      tdEmail.innerText = email;

      tr.appendChild(tdEmail);

      //Tạo thẻ td (Cột edit)

      const tdEdit = document.createElement("td");

      //Tạo button edit
      const btnEdit = document.createElement("button");
      btnEdit.innerText = "Sửa";
      btnEdit.classList.add("btn", "btn-warning");

      //Thêm sự kiện cho button edit
      btnEdit.addEventListener("click", () => {
        handleEdit(id);
      });

      tdEdit.appendChild(btnEdit);

      tr.appendChild(tdEdit);

      //Tạo thẻ td (Cột delete)

      const tdDelete = document.createElement("td");

      //Tạo button delete
      const btnDelete = document.createElement("button");
      btnDelete.innerText = "Xóa";
      btnDelete.classList.add("btn", "btn-danger");

      //Thêm sự kiện cho button delete
      btnDelete.addEventListener("click", () => {
        handleDelete(id);
      });

      tdDelete.appendChild(btnDelete);

      tr.appendChild(tdDelete);

      //Đẩy tất cả các tr vào tbody
      tbody.appendChild(tr);

      //console.log(tr);
    });
  } else {
    tbody.innerHTML = `<tr><td colspan="4" class="text-center">Không có dữ liệu</td></tr>`;
  }
};

const handleEdit = (id) => {
  alert("Bạn muốn sửa: " + id);
};

const handleDelete = (id) => {
  if (confirm("Bạn có chắc chắn muốn xóa")) {
    //Xử lý xóa
    // const index = users.findIndex((user) => user.id === id);
    // if (index !== -1) {
    //   users.splice(index, 1);
    //   console.log(users);
    //   renderUsers(users);
    // }

    users = users.filter((user) => user.id !== id);
    renderUsers(users);
  }
};

renderUsers(users);
