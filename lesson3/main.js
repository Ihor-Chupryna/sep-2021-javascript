//            0        1           2        3
// let array = ['page1', 'page2', 'page3', 'page4'];
// array.fori
// itar
// ritar

// for (let i = 0; i <= 100; i++) {
//     console.log('я присел ' + i + ' раз');
// }

// let pages = ['page1', 'page2', 'page3', 'page4'];
// // pages.forof
// for (let page of pages) {
//     // actions
// }


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// for (const user of users) {
//     if (!user.status) {
//         console.log(user);
//     }
// }

//
// let i = 0;
// while (i < users.length) {
//     let currentUser = users[i];
//     if (currentUser.age > 29) {
//         console.log(currentUser);
//     }
//     i++;
// }

// do {
//     console.log('kaka');
// } while (ifDataPresent())

// let user1 = {name: 'vasya', age: 31, status: false};
// for (let field in user1) {
//     console.log(field, user1[field]);
// }


debugger;
for (const user of users) {
    console.log('==========');
    for (const key in user) {
        console.log(key, user[key]);
    }
    console.log('==========');
}













