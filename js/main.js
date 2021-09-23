addEventListener("DOMContentLoaded", async(e)=>{
    const peticion = await fetch("config.json");
    const data = await peticion.json();
    console.log(data);



    //Menu
    let menu = "<ul>";
    for(let [id, value] of Object.entries(data.Header.Menu)){
        menu += `<li>${value.Nombre}</li>`
    }
    menu += "</ul>";
    document.querySelector(".menu").insertAdjacentHTML('afterbegin', menu);



    // Iconos
    const iconos = (data)=>{
        let fragmen = document.createDocumentFragment();
        let div = document.createElement(`DIV`);
        div.id = "myLogos";
        fragmen.appendChild(div);
        for(let [id, value] of Object.entries(data)){
            let logo = document.createElement(`${value.Nombre}`);
            logo.name = value.Valor;
            fragmen.children.myLogos.appendChild(logo);
        }
        return fragmen;
    }
    let Logos = iconos(data.Header.Logos).children.myLogos.children;
    document.querySelector(".logo").insertAdjacentElement('afterbegin', Logos[0]);
    document.querySelector(".cart").insertAdjacentElement('afterbegin', Logos[0]);
    
    

    Logos = iconos(data.Footer);
    let ul = document.createElement("UL");
    for(let [id, value] of Object.entries(Logos.children.myLogos.children)){
        let li = document.createElement("LI");
        li.appendChild(value);
        ul.appendChild(li);
    }
    document.querySelector(".media").insertAdjacentElement('afterbegin',ul);



    // Autor
    document.querySelector(".title-1").insertAdjacentText('afterbegin',data.Autor['Titulo-1']);
    document.querySelector(".title-2").insertAdjacentText('afterbegin',data.Autor['Titulo-2']);



    //Perfil
    let plantilla = `
    <p>${data.Texto.Parrafo}</p>
    <button>${data.Texto.Boton}</button>`;

    document.querySelector(".content").insertAdjacentHTML('afterbegin',plantilla);







    // Animaciones de la pagina
    TweenMax.to(".title-1",2,{
        x:-10,
        opacity:1,
        ease: Expo.easeInOut
    })
    TweenMax.to(".title-2",2,{
        delay:0.2,
        x:-210,
        opacity:1,
        ease: Expo.easeInOut
    })
    TweenMax.from(".runner",2,{
        delay:1,
        y:-600,
        ease: Expo.easeInOut
    })
    TweenMax.from(".box-1",4,{
        delay:1,
        rotate: 200,
        transformOrigin: "50% 50%",
        opacity:0,
        x:-180,
        ease: Expo.easeInOut
    })
    TweenMax.from(".box-2",4,{
        delay:1.2,
        rotate: 90,
        transformOrigin: "50% 50%",
        opacity:0,
        x:-180,
        ease: Expo.easeInOut
    })
    TweenMax.from(".box-3",4,{
        delay:1,
        rotate: 180,
        transformOrigin: "50% 50%",
        opacity:0,
        x:-180,
        ease: Expo.easeInOut
    })
    TweenMax.from(".pattern",2,{
        delay:0.8,
        width:0,
        opacity:0,
        ease: Expo.easeInOut
    })
    TweenMax.from(".logo",2,{
        delay:1.6,
        y:20,
        opacity:0,
        ease: Expo.easeInOut
    })
    TweenMax.staggerFrom(".menu ul li",2,{
        delay:1.6,
        y:20,
        opacity:0,
        ease: Expo.easeInOut
    }, 0.1)
    TweenMax.from(".cart",2,{
        delay:1.7,
        y:20,
        opacity:0,
        ease: Expo.easeInOut
    })
    TweenMax.staggerFrom(".media ul li",2,{
        delay:2,
        y:20,
        opacity:0,
        ease: Expo.easeInOut
    }, 0.1)
    TweenMax.from(".content p",2,{
        delay:2.4,
        y:20,
        opacity:0,
        ease: Expo.easeInOut
    })
    TweenMax.from(".content button",2,{
        delay:2.6,
        y:20,
        opacity:0,
        ease: Expo.easeInOut
    })
})