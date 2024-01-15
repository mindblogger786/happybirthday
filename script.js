let isDragging = false;
let initialX;
let initialY;
let activeElement;

document.addEventListener('mousedown', (e) => {
    const draggableElement = e.target.closest('.draggable');

    if (draggableElement) {
        isDragging = true;
        activeElement = draggableElement;
        initialX = e.clientX - activeElement.getBoundingClientRect().left;
        initialY = e.clientY - activeElement.getBoundingClientRect().top;
        activeElement.style.cursor = 'grabbing';
    }
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const newX = e.clientX - initialX;
    const newY = e.clientY - initialY;

    activeElement.style.left = `${newX}px`;
    activeElement.style.top = `${newY}px`;
});

document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        activeElement.style.cursor = 'grab';
        activeElement = null;
    }
});
