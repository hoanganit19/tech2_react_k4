//Es6 Javascript

/*
1. Biến: var, let, const

let: Có thể thay đổi được giá trị 

const: Không thể thay đổi giá trị (Hằng số)

let, const: 
- Chỉ hoạt động trong phạm vi scope ({})
- Trong 1 scope => Không khai báo nhiều lần

2. Spread operator
- Trải các nội dung trong array, object ra ngoài
- Sử dụng clone object, array (Giải quyết bài toán tham chiếu)

3. Destructuring

- Phá vỡ cấu trúc của Object, array

4. Rest Parameters: Định nghĩa hàm

5. Arrow Functions

6. Class

7. Import/Export
*/

// const getMessage = () => {
//   let a;
//   if (true) {
//     let a = 1;
//   }

//   console.log(a);
// };

// getMessage();

// const oldObj = {
//   name: "Hoàng An",
//   age: 30,
// };

// const newObj = {
//   address: "Hà Nội",
//   ...oldObj,
// };

// console.log(newObj);

// const customers = {
//   name: "An",
//   age: 30,
// };

// const users = JSON.parse(JSON.stringify(customers));
// users.name = "Tech2";

// console.log(customers);

// const customers = {
//   name: "Hoàng An",
//   age: 30,

//   phone: "0987654321",
//   email: "ychag@example.com",

//   address: "Hà Nội",
// };

// const { name: customerName, age = 30, address, ...rest } = customers;

// console.log(customerName, age, address);

// console.log(rest);

// const { email, phone } = rest;

// console.log(email, phone);

// const users = ["Hoàng An", 30];

// const [nameAbc, ageAbc] = users;

// console.log(nameAbc, ageAbc);

// const getTotal = (msg, ...args) => {
//   const total = args.reduce((total, number) => {
//     return total + number;
//   }, 0);

//   console.log(`${msg}${total}`);
// };

// getTotal("Tổng = ", 30, 20, 10, 5, 13, 89);

// const getMessage = (msg) => "Khóa học React JS: " + msg;

// console.log(getMessage("Tech2"));

class User {
  constructor(nameVal, ageVal) {
    console.log("Hàm này sẽ chạy đầu tiên");
    //Khai báo các thuộc tính
    this.name = nameVal;
    this.age = ageVal;
  }

  getName = () => {
    console.log(this);
    return this.name;
  };

  getAge() {
    return this.age;
  }
}

class Authentication extends User {
  constructor(nameVal) {
    super(nameVal, 35); //gọi constructor() của class User
    //Định nghĩa thêm các thuộc tính
    this.address = "Hà Nội";
  }

  getInformation = () => {
    console.log(this.getName() + " - " + this.getAge());
  };
}

const auth = new Authentication("A");

auth.getInformation();
