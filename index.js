let TASKS = [];
let tasklist_el = document.querySelector(".tasklist");

function getTaskFromUser() {
	let userTask = prompt("Enter a Task : ");
	let date = new Date();
	let hr = date.getHours();
	let min = date.getMinutes();
	let tasktimestamp = hr + ":" + min;

	return { taskname : userTask, timestamp : tasktimestamp } 
}

function addTask() {
	task = getTaskFromUser();
	TASKS.push(task);
	console.log(task);
	const update = function (task) {
		tasklist_el.innerHTML = tasklist_el.innerHTML + `<section class="task"><div id="taskname">${task.taskname}</div> <div id="timestamp">${task.timestamp}</div></section>`;
	}(task);
}

/*
tasklist_el.innerHTML = tasklist_el.innerHTML + `<div class="task">${task.taskname} <span id="timestamp">${task.timestamp}</span></div>`;
*/

