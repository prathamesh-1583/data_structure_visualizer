document.addEventListener('DOMContentLoaded', () => {
    const visitorCountElement = document.getElementById('visitorCount');
    let visitorCount = localStorage.getItem('visitorCount');

    if (visitorCount === null) {
        visitorCount = 0;
    } else {
        visitorCount = parseInt(visitorCount, 10);
    }

    visitorCount++;
    localStorage.setItem('visitorCount', visitorCount);
    visitorCountElement.textContent = visitorCount;
});
