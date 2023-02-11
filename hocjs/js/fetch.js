const apiUrl = `http://localhost:3000/customers/1`;

// const getCustomers = fetch(apiUrl);

// getCustomers
//   .then((response) => {
//     console.log(response);
//     //Quyết định dữ liệu trả về thuộc kiểu json hay text
//     return response.json(); //response.text()
//   })
//   .then((customers) => {
//     console.log(customers);
//     //Lấy được dữ liệu từ api => render dom
//   });

// //promise chaining

const getCustomers = async () => {
  //Luôn trả về 1 promise
  const response = await fetch(apiUrl); //then thứ 1
  const customers = await response.json(); //then thứ 2

  //render ra dom
  console.log(response);
  console.log(customers);

  //return customers;
};

getCustomers();

//IIFE
