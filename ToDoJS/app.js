var newtaskInput = document.querySelector("#newtask input");
var createTask = document.querySelector("#tasks");

document.querySelector("#push").onclick = function(){
    if(newtaskInput.value.length == 0 ){
        alert("You need to type a task first");
    }else if(newtaskInput.value.length >= 128){
        alert("Your task need to be shorter than 128 chars");
    }else{
        createTask.innerHTML += `
                    <div class="task">
                        <span id="taskname">
                            ${document.querySelector('#newtask input').value}
                        </span>
                        <button class="delete">
                            <i class="far fa-trash-alt">Del</i>
                        </button>
                    </div>
        `;

        var currentTask = document.querySelectorAll(".delete");
        for(var i = 0; i < currentTask.length; i++){
            currentTask[i].onclick = function(){
                this.parentNode.remove();
            }

        }

    }

}