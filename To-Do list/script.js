const btn=document.getElementById('btn');

btn.addEventListener('click',Add);
function Add(){
    const input=document.getElementById('text');
    const tasklist=document.querySelector('.tasklist');
    if(input.value==''){
        return false
    }
    else{
        const newtask=document.createElement("ul");
        newtask.innerHTML=`${input.value} <i class="fa-solid fa-trash-can"></i>`;
        tasklist.appendChild(newtask);
        input.value='';
        newtask.querySelector("i").addEventListener('click',remove);
        function remove(){
            newtask.remove()
        }
    }
}