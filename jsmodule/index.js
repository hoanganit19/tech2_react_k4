// import home from "./modules/home.js";

// const { a, b } = home;

// console.log(a, b);

//import React, {useRef, useState} from "react";

//import getMessage, { a, b, User } from "./modules/home.js";

// console.log(getMessage());
// console.log(a, b);
// const user = new User();
// console.log(user);

import * as home from "./modules/home.js";

const { default: getMessage, a, b, User } = home;

console.log(getMessage());
console.log(a, b);
console.log(User);
