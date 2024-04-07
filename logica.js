let queue = [];

function enqueue(){
    const colorPicker = document.getElementById("color-picker");
    const color = colorPicker.value;
    queue.unshift(color);
    renderQueue();
}


function dequeue() {
    if(queue.length > 0){
        queue.pop();
        renderQueue();    
    }
}



function renderQueue() {
    const queueDiv = document.getElementById('queue');
    queueDiv.innerHTML = '';
    
    queue.forEach(color => {
        const div = document.createElement('div');
        div.style.backgroundColor = color;
        queueDiv.appendChild(div);
    });
}
