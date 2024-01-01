// SideBar
const menuItems = document.querySelectorAll(".menu-item");

// Message
const messageNotifications = document.querySelector("#message-notifications");

const messages = document.querySelector(".messages");
const message = document.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

// Theme 
const iconTimes = document.getElementById("iconTimes");
const theme = document.getElementById("theme");
const themeModel = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
const colorpalette = document.querySelectorAll(".choose-color span");
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

// remove ative class from all menu items
const changeActiveItem = () => {
  menuItems.forEach(item => {
    item.classList.remove("active")
  })
}
menuItems.forEach(item => {
  item.addEventListener("click" , function(){
    changeActiveItem();
    item.classList.add("active")
    if(item.id != 'notifications'){
      document.querySelector(".notifications-popup").style.display = 'none';
    }else{
      document.querySelector(".notifications-popup").style.display = 'block';
      document.querySelector("#notifications .notifications-count").style.display = "none";
    }
  })
});
// End OF  SideBar

// Messages 

// searchs chats 
// const searchMessage = () =>{
//   const val = messageSearch.value.toLowerCase();
//   // console.log(val);
//   message.forEach(chat => {
//     const name = chat.querySelectorAll('h5').textContent.toLowerCase();
//     if(name.indexOf(val) != -1){
//       chat.style.display = "flex";
//     }else{
//       chat.style.display = "none";
//     }
//   })
// }
// Search Chat
// messageSearch.addEventListener('keyup', searchMessage)


messageNotifications.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem hsl(252, 75% , 60%)";
  messageNotifications.querySelector(".notifications-count").style.display = "none";
  setTimeout(() => {
    messages.style.boxShadow = 'none';
  }, 2000);
})

// Theme / Display Customization
// opens Model
const openThemeModel = () =>{
  themeModel.style.display = 'grid';
};

// close Model
const closeThemeModel = (e) =>{
  iconTimes.addEventListener("click" , function(){
    themeModel.style.display = 'none';
    changeActiveItem();
  })
};
iconTimes.addEventListener("click", closeThemeModel);
theme.addEventListener("click", openThemeModel);



// remove active class from spans or font size selector 
const removeSizeSelector = () =>{
  fontSizes.forEach(size => {
    size.classList.remove('active');
  })
}
fontSizes.forEach(size => {
  size.addEventListener("click" ,() => {
    removeSizeSelector();
    let fontSizes;
    size.classList.toggle('active');
    if(size.classList.contains('font-size-1')){
      fontSizes = '7px';
      root.style.setProperty('--sticky-top-left' , '5.4rem');
      root.style.setProperty('--sticky-top-right' , '5.4rem');
    }else if(size.classList.contains('font-size-2')){
      fontSizes = '10px';
      root.style.setProperty('--sticky-top-left' , '5.4rem');
      root.style.setProperty('--sticky-top-right' , '-7rem');
    }else if(size.classList.contains('font-size-3')){
      fontSizes = '13px';
      root.style.setProperty('--sticky-top-left' , '-2rem');
      root.style.setProperty('--sticky-top-right' , '-17rem');
    }else if(size.classList.contains('font-size-4')){
      fontSizes = '16px';
      root.style.setProperty('--sticky-top-left' , '-5rem');
      root.style.setProperty('--sticky-top-right' , '-25rem');
    }else if(size.classList.contains('font-size-5')){
      fontSizes = '17px';
      root.style.setProperty('--sticky-top-left' , '-5rem');
      root.style.setProperty('--sticky-top-right' , '-25rem');
    }
      // Change font size of the root html element
  document.querySelector('html').style.fontSize = fontSizes;
  })
})

// remove active class from colors 
const removeActiveColorClass = () =>{
  colorpalette.forEach(colorPicker =>{
    colorPicker.classList.remove('active')
  })
}
// Change Primary Color
colorpalette.forEach(color =>{
  color.addEventListener("click" , () =>{
    let Primary;
    removeActiveColorClass()
    color.classList.add("active");
    if(color.classList.contains('color-1')){
      primaryHue = 252;
    }else if(color.classList.contains('color-2')){
      primaryHue = 52;
    }else if(color.classList.contains('color-3')){
      primaryHue = 352;
    }else if(color.classList.contains('color-4')){
      primaryHue = 152;
    }else if(color.classList.contains('color-5')){
      primaryHue = 202;
    }
    root.style.setProperty("--primary-color-hue", primaryHue)
  })
})

// Theme Background Values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// Change Background Color
const changeBG = () =>{
  root.style.setProperty('--dark-color-lightness' , darkColorLightness);
  root.style.setProperty('--light-color-lightness' , lightColorLightness);
  root.style.setProperty('--white-color-lightness' , whiteColorLightness);
}

Bg1.addEventListener("click", () =>{
  // Add Active Class 
  Bg1.classList.add('active');
  // Remove Active Class from the others 
  Bg2.classList.remove('active');
  Bg3.classList.remove('active');
  window.location.reload();
})
Bg2.addEventListener("click", () =>{
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";

  // Add Active Class 
  Bg2.classList.add('active');
  // Remove Active Class from the others 
  Bg1.classList.remove('active');
  Bg3.classList.remove('active');
  changeBG();
})

Bg3.addEventListener("click", () =>{
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";

  // Add Active Class 
  Bg3.classList.add('active');
  // Remove Active Class from the others 
  Bg1.classList.remove('active');
  Bg2.classList.remove('active');
  changeBG();
})

//End
