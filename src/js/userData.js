// Obteniendo elementos del DOM
const userForm = document.getElementById('user-form');
const editUserDataButton = getElementByDataSet('button', 'profile', 'editing-button');
const cancelUserDataButton = getElementByDataSet('button', 'profile', 'cancel-button');
const saveUserDataButton = getElementByDataSet('button', 'profile', 'save-button');
const buttonsContainer = getElementByDataSet('div', 'profile', 'buttons-container');

// Variables globales
let flagEdit = false;

// Inicializando
buttonsContainer.style.display = 'none';

function getElementByDataSet(type, dataSet, value) {
    const el = document.getElementsByTagName(type);
    const len = el.length;
    let output = null;
    for (let i = 0; i < len; i += 1) {
        const currentEl = el[i];
        if (currentEl.dataset[dataSet] === value) {
            output = currentEl;
        }
    }
    return output;
}

function editAction() {
    flagEdit = !flagEdit;
    buttonsContainer.style.display = flagEdit ? 'flex' : 'none';
    const formsEl = document.querySelectorAll('.input')
    const len = formsEl.length;
    for (let i = 0; i < len; i += 1) {
        const currentEl = formsEl[i];
        if (flagEdit) {
            currentEl.classList.add('edit-input');
            currentEl.classList.remove('no-edit-input');
            currentEl.removeAttribute('disabled');
        } else {
            currentEl.classList.add('no-edit-input');
            currentEl.classList.remove('edit-input');
            currentEl.setAttribute('disabled', true);
            userForm.reset();
        }
    }
}

// function saveUserData() {
//     const eles = userForm.elements;
//     const len = eles.length;
//     const body = {};
//     for (let i = 0; i < len; i += 1) {
//         const formEl = eles[i];
//         const attr = formEl.getAttribute('name');
//         body[attr] = userForm[attr].value;
//     }
//     console.log(body);
// }
editUserDataButton.addEventListener('click', editAction);
cancelUserDataButton.addEventListener('click', editAction);
saveUserDataButton.addEventListener('click', UserForm.save.bind(UserForm));