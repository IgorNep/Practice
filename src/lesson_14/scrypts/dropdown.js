function dropDown(parentNode, options) {
    let btnTitle;
    let isExpand = false;

    function open() {
        parentNode.classList.add('drop-down-menu_expand');
        isExpand = true;
    }

    function close() {
        parentNode.classList.remove('drop-down-menu_expand');
        isExpand = false;
    }

    function toggle() {
        this.classList.add('hello');
        if (isExpand) {
            close();
        } else {
            open();
        }
    }

    function render() {
        parentNode.classList.add('drop-down');
        renderBtn();
        renderList();
    }

    function renderBtn() {
        btnTitle = document.createElement('button');
        btnTitle.classList.add('drop-down-menu__btn');
        btnTitle.textContent = 'TOGGLE';
        btnTitle.addEventListener('click', toggle);
        parentNode.appendChild(btnTitle);
    }

    function renderList() {
        let ul = document.createElement('ul');
        ul.classList.add('drop-down-menu__list');
        for (const option of options) {
            const li = document.createElement('li');
            const btn = document.createElement('button');

            li.classList.add('drop-down-menu__item');
            btn.classList.add('drop-down-menu__option');
            btn.textContent = option;

            btn.addEventListener('click', () => {
                btnTitle.textContent = option;
                close();
            });

            li.appendChild(btn);
            ul.appendChild(li);
        }
        parentNode.appendChild(ul);
    }

    render();
}

export { dropDown };