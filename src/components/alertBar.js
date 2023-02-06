/*
 * Copyright (C) 2019 HERE Europe B.V.
 * Licensed under MIT, see full license in LICENSE
 * SPDX-License-Identifier: MIT
 */

let alertBar = function (visibility, type, mesg) {
    document.getElementById('barMessage').innerHTML = mesg;
    let alertBarWrapper = document.getElementById('alertBar');

    if(visibility === 1) {
        alertBarWrapper.style.display = 'block';
    } else {
        alertBarWrapper.style.display = 'none';
    }

    if(type === 'warning'){
        alertBarWrapper.style.backgroundColor = '#FAB800';
        alertBarWrapper.style.color = '#000';
    } else if(type === 'error') {
        alertBarWrapper.style.backgroundColor = '#C41C33';
        alertBarWrapper.style.color = '#fff';
    } else if(type === 'success') {
        alertBarWrapper.style.backgroundColor = '#06B87C';
        alertBarWrapper.style.color = '#fff';
    } else if(type === 'info') {
        alertBarWrapper.style.backgroundColor = '#48DAD0';
        alertBarWrapper.style.color = '#000';
    }

    document.getElementById('remove-bar').addEventListener("click", function (ev) {
        ev.stopPropagation();
        alertBarWrapper.style.display = 'none';
    }, false);
}

export { alertBar }
