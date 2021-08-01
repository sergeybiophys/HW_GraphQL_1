import {AxiosResponse} from 'axios';

const axios = require('axios');
import { environment } from '../environment/environment';
// import {Task} from '../../server/homework04/src/database/tasks/tasks.service';

var mycount = 0;
// (function () {
//   console.log('hello');
//      //get();
//   //console.log(tasks.length);
//   // for(let i = 0; i<tasks.length; i++) {
//   //   console.log(tasks[i].tag);
//   //   addTask(tasks[i]);
// }
// )

document.getElementById('show-all').addEventListener('click', ()=> {
  console.log('hello');

  get();
});

document.getElementById('send-query').addEventListener('click', ()=> {
  console.log('search');
  let tag = (<HTMLInputElement>document.getElementById('search-form')).value;
  console.log(tag);
  getByTag(tag);
})

document.getElementById('create-btn').addEventListener('click', ()=>{
  console.log('create');
  createTask();

})

document.getElementById('update-btn').addEventListener('click', ()=>{
  console.log('update');
  updateTask()
})
//test();

function get()  {
  clearBlockFromChild('main');
  axios({
    url: environment.API_URL,
    method: 'post',
    data: {
      query: `
      query GetAllTask {
              getAllTasks {
                      _id
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

      console.log(result.data.data.getAllTasks[i]._id);

    }
    //return result.data.data.getAllTasks;
  });
}
  



function getByTag(tag: string) {
  axios({
    url: environment.API_URL,
    method: 'post',
    data: {
      query: `
          query GetTaskByTag {
            getTaskByTag(body:{tag:"${tag}"}){
              tag
              comment
              deadline
            }
          }
        `
    }
  }).then((result:AxiosResponse) => {
    console.log(result.data.data.getAllTasks)
 
      clearBlockFromChild('main');

      console.log(result.data.data.getTaskByTag);

      addTask(result.data.data.getTaskByTag);

  });
}

function createTask(){

  let tag = (<HTMLInputElement>document.getElementById('tag-select')).value;
    let comment = (<HTMLInputElement>document.getElementById('comment-select')).value;
    let deadline = (<HTMLInputElement>document.getElementById('deadline-select')).value;
    let priority = (<HTMLInputElement>document.getElementById('priority-select')).value;
    console.log(tag);
    console.log(comment);
    console.log(deadline);
    console.log(priority);

  axios({
    url: environment.API_URL,
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'},
    data: {
      query: 
      `mutation CreateTask{
        createNewTask(body:{
          tag: "${tag}",
          comment: "${comment}",
          creation: "${Date.now()}",
          deadline: "${deadline}",
          priority: ${priority},
          status: "n/a"
        }){
          _id
          tag
          comment
          creation
          deadline
          priority
          status
        }
      }
        `
    }

    }).then((result:AxiosResponse) => {
        console.log(result.data.data.getAllTasks)
     
          console.log(result.data.data.createNewTask);
          get();
      });
  
}

function clickUpdate(id:number){
  (<HTMLInputElement>document.getElementById('form-id')).innerText="";
  document.getElementById('fill-data-task').style.display='none';
  document.getElementById('form-id').innerText=id.toString();
  document.getElementById('fill-data-task-up').style.display = 'block';
}

function updateTask(){
let id = (<HTMLInputElement>document.getElementById('form-id')).innerText;
  let tag = (<HTMLInputElement>document.getElementById('tag-select-up')).value;
    let comment = (<HTMLInputElement>document.getElementById('comment-select-up')).value;
    let deadline = (<HTMLInputElement>document.getElementById('deadline-select-up')).value;
    let priority = (<HTMLInputElement>document.getElementById('priority-select-up')).value;
        
    console.log(id)
    console.log(tag);
    console.log(comment);
    console.log(deadline);
    console.log(priority);

  axios({
    url: environment.API_URL,
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'},
    data: {
      query: 
      `mutation UpdateTask{
        updateTask(body:{
          _id: ${Number(id)},
          tag: "${tag}",
          comment: "${comment}",
          creation: "${Date.now()}",
          deadline: "${deadline}",
          priority: ${priority},
          status: "A"
        }){
          _id
          tag
          comment
          creation
          deadline
          priority
          status
        }
      }
        `
    }

    }).then((result:AxiosResponse) => {

      (<HTMLInputElement>document.getElementById('form-id')).innerText='';
     (<HTMLInputElement>document.getElementById('tag-select')).value='';
     (<HTMLInputElement>document.getElementById('comment-select')).value='';
      document.getElementById('fill-data-task').style.display='block';
      document.getElementById('fill-data-task-up').style.display = 'none';
      get();

          console.log(result.data.data.updateTask);
      });
  
}

function deleteTask(id:number){


  axios({
    url: environment.API_URL,
    method: 'post',

    data: {
      query: 
      `mutation DeleteTask {
        deleteTask(id:${id}){
          _id
          tag
        }
      }
        `
    }

    }).then((result:AxiosResponse) => {
          console.log(result.data.data.deleteTask);
      });
  
}


function addTask(task: any) {
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

  //btnDlt.class=task.id;
  // btnDlt.onclick = function() {
  //    deleteTask(Number(task.id));
  // }
  btnDlt.addEventListener('click',()=>{
    console.log(`delete + ${task._id} `);
    deleteTask(task._id);
    get();
  })
  btnUpdate.addEventListener('click',()=>{
    console.log(`update + ${task._id} `);
    clickUpdate(task._id);
    get();
  })
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
  let str = String(task.deadline.toString());

  deadline.innerText=str.substr(0,10);

  document.getElementById('main').appendChild(card);


}

function clearBlockFromChild(blockname:string) {
  const myNode = document.getElementById(blockname);
  while(myNode.lastElementChild) {
      myNode.removeChild(myNode.lastElementChild);
  }
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
