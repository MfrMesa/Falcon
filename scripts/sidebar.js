//Dropdowns sidebar

document.addEventListener('DOMContentLoaded', function () {
    const dropItems = document.querySelectorAll('.dropItems'); 
    const navItems = document.querySelectorAll('.navItem');

    dropItems.forEach(function (item) {
        item.addEventListener('click', function () { 
            
            event.stopImmediatePropagation(); 
            
            const content = this.querySelector('.dobbleInnerDrop'); 
            
            if (content) {
                const isActive = content.classList.contains('active');  

                dropItems.forEach(function (otherItem) {
                    const otherContent = otherItem.querySelector('.dobbleInnerDrop'); 
                    if (otherItem !== item && otherContent && otherContent.classList.contains('active')) { 
                        otherContent.classList.remove('active'); 
                    }
                });

                content.classList.toggle('active', !isActive); 
            }
        });
    });

    navItems.forEach(function (item) {
        item.addEventListener('click', function () {
            const content = this.querySelector('.innerDrop');

            if (content) {
                const isActive = content.classList.contains('active');

                navItems.forEach(function (otherItem) {
                    const otherContent = otherItem.querySelector('.innerDrop');
                    if (otherItem !== item && otherContent && otherContent.classList.contains('active')) {
                        otherContent.classList.remove('active');
                    }
                });

                content.classList.toggle('active', !isActive);
            }
        });
    });
});




/////////////////////////////////////////////////////////////////////////


//Chevron 
document.querySelectorAll(".navTitle").forEach((title) => {
    title.addEventListener("click",() => {
        let innerChevron = this.parentElement.querySelector("#downchevroncategories");
        innerChevron.style.transform = innerChevron.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
    });
});

//Inner Chevron 
document.querySelectorAll(".dropTitle").forEach((title) => {
    title.addEventListener("click",() => {
        let innerChevron = this.parentElement.querySelector("#downchevroninner");
        innerChevron.style.transform = innerChevron.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
    });
});


////////////////////////////////////////////////////////////////////////

//Button clicked


document.addEventListener("DOMContentLoaded",() => {
    const miBoton = document.querySelector(".iconToggleSidebar");

    miBoton.addEventListener("click", () => {

        miBoton.classList.add("clicked");
    });

    document.addEventListener("click", (event) => {
        const target = event.target;

        if (!miBoton.contains(target) && !target.classList.contains("clicked")) {
            miBoton.classList.remove("clicked");
        }
    });
});



////////////////////////////////////////////////////////////////////////


//Collapse sidebar


document.getElementById("toggleNavSidebar").addEventListener("click", () => {
    let sidebarWrap = document.querySelector(".sideCollapser");
    
    if (window.innerWidth > 1200 && getComputedStyle(sidebarWrap).visibility !== "hidden") {
        let listsToToggle = document.querySelectorAll(".navTitle, .innerDrop");
        listsToToggle.forEach((list) => {
            list.classList.toggle("collapsed");
        });

        let elementsToHide = document.querySelectorAll("#downchevroncategories, .dividerContainer, .purchaseSidebar , .navTitle, .tagContainerBottom");
        elementsToHide.forEach((element) => {
            element.classList.toggle("hidden");
        });

        sidebarWrap.style.width = sidebarWrap.style.width === "30%" ? "100%" : "30%";
    }
});

///////////////////////////////////////////////////////////////////////////////////

//Sidebar responsive visibilidad


document.addEventListener("DOMContentLoaded", function() {
    let botonMostrar = document.getElementById("toggleNavSidebar");
    let seccion = document.querySelector(".sideCollapser");

    botonMostrar.addEventListener("click", function() {
        const mediaQuery = window.matchMedia('(min-width: 1200px)');

        if (mediaQuery.matches) {
        
            seccion.style.visibility = "visible";
            seccion.style.opacity = "1";
        } else {
            
            if (seccion.style.visibility === "visible") {
                seccion.style.visibility = "hidden";
                seccion.style.opacity = "0";
            } else {
                seccion.style.visibility = "visible";
                seccion.style.opacity = "1";
            }
        }
    });
});



///////////////////////////////////////////////////////////////////////////////////////

//Container expanded

document.addEventListener('DOMContentLoaded', () => {
    const miBoton = document.getElementById("toggleNavSidebar");
    const centerContainer = document.querySelector(".containerCenter");
    // const innerContainer = document.querySelector(".innerCenter");
    const rows1 = document.querySelector(".firstandSecondRow");
    const weeklyRow = document.querySelector(".weeklySales");
    const totalRow = document.querySelector(".totalOrder");
    const marketRow = document.querySelector(".marketShare");
    const weatherRow = document.querySelector(".weather");
    const rows2 = document.querySelector(".thirdRow");
    const runningRow = document.querySelector(".runningProjects");
    const salesRow = document.querySelector(".totalSales");
    const rows3 = document.querySelector(".fourthRow");
    const usingRow = document.querySelector(".userStorage");
    const storageRow = document.querySelector(".storage");
    const rows4 = document.querySelector(".fifthRow");
    const bestRow = document.querySelector(".bestSellingProducts");
    const sharedRow = document.querySelector(".sharedFiles");
    const rows5 = document.querySelector(".sixthRow");
    const rows6 = document.querySelector(".footerFooter");

    miBoton.addEventListener("click", () => {
        miBoton.classList.toggle("clicked");
        const mediaQuery = window.matchMedia('(min-width: 1200px)');

        if (mediaQuery.matches) {
            
        const centerContainerCSS = window.getComputedStyle(centerContainer);
        // const innerContainerCSS = window.getComputedStyle(innerContainer);
        const rows1CSS = window.getComputedStyle(rows1);
        const weeklyRowCSS = window.getComputedStyle(weeklyRow);
        const totalRowCSS = window.getComputedStyle(totalRow);
        const marketRowCSS = window.getComputedStyle(marketRow);
        const weatherRowCSS = window.getComputedStyle(weatherRow);
        const rows2CSS = window.getComputedStyle(rows2);
        const runningRowCSS = window.getComputedStyle(runningRow);
        const salesRowCSS = window.getComputedStyle(salesRow);
        const rows3CSS = window.getComputedStyle(rows3);
        const usingRowCSS = window.getComputedStyle(usingRow);
        const storageRowCSS = window.getComputedStyle(storageRow);
        const rows4CSS = window.getComputedStyle(rows4);
        const bestRowCSS = window.getComputedStyle(bestRow);
        const sharedRowCSS = window.getComputedStyle(sharedRow);
        const rows5CSS = window.getComputedStyle(rows5);
        const footerCSS = window.getComputedStyle(rows6);

        centerContainer.style.width = (centerContainerCSS.width === "950px") ? "1100px" : "950px";
        centerContainer.style.marginLeft = (centerContainerCSS.marginLeft === "280px") ? "5rem" : "280px";

        // innerContainer.style.width = 
        //     innerContainerCSS.getPropertyValue("width")=== "950px" ? "1100px" : "950px";
        // innerContainer.style.marginLeft = "5rem";

        rows1.style.width =
            rows1CSS.getPropertyValue("width") === "878px" ? "1064px" : "878px";

        weeklyRow.style.width =
            weeklyRowCSS.getPropertyValue("width") === "431px" ? "522px" : "431px";
        totalRow.style.width =
            totalRowCSS.getPropertyValue("width") === "431px" ? "522px" : "431px";
        marketRow.style.width =
            marketRowCSS.getPropertyValue("width") === "431px" ? "522px" : "431px";
        weatherRow.style.width =
            weatherRowCSS.getPropertyValue("width") === "431px" ? "522px" : "431px";

        rows2.style.width =
            rows2CSS.getPropertyValue("width") === "878px" ? "1064px" : "878px";

        runningRow.style.width =
            runningRowCSS.getPropertyValue("width") === "431px" ? "532px" : "431px"; 
        salesRow.style.width =
            salesRowCSS.getPropertyValue("width") === "431px" ? "532px" : "431px";


        rows3.style.width =
            rows3CSS.getPropertyValue("width") === "878px" ? "1064px" : "878px";

        usingRow.style.width =
            usingRowCSS.getPropertyValue("width") === "510px" ? "610px" : "510px"; 
        storageRow.style.width =
            storageRowCSS.getPropertyValue("width") === "352px" ? "433px" : "352px";

        rows4.style.width =
            rows4CSS.getPropertyValue("width") === "878px" ? "1064px" : "878px";

        bestRow.style.width =
            bestRowCSS.getPropertyValue("width") === "605px" ? "698px" : "605px"; 
        sharedRow.style.width =
            sharedRowCSS.getPropertyValue("width") === "275px" ? "345px" : "275px";

        rows5.style.width =
            rows5CSS.getPropertyValue("width") === "878px" ? "1060px" : "878px";
            rows5.style.marginLeft = "10px";
        
        rows6.style.width =
            footerCSS.getPropertyValue("width") === "878px" ? "1060px" : "878px";
            rows6.style.marginLeft = "10px";
        }
    });
});


// rows5.style.width =
// rows5CSS.getPropertyValue("width") === "878px" ? "1060px" : "878px";
// rows5.getPropertyValue("margin-Left") === "0px" ? "200px" : "0px";

// rows6.style.width =
// footerCSS.getPropertyValue("width") === "878px" ? "1060px" : "878px";
// rows6.getPropertyValue("margin-Left") === "0px" ? "40px" : "0px";



// document.addEventListener('DOMContentLoaded', () => {
//     const miBoton = document.getElementById("toggleNavSidebar");
//     const centerContainer = document.querySelector(".containerCenter");
//     const rows1 = document.querySelector(".firstandSecondRow");
//     const weeklyRow = document.querySelector(".weeklySales");
//     const totalRow = document.querySelector(".totalOrder");
//     const marketRow = document.querySelector(".marketShare");
//     const weatherRow = document.querySelector(".weather");
//     const rows2 = document.querySelector(".thirdRow");
//     const runningRow = document.querySelector(".runningProjects");
//     const salesRow = document.querySelector(".totalSales");
//     const rows3 = document.querySelector(".fourthRow");
//     const usingRow = document.querySelector(".userStorage");
//     const storageRow = document.querySelector(".storage");
//     const rows4 = document.querySelector(".fifthRow");
//     const bestRow = document.querySelector(".bestSellingProducts");
//     const sharedRow = document.querySelector(".sharedFiles");
//     const rows5 = document.querySelector(".sixthRow");
//     const rows6 = document.querySelector(".footerFooter");

//     miBoton.addEventListener("click", () => {
//         miBoton.classList.toggle("clicked");
//         const mediaQuery = window.matchMedia('(max-width: 1200px)');

//         if (mediaQuery.matches) {
//             const centerContainerCSS = window.getComputedStyle(centerContainer);
//             const rows1CSS = window.getComputedStyle(rows1);
//             const weeklyRowCSS = window.getComputedStyle(weeklyRow);
//             const totalRowCSS = window.getComputedStyle(totalRow);
//             const marketRowCSS = window.getComputedStyle(marketRow);
//             const weatherRowCSS = window.getComputedStyle(weatherRow);
//             const rows2CSS = window.getComputedStyle(rows2);
//             const runningRowCSS = window.getComputedStyle(runningRow);
//             const salesRowCSS = window.getComputedStyle(salesRow);
//             const rows3CSS = window.getComputedStyle(rows3);
//             const usingRowCSS = window.getComputedStyle(usingRow);
//             const storageRowCSS = window.getComputedStyle(storageRow);
//             const rows4CSS = window.getComputedStyle(rows4);
//             const bestRowCSS = window.getComputedStyle(bestRow);
//             const sharedRowCSS = window.getComputedStyle(sharedRow);
//             const rows5CSS = window.getComputedStyle(rows5);
//             const footerCSS = window.getComputedStyle(rows6);

//             centerContainer.style.width = (centerContainerCSS.width === "950px") ? "1100px" : "950px";
//             centerContainer.style.marginLeft = (centerContainerCSS.marginLeft === "280px") ? "5rem" : "280px";

//             rows1.style.width = (rows1CSS.getPropertyValue("width") === "878px") ? "1064px" : "878px";

//             weeklyRow.style.width = (weeklyRowCSS.getPropertyValue("width") === "431px") ? "522px" : "431px";
//             totalRow.style.width = (totalRowCSS.getPropertyValue("width") === "431px") ? "522px" : "431px";
//             marketRow.style.width = (marketRowCSS.getPropertyValue("width") === "431px") ? "522px" : "431px";
//             weatherRow.style.width = (weatherRowCSS.getPropertyValue("width") === "431px") ? "522px" : "431px";

//             rows2.style.width = (rows2CSS.getPropertyValue("width") === "878px") ? "1064px" : "878px";

//             runningRow.style.width = (runningRowCSS.getPropertyValue("width") === "431px") ? "532px" : "431px"; 
//             salesRow.style.width = (salesRowCSS.getPropertyValue("width") === "431px") ? "532px" : "431px";

//             rows3.style.width = (rows3CSS.getPropertyValue("width") === "878px") ? "1064px" : "878px";

//             usingRow.style.width = (usingRowCSS.getPropertyValue("width") === "510px") ? "610px" : "510px"; 
//             storageRow.style.width = (storageRowCSS.getPropertyValue("width") === "352px") ? "433px" : "352px";

//             rows4.style.width = (rows4CSS.getPropertyValue("width") === "878px") ? "1064px" : "878px";

//             bestRow.style.width = (bestRowCSS.getPropertyValue("width") === "605px") ? "698px" : "605px"; 
//             sharedRow.style.width = (sharedRowCSS.getPropertyValue("width") === "275px") ? "345px" : "275px";

//             rows5.style.width = (rows5CSS.getPropertyValue("width") === "878px") ? "1060px" : "878px";
//             rows5.style.marginLeft = "10px";
        
//             rows6.style.width = (footerCSS.getPropertyValue("width") === "878px") ? "1060px" : "878px";
//             rows6.style.marginLeft = "10px";
//         } else {
//             centerContainer.style.removeProperty("width");
//             centerContainer.style.removeProperty("margin-left");
//             rows1.style.removeProperty("width");
//             weeklyRow.style.removeProperty("width");
//             totalRow.style.removeProperty("width");
//             marketRow.style.removeProperty("width");
//             weatherRow.style.removeProperty("width");
//             rows2.style.removeProperty("width");
//             runningRow.style.removeProperty("width");
//             salesRow.style.removeProperty("width");
//             rows3.style.removeProperty("width");
//             usingRow.style.removeProperty("width");
//             storageRow.style.removeProperty("width");
//             rows4.style.removeProperty("width");
//             bestRow.style.removeProperty("width");
//             sharedRow.style.removeProperty("width");
//             rows5.style.removeProperty("width");
//             rows5.style.removeProperty("margin-left");
//             rows6.style.removeProperty("width");
//             rows6.style.removeProperty("margin-left");
//         }
//     });
// });
