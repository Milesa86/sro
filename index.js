
document.querySelector('.selected').addEventListener('click', function () {
    const options = document.querySelector('.options');
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('.options li').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelector('.selected').textContent = item.textContent;
        document.querySelector('.options').style.display = 'none';
    });
});
