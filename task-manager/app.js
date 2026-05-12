const modalOverlay = document.getElementById('modalOverlay');
const hiddenInput = document.getElementById('taskColumn');
const addButtons = document.querySelectorAll('.column__add-btn');
const closeButtons = document.querySelectorAll('.modal__close, .btn--ghost');
const taskSaveBtn = document.getElementById('taskSaveBtn');
const template = document.getElementById('cardTemplate');

const title = document.getElementById('taskTitle');
const desc = document.getElementById('taskDesc');
const priority = document.getElementById('taskPriority');
const deadline = document.getElementById('taskDeadline');

const columnCards = document.querySelectorAll('.column__cards');
const board = document.querySelector('.board');

let countTodo = document.getElementById('count-todo');
let countInprogress = document.getElementById('count-inprogress');
let countDone = document.getElementById('count-done');

const searchInput = document.getElementById('searchInput');
const priorityFilter = document.getElementById('priorityFilter');

const themeToggle = document.getElementById('themeToggle');

const taskColumn = ['todo', 'inprogress', 'done'];
let editingTaskId = null;

const modalTitle = document.querySelector('.modal__title');

function loadTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTask(task) {
    const clone = template.content.cloneNode(true);

    const card = clone.querySelector('.card');
    card.dataset.id = task.id;

    clone.querySelector('.card__title').textContent = task.title;
    clone.querySelector('.card__desc').textContent = task.desc;
    clone.querySelector('.card__deadline').textContent = task.deadline;
    clone.querySelector('.card__priority-badge').textContent = task.priority;

    const container = document.getElementById('cards-' + task.status);
    container.append(clone);
    console.log('task.status:', task.status);
    console.log('container:', container);
}

function renderAll(tasks) {
    columnCards.forEach(column => column.innerHTML = '');
    tasks.forEach(task => renderTask(task));
    updateCounters();
}

function openModal(column) {
    modalOverlay.classList.add('is-open');
    hiddenInput.value = column;
}

function closeModal() {
    modalOverlay.classList.remove('is-open');
}

function initModal() {
    addButtons.forEach((btn) => {
        btn.addEventListener('click', () => openModal(btn.dataset.column));
    });

    closeButtons.forEach((btn) => {
        btn.addEventListener('click', closeModal);
    });

    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) closeModal();
    });
}

function getFormData() {
    return {
        title: title.value.trim(),
        desc: desc.value.trim(),
        priority: priority.value,
        deadline: deadline.value,
        status: hiddenInput.value
    };
}

function validateTask(data) {
    const isValid = Boolean(data.title);
    title.classList.toggle('error', !isValid);
    return isValid;
}

function resetForm() {
    title.value = '';
    desc.value = '';
    priority.value = 'low';
    deadline.value = '';
    editingTaskId = null;
    modalTitle.textContent = 'Нове завдання';
}

function saveTask(task) {
    const tasks = loadTasks();
    tasks.push(task);
    saveTasks(tasks);
}

function initSave() {
    taskSaveBtn.addEventListener('click', () => {
        const data = getFormData();
        if (!validateTask(data)) return;

        if (editingTaskId !== null){
            const tasks = loadTasks();
            const task = tasks.find(t => t.id === Number(editingTaskId));
            task.title = data.title;
            task.desc = data.desc;
            task.priority = data.priority;
            task.deadline = data.deadline;
            saveTasks(tasks);
            editingTaskId = null;
        } else{
            const task = { id: Date.now(), ...data };
            saveTask(task);
        }

        renderAll(loadTasks());
        resetForm();
        closeModal();
    });
}

function deleteTask(taskId) {
    const tasks = loadTasks().filter(t => t.id !== Number(taskId));
    saveTasks(tasks);
    renderAll(loadTasks());
}

function initDelete() {
    board.addEventListener('click', (event) => {
        const deleteBtn = event.target.closest('.card__delete');
        if (!deleteBtn) return;

        const card = event.target.closest('.card');
        deleteTask(card.dataset.id);
    });
}

function getNewStatus(currentStatus, direction) {
    const index = taskColumn.indexOf(currentStatus);
    const newIndex = direction === 'next' ? index + 1 : index - 1;
    return taskColumn[newIndex];
}

function moveTask(taskId, direction) {
    const tasks = loadTasks();
    const task = tasks.find(t => t.id === Number(taskId));
    if (!task) return;

    const newStatus = getNewStatus(task.status, direction);
    if (!newStatus) return;

    task.status = newStatus;
    saveTasks(tasks);
    renderAll(loadTasks());
}

function initMove() {
    board.addEventListener('click', (event) => {
        const nextBtn = event.target.closest('.card__move--next');
        const prevBtn = event.target.closest('.card__move--prev');
        if (!nextBtn && !prevBtn) return;

        const card = event.target.closest('.card');
        if (!card) return;

        const direction = nextBtn ? 'next' : 'prev';
        moveTask(card.dataset.id, direction);
    });
}

function initEdit(){
    board.addEventListener('click', (event) => {
        const editBtn = event.target.closest('.card__edit')
        if (!editBtn) return;

        const card = event.target.closest('.card');
        const taskId = card.dataset.id;

        const tasks = loadTasks();
        const task = tasks.find(t => t.id === Number(taskId));
        if (!task) return;

        title.value = task.title;
        desc.value = task.desc;
        priority.value = task.priority;
        deadline.value = task.deadline;

        editingTaskId = task.id;

        modalTitle.textContent = 'Редагувати завдання';
        openModal(task.status);
    })
}

function clearDragOver() {
    document.querySelectorAll('.column').forEach(col => col.classList.remove('drag-over'));
}

function initDragAndDrop() {
    board.addEventListener('dragstart', (event) => {
        const card = event.target.closest('.card');
        if (!card) return;
        event.dataTransfer.setData('text/plain', card.dataset.id);
    });

    board.addEventListener('dragover', (event) => {
        event.preventDefault();
        const column = event.target.closest('.column');
        if (!column) return;
        column.classList.add('drag-over');
    });

    board.addEventListener('drop', (event) => {
        const column = event.target.closest('.column');
        if (!column) return;

        const taskId = event.dataTransfer.getData('text/plain');
        const tasks = loadTasks();
        const task = tasks.find(t => t.id === Number(taskId));
        if (!task) return;

        task.status = column.dataset.status;
        saveTasks(tasks);
        renderAll(loadTasks());
    });

    board.addEventListener('dragleave', (event) => {
        const column = event.target.closest('.column');
        if (!column) return;
        column.classList.remove('drag-over');
    });

    board.addEventListener('dragend', clearDragOver);
}

function updateCounters(){
    const tasks = loadTasks();

    const todoTask = tasks.filter(task => task.status === 'todo').length;
    countTodo.textContent = todoTask;

    const inProgressTask = tasks.filter(task => task.status === 'inprogress').length;
    countInprogress.textContent = inProgressTask;

    const doneTask = tasks.filter(task => task.status === 'done').length;
    countDone.textContent = doneTask;
}

function filterAndRender(){
    const tasks = loadTasks();

    const searchValue = searchInput.value.toLowerCase();
    const priorityValue = priorityFilter.value;

    const filtered = tasks.filter((task) => {
        const matchesSearch = task.title.toLowerCase().includes(searchValue)

        let matchesPriority;
        if (priorityValue === 'all'){
            matchesPriority = true;
        } else {
            matchesPriority = task.priority === priorityValue;
        }
        return matchesSearch && matchesPriority
    })
    renderAll(filtered);
}

searchInput.addEventListener('input', filterAndRender);
priorityFilter.addEventListener('change', filterAndRender);

function applyTheme(theme){
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
}

function initTheme(){
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    }
}

themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.hasAttribute('data-theme');
    const newTheme = isDark ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
})


initTheme();
initModal();
initSave();
initDelete();
initMove();
initEdit();
initDragAndDrop();
renderAll(loadTasks());


