const test = ()=> {
    console.log('hellooooo from test');
}

test();

// Function to change navbar color when scroll down
const changeNavColor = ()=> {
    const nav = document.querySelector('.navbar');
   
    if(window.scrollY >=80) {
        nav.classList.add('scroll');
    }else {
        nav.classList.remove('scroll');
    }
}

window.addEventListener('scroll', changeNavColor);