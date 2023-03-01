// function darkmode(){
//     var SetTheme = document.body;
//     console.log(SetTheme);
//     SetTheme.classList.toggle("dark_mode")

//     var theme;
//     if(SetTheme.classList.contains("dark_mode")){
//         console.log('this is dark mode ')
//         theme="Dark"
//     }else{
//         console.log('this is light mode');
//         theme="Light"
//     }


//     // save to localStorage
//     localStorage.setItem("pagetheme",JSON.stringify(theme));
//     console.log(localStorage);
//     // ensure you convert to json like I have done ----- json stringfy(theme)

// }

// let gettheme =JSON.parse(localStorage.getItem("pagetheme"));
// console.log(gettheme);
// if(gettheme === "Dark"){
//     document.body.classList = "dark_mode"
// }






// JavaScript code
const toggleButton = document.querySelector('#mybtn');

toggleButton.addEventListener('click', mybtn);

// Load saved mode from local storage
const savedMode = localStorage.getItem('mode');


console.log(savedMode)



if (savedMode === 'dark') {
  document.body.classList.add('dark-mode');
} else {
  document.body.classList.add('light-mode');
}

function toggleDarkMode() {
    const body = document.querySelector('body');
    const isDarkMode = body.classList.contains('dark-mode');

    if (isDarkMode) {
      body.classList.remove('dark-mode');
      // Store light mode in local storage
      localStorage.setItem('mode', 'light');
    } else {
      body.classList.add('dark-mode');
      // Store dark mode in local storage
      localStorage.setItem('mode', 'dark');
    }
}
