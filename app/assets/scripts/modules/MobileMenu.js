import $ from 'jquery';

class MobileMenu {
    //     +++ jQuery way +++
    // constructor() {
    //     $(".site-header__menu-icon").click(function(){
    //         console.log("the top right icon was clicked");
    //     })
    // }

    // +++ another way +++ 
    constructor(){
        this.menuIcon = $(".site-header__menu-icon");
        this.menuContent = $(".site-header__menu-content");
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }

    toggleTheMenu() {
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
    }

}

export default MobileMenu;
