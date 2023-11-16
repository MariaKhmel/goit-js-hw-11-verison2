//POST

// const BASIC_URL = 'https://jsonplaceholder.typicode.com/users'

// function fetchUsersById(userData) {
//     const options = {
//         'method': 'POST',
//         headers: {
//             'Content-Type': 'Application/JSON',
//         },
//         body: JSON.stringify(userData)
//     }

//     return fetch(`${BASIC_URL}`, options)
//         .then(response => response.json())
//         .then(users => console.log(users))
// }

// fetchUsersById({
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
// })

//PUT

// function putUserByID(newData, userId) {
//     const options = {
//         'method': 'PATCH',
//         headers: {
//             'Content-Type':'applocation/JSON',
//         },
//         body:JSON.stringify(newData)

//     }
//     return fetch(`${BASIC_URL}/${userId}`, options)
//         .then(res => res.json())
    
// }

// putUserByID({
//     id:2,
//     name: "aa",
//     username: "bb",
//     email: "cc",
// }, 2).then(user=>console.log(user))


//DELETE


// function deleteUserById(userId) {
//     const options = {
//         'method': 'DELETE',

//     };
//     return fetch(`${BASIC_URL}/${userId}`, options).then(res=>res.json())
// }
// deleteUserById(1);
// deleteUserById(8);

// Обработка ошибок с try...catch
//  - Синтаксис
//  - Какие ошибки ловит
//    - ❌ ошибки парсинга (parsing errors)
//    - ✅ ошибки выполнения (runtime errors)
//  - Ловит только ошибки в синхронном коде
//    - Как словить ошибку в асинхронном коде
//  - Объект ошибки
//    - name
//    - message
//    - stack
//  - Блок catch без объекта ошибки

// try {
//     console.log('Внутри try до myVar');

//     myVar;

//     console.log('Внутри try после myVar');
// } catch (error) {
//     console.log('Ошибка!');
// }

// console.log('После try...catch');
// try {
//     console.log('Внутри try до myVar');
//     myVar;
//     console.log('Внутри try после myVar');

// } catch (error) {
//     console.log(error);
// }

// const validJSON = '{ "name": "Манго", "age": 3 }';
// const invalidJSON = '{ invalid json }';

// try {
//     console.log(1);

//     console.log(JSON.parse(invalidJSON));

//     console.log(2);
// }
// catch (error) {
//   console.log(error);
// }

// console.log('После try...catch');


// Синтаксис async/await
// Последовательные операции
// Паралельные операции с Promise.all()
// try...catch

// function getFruit(name) {
//     const fruits = {
//         strawberry: '🍓',
//         kiwi: '🥝 ',
//         apple: '🍎',
//     };
    
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
            
//             return resolve(fruits[name]);
//         }, 500)
//     })

// }



// async function aMakeSmoothie(){
//     try {
//         const strawberry = await getFruit('strawberry');
//         const kiwi = await getFruit('kiwi');
//         const apple = await getFruit('apple');
//         const fruits = await Promise.all([apple, kiwi, strawberry]);
//         console.log(fruits);
//         return fruits;

//     }
//     catch(error) {
//      console.log(error);
// }
// }
// aMakeSmoothie();


// async function aMakeSmoothie() {
//     try {
//         console.time('aMakeSmoothie');
//         const apple = getFruit('apple');
//         const kiwi = getFruit('kiwi');
//         const berry = getFruit('strawberry');

//         const fruits = await Promise.all([apple, kiwi, berry]);
//         console.log(fruits);
//         console.timeEnd('aMakeSmoothie');

//         return fruits;
//     } catch (error) {
//         console.log('Ошибка');
//     }
// }



// async function fn () {}

// const fn  = async function () {}

// const arr = async () => {}

// const x = {
//   async getname () {}
// }

// class X {
//   async getName () {}
// }

////CRUD


// const BASE_URL = 'http://localhost:4040';

// async function addBook(book) {
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(book),
//     };

//     const response = await fetch(`${BASE_URL}/books`, options);
//     const newBook = await response.json();

//     return newBook;
// }

// async function addBookAndUpdateUI() {
//   try {
//     const book = await addBook({});
//     console.log(book);
//   } catch (error) {
//     console.log(error);
//   }
// }

// addBookAndUpdateUI();

// async function fetchBooks() {
//     const response = await fetch(`${BASE_URL}/books`);
//     const books = await response.json();
//     return books;
// }

// async function fetchBookById(bookId) {
//     const response = await fetch(`${BASE_URL}/books/${bookId}`);
//     const book = await response.json();
//     return book;
// }

// async function removeBook(bookId) {
//     const url = `${BASE_URL}/books/${bookId}`;
//     const options = {
//         method: 'DELETE',
//     };

//     const response = await fetch(url, options);
//     const book = await response.json();
//     return book;
// }

// async function updateBookById(update, bookId) {
//     const options = {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(update),
//     };

//     const response = await fetch(`${BASE_URL}/books/${bookId}`, options);
//     const book = await response.json();
//     return book;
// }

////MYEXAMPLES

//POST

// const BASIC_URL = 'https://jsonplaceholder.typicode.com/users'

// async function fetchUsersById(userData) {
//     const options = {
//         'method': 'POST',
//         headers: {
//             'Content-Type': 'Application/JSON',
//         },
//         body: JSON.stringify(userData)
//     }

//     const response = await fetch(`${BASIC_URL}`, options);
//     const user = await response.json();
//     console.log(user);
    // return  fetch(`${BASIC_URL}`, options)
    //     .then(response => response.json())
    //     .then(users => console.log(users))
// }

// fetchUsersById({
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
// })
// const updateUser = async () => {
//     try {
//         const x = fetchUsersById({})
//         console.log(x);
//         console.log('aaaaaa');
//     }
//     catch(error) {
//         console.log(error);
//     }
// }
// resultss()
//PUT

// async function putUserByID(newData, userId) {
//     const options = {
//         'method': 'PATCH',
//         headers: {
//             'Content-Type':'applocation/JSON',
//         },
//         body:JSON.stringify(newData)

//     }
//     // return fetch(`${BASIC_URL}/${userId}`, options)
//     //     .then(res => res.json())
//     const response = await fetch(`${BASIC_URL}/${userId}`, options);
//     const user = await response.json()
//     console.log(user);
//     return user;
    
    
// }

// putUserByID({
//     id: 2,
//     name: "aa",
//     username: "bb",
//     email: "cc",
// },2)


// DELETE


// async function deleteUserById(userId) {
//     const options = {
//         'method': 'DELETE',

//     };
//     const response = await fetch(`${BASIC_URL}/${userId}`, options)
//     return response;
   
// }
// deleteUserById(1);
// deleteUserById(8);

// const fetchUsers = async () => {
//     const baseUrl = "https://jsonplaceholder.typicode.com";
//     const firstResponse = await fetch(`${baseUrl}/users/1`);
//     const secondResponse = await fetch(`${baseUrl}/users/2`);
//     const thirdResponse = await fetch(`${baseUrl}/users/3`);

//     const firstUser = await firstResponse.json();
//     const secondUser = await secondResponse.json();
//     const thirdUser = await thirdResponse.json();

//     console.log(firstUser, secondUser, thirdUser);
// };

// fetchUsers();

// const fetchUsers = async () => {
//     const baseUrl = "https://jsonplaceholder.typicode.com";
//     const userIds = [1, 2, 3];

//     // 1. Створюємо масив промісів
//     const arrayOfPromises = userIds.map(async userId => {
//         const response = await fetch(`${baseUrl}/users/${userId}`);
//         return response.json();
//     });

//     // 2. Запускаємо усі проміси паралельно і чекаємо на їх завершення
//     const users = await Promise.all(arrayOfPromises);
//     console.log(users);
// };

// fetchUsers();

