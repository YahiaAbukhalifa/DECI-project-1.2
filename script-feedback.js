document.addEventListener('DOMContentLoaded', () => {
    const allStar = document.querySelectorAll('.rating .star');
    const ratingValue = document.querySelector('.rating input');

    allStar.forEach((item, idx) => {
        item.addEventListener('click', function () {
            let click = 0;
            ratingValue.value = idx + 1;

            allStar.forEach(i => {
                i.classList.replace('bxs-star', 'bx-star');
                i.classList.remove('active');
            });
            for (let i = 0; i < allStar.length; i++) {
                if (i <= idx) {
                    allStar[i].classList.replace('bx-star', 'bxs-star');
                    allStar[i].classList.add('active');
                } else {
                    allStar[i].style.setProperty('--i', click);
                    click++;
                }
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const ratingInput = form.querySelector('input[name="rating"]');
    const opinionTextarea = form.querySelector('textarea[name="opinion"]');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const rating = ratingInput.value;
        const opinion = opinionTextarea.value;
        const feedback = {
            rating: rating,
            opinion: opinion
        };
        const existingFeedback = JSON.parse(localStorage.getItem('feedback')) || [];
        existingFeedback.push(feedback);
        localStorage.setItem('feedback', JSON.stringify(existingFeedback));
        form.reset();
        alert('Thank you for your feedback!');
        window.location.href="food.html"
    });
});

