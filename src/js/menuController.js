const ulProfile = document.querySelector('ul');

function resetMenuItems() {
    const li = ulProfile.children;
    const len = li.length;
    for (let i = 0; i < len; i+= 1) {
        li[i].classList.remove('selected-item-profile');
    }
}
