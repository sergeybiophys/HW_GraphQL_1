import {AxiosResponse} from 'axios';

const axios = require('axios');
import { environment } from '../environment/environment';

// (function () {
//   console.log('hello');
//      //get();
//   //console.log(tasks.length);
//   // for(let i = 0; i<tasks.length; i++) {
//   //   console.log(tasks[i].tag);
//   //   addTask(tasks[i]);
// }
// )

function test() {
  console.log('hello ');
}

//test();

(function ()  {
  axios({
    url: environment.API_URL,
    method: 'post',
    data: {
      query: `
      query GetAllTask {
              getAllTasks {

                      tag
                      comment
                      deadline
              }
      }
        `
    }
  }).then((result:AxiosResponse) => {
    console.log(result.data.data.getAllTasks)
    for(let i = 0; i<result.data.data.getAllTasks.length; i++)
    {
      // console.log(result.data.data.getAllTasks[i].tag);
      addTask(result.data.data.getAllTasks[i]);
    }
    //return result.data.data.getAllTasks;
  });
}())
  
function addTask(task: object) {
  let card = document.createElement('div');
  card.id = 'task-card';
  card.className = 'task-card';
  let div1 = document.createElement('div');
  let div2 = document.createElement('div');
  let div3 = document.createElement('div');
  let div4 = document.createElement('div');
  let div5 = document.createElement('div');
  // let div51 = document.createElement('div');
  div5.id = 'div-containter-btn';
  // div51.id = 'div-update';

  let tag = document.createElement('h3');
  let comment = document.createElement('h3');
  let deadline = document.createElement('h3');
  let btnDlt = document.createElement('button');
  let btnUpdate = document.createElement('button');

  btnUpdate.id = 'btnUpdate';
  btnDlt.id = 'btnDelete';

  let tmp = document.createElement('h6');
  tmp.id='helph6';
  //tmp.innerText=task.id;

  div5.appendChild(btnUpdate);
  div5.appendChild(btnDlt);

  // btnDlt.class=task.id;
  // btnDlt.onclick = function() {
  //     //dropById(Number(task.id));
  // }
  // btnUpdate.onclick = function() {
  //    // updateById(Number(task.id));
  // }
  // document.getElementById('helph6').innerText=task.id;
  let i = document.createElement('i');
  i.id = 'dltIcon';
  let img = document.createElement('img');
  img.id='imgDelete';
  let img2 = document.createElement('img');
  img2.id='imgUpdate';
  img.src='assets/images/btn-delete.png';
  img2.src='assets/images/btn-update.png';
  let a = document.createElement('a');
  a.id = 'dltHref';
  btnDlt.appendChild(img);
  btnDlt.appendChild(a);
  btnUpdate.appendChild(img2)

  div1.appendChild(tag);
  div2.appendChild(comment);
  div3.appendChild(deadline);
  div4.appendChild(div5);
  // div51.appendChild(btnUpdate);

  // div51.style.display='none';


  card.appendChild(div1);
  card.appendChild(div2);
  card.appendChild(div3);
  card.appendChild(div4);
  // card.appendChild(tmp);
  // card.appendChild(div5);



  tag.innerText = task.tag;
  comment.innerText=task.comment;
  deadline.innerText=task.deadline;

  document.getElementById('main').appendChild(card);


}


// function updateById(id: number){
    
    

    
//   console.log(id);

//   var index = localStorage.setItem('key',id);

//   window.location.href='index3.html';

// }

// (function() {
//     // axios.post(environment.API_URL, {
//     //     query: `
//     //         getAllTasks{
//     //                 id
//     //                 tag
//     //                 comment
//     //                 deadline
//     //         }
//     //         `
//     // }).then((result: AxiosResponse) => {
//     //     console.log(result.data.data.getAllTask);
//     // });
//     //------------------------------------------------


//     axios({
//       url: environment.API_URL,
//       method: 'post',
//       data: {
//         query: `
//         query GetAllTask {
//                 getAllTasks {
//                         id
//                         tag
//                         comment
//                         deadline
//                 }
//         }
//           `
//       }
//     }).then((result:AxiosResponse) => {
//       console.log(result.data.data.getAllTasks)
//     });


//     //-----------------------------------------------
//     // axios({
//     //     url: environment.API_URL,
//     //     method: 'post',
//     //     data: {
//     //         query: `
//     //               query GetAllProductByPrice{
//     //                   getProductsByPrice(body:{min: 100, max: 200}){
//     //                     id
//     //                     name
//     //                   }
//     //                 }
//     //         `
//     //     }
//     // }).then((result: AxiosResponse) => {
//     //     console.log(result.data.data.getProductsByPrice);
//     // });

//     // axios.post(environment.API_URL, {
//     //     query: `mutation($name: String!, $price: Float!, $description: String!) {
//     //               createNewProduct(body:{
//     //                 name: $name,
//     //                 price: $price,
//     //                 description: $description
//     //               }) {
//     //                 id
//     //                 name
//     //                 price
//     //                 description
//     //               }
//     //             }
//     //         `,
//     //     variables: {
//     //         name: 'asdasd',
//     //         price: 500,
//     //         description: 'asdasd'
//     //     }
//     // }).then((result: AxiosResponse) => {
//     //     //console.log(result.data.data.getAllProducts);
//     // });
// }());
