
var gridCards = 
[
    {
        image: "https://th.bing.com/th/id/OIP.MyzkvncsHWky_E0RW69lgwHaFj?pid=ImgDet&w=580&h=435&rs=1",
        objectText: "Project1"
    },

    {
        image: "https://colorlib.com/wp/wp-content/uploads/sites/2/jevelin-portfolio-website-template.jpg",
        objectText: "Text"
    },

    {
        image: "https://th.bing.com/th/id/R3481a23d3ebec1844c779740d786aaf2?rik=%2bUWZ2J6TMRyEBg&riu=http%3a%2f%2fwww.cssauthor.com%2fwp-content%2fuploads%2f2014%2f10%2fOne-Page-Portfolio-Free-Psd-Template.jpg&ehk=nyYum3DymNIYLN6Rdsi3ZTdMuO1X1uik6IV8GgGHImc%3d&risl=&pid=ImgRaw",
        objectText: "Text"
    },

    {
        image: "https://colorlib.com/wp/wp-content/uploads/sites/2/ryan-portfolio-website-template.jpg",
        objectText: "Text"
    },

    {
        image: "https://uicookies.com/wp-content/uploads/2018/04/cvportfolio-free-portfolio-website-templates.jpg",
        objectText: "Text"
    },

    {
        image: "https://images.creativemarket.com/0.1.0/ps/4005388/910/607/m1/fpnw/wm0/01_frontcover-.jpg?1518611018&s=ff6e49f3a5fc560eee2d6d9e845f9c67",
        objectText: "Text"
    },

    {
        image: "https://colorlib.com/wp/wp-content/uploads/sites/2/po-portfolio-free-template.jpg",
        objectText: "Text"
    },

    {
        image: "./breed2-free-portfolio-website-templates-1000x750.jpg",
        objectText: "Text"
    },

    {
        image: "https://th.bing.com/th/id/R22f349e2acaf9a33765ab50117b60641?rik=AHuMVkLOmXLPRw&riu=http%3a%2f%2fwww.designstub.com%2fwp-content%2fuploads%2f2016%2f08%2fAvana-minimal-portfolio-template.jpg&ehk=39tquTOiLrwcBBctIdM7jqxxFAt%2bann0y7rCUekz9oI%3d&risl=&pid=ImgRaw",
        objectText: "Text"
    }
];

window.onload = mapObjects;

function mapObjects(){
    console.log("1");
    gridCards.map((object, index) => {

        console.log("2");
        let cssGrid = document.querySelector("#portfolio-cards-container");
    
        let individualCard = cssGrid.appendChild(document.createElement("div"));
        individualCard.classList.add("portfolio-card");
    
        let imageContainer = individualCard.appendChild(document.createElement("div"));
        imageContainer.classList.add("card-image-container");
        let cardImage = imageContainer.appendChild(document.createElement("img"));
        cardImage.src = object.image;
    
        let textContainer = individualCard.appendChild(document.createElement("div"));
        textContainer.classList.add("card-text-container");
        let projectName = textContainer.appendChild(document.createElement("h3"));
        projectName.innerHTML = object.objectText;

        if(index % 3 == 0){
            individualCard.setAttribute("data-aos", "fade-right");
        }

        else if(index % 3 == 1){
            individualCard.setAttribute("data-aos", "fade-up");
        }

        else{
            individualCard.setAttribute("data-aos", "fade-left");
        }

        individualCard.setAttribute("data-aos-delay", "50");
        individualCard.setAttribute("data-aos-duration", "1000");
    })
}