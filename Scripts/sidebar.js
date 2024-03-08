//Dropdowns sidebar

document.addEventListener("DOMContentLoaded",() => {
    const dropItems = document.querySelectorAll(".dropItems"); 
    const navItems = document.querySelectorAll(".navItem");

    dropItems.forEach(function (item) { 
        item.addEventListener("click",() => { 
            
            event.stopImmediatePropagation(); 
            
            const content = this.querySelector(".dobbleInnerDrop"); 
            
            if (content) { 
                const isActive = content.classList.contains("active"); 

                
                dropItems.forEach((otherItem) => {
                    const otherContent = otherItem.querySelector(".dobbleInnerDrop"); 
                    if (otherItem !== item && otherContent && otherContent.classList.contains("active")) { 
                        otherContent.classList.remove("active"); 
                    }
                });

                content.classList.toggle("active", !isActive); 
            }
        });
    });

    navItems.forEach((item) => {
        item.addEventListener("click",() => {
            const content = this.querySelector(".innerDrop");

            if (content) {
                const isActive = content.classList.contains("active");

                navItems.forEach((otherItem) => {
                    const otherContent = otherItem.querySelector(".innerDrop");
                    if (otherItem !== item && otherContent && otherContent.classList.contains("active")) {
                        otherContent.classList.remove("active");
                    }
                });

                content.classList.toggle("active", !isActive);
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
    const miBoton = document.getElementById("toggleNav");

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

document.getElementById("toggleNav").addEventListener("click",() => {

    let listsToToggle = document.querySelectorAll(".navTitle, .innerDrop");
    listsToToggle.forEach((list) => {
        list.classList.toggle("collapsed");
    });

    let elementsToHide = document.querySelectorAll("#downchevroncategories, .dividerContainer, .purchaseSidebar , .navTitle, .tagContainerBottom");
    elementsToHide.forEach((element) => {
        element.classList.toggle("hidden");
    });

    let sidebarWrap = document.querySelector(".sideCollapser");
    sidebarWrap.style.width = sidebarWrap.style.width === "30%" ? "100%" : "30%";
});



