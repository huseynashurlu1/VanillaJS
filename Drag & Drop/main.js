// let div = document.getElementById('first');

// div.addEventListener('dragstart',function(){
//   console.log('Drag Started');
// })

// div.addEventListener('drag',function(){
//   console.log('Drag continues');
// })

// div.addEventListener('dragend',function(){
//   console.log('Drag End')
// })

// let dropArea = document.getElementById('DropArea');
// let icon = document.getElementById('arrow');

// dropArea.addEventListener('dragover',function(){
//   dropArea.style.border = '3px dashed red';
//   icon.style.display = 'block';
// })

// dropArea.addEventListener('dragleave',function(){
//   dropArea.style.border = '3px solid red';
//   icon.style.display = 'none';
// })

  

let dragItem = document.querySelectorAll('.box');
let dropArea = document.getElementById('DropArea');

dropArea.addEventListener('dragover',function(e){
  e.preventDefault();
  dropArea.style.border = '5px dashed purple'
});

dropArea.addEventListener('dragleave',function(e){
  e.preventDefault();
  dropArea.style.border = '5px double purple'
})


for(let i=0;i<dragItem.length;i++) {
  dragItem[i].addEventListener('dragstart',function(param){
    param.dataTransfer.setData('param',this.id);
  })
}

dropArea.addEventListener('drop',function(e){
  let index = e.dataTransfer.getData('param');
  let drgItm = document.getElementById(index);
  dropArea.appendChild(drgItm)
})

// document.getElementById('btn').onclick = function(e) {
//   e.preventDefault();
//   alert('salam');
// }