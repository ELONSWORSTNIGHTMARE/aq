document.getElementById('toggle-checkbox').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});

function increaseLike(button) {
    const post = button.closest('.post');
    const likeCount = post.querySelector('.like-count');
    button.classList.toggle('liked');
    if (button.classList.contains('liked')) {
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
    } else {
        likeCount.textContent = parseInt(likeCount.textContent) - 1;
    }
}

function increaseView(button) {
    const post = button.closest('.post');
    const viewCount = post.querySelector('.view-count');
    viewCount.textContent = parseInt(viewCount.textContent) + 1;
}


function updatePostTimes() {
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
        const postTimeElement = post.querySelector('.post-time');
        const postTime = new Date(post.dataset.time);
        const now = new Date();
        const diff = now - postTime;

        let timeText;
        const minute = 60 * 1000;
        const hour = 60 * minute;
        const day = 24 * hour;
        const week = 7 * day;
        const month = 30 * day;

        if (diff < hour) {
            const minutes = Math.floor(diff / minute);
            timeText = ${minutes} minute${minutes !== 1 ? 's' : ''} ago;
        } else if (diff < day) {
            const hours = Math.floor(diff / hour);
            timeText = ${hours} hour${hours !== 1 ? 's' : ''} ago;
        } else if (diff < week) {
            const days = Math.floor(diff / day);
            timeText = ${days} day${days !== 1 ? 's' : ''} ago;
        } else if (diff < month) {
            const weeks = Math.floor(diff / week);
            timeText = ${weeks} week${weeks !== 1 ? 's' : ''} ago;
        } else {
            const months = Math.floor(diff / month);
            timeText = ${months} month${months !== 1 ? 's' : ''} ago;
        }
