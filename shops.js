const menuToggle = document.getElementById('menuToggle');
const navbar = document.querySelector('.navbar');
const container = document.querySelector('.container');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    // Add margin to container when navbar is active
    if (navbar.classList.contains('active')) {
        container.style.marginTop = '200px'; // Adjust this value based on your navbar height
    } else {
        container.style.marginTop = '0';
    }
});

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const mapIframe = document.getElementById('google-map');
            mapIframe.src = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
        },
        (error) => {
            console.error('Error getting location:', error);
            const mapIframe = document.getElementById('google-map');
            mapIframe.src = "https://www.google.com/maps/d/embed?mid=1IpupjvH4cRdoETIKb_l6NJyXS82N83k&ehbc=2E312F";
        }
    );
}

function closeAlert() {
    document.getElementById('alertBox').style.display = 'none';
} 