// console.log("nyi duniya");
let links = document.querySelectorAll('a');
let thirdLink = links[2];
thirdLink.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('jha');
});
