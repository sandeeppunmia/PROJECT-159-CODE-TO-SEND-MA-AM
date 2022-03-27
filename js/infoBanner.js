AFRAME.registerComponent("infoBanner",{
    schema:{
        selectedItemId:{default:"",type:"string"}
    },
    init:function(){
        this.handleMouseClickEvents();
    },
    handleMouseClickEvents:function(){
        //Check the selected item to set the "info-banner" set on the plane
        this.el.addEventListener("click",e=>{
            const fadeBackground = document.querySelector("fadeBackground")
            var fadeBackgroundEl = document.createElement("a-entity")
            const titleEl = document.querySelector("app-title")
            const cursorEl = document.querySelector("camera-cursor")
            if(selectedItemId){
                fadeBackgroundEl.setAttribute("visible",true);
                fadeBackgroundEl.setAttribute("info-banner",{
                    itemId:selectedItemId,
                });
                titleEl.setAttribute("visible",false);
                cursorEl.setAttribute("position",{x:0,y:0,z:-1});
                cursorEl.setAttribute("geometry",{
                    radiusInner:0.03,
                    radiusOuter:0.04
                });
            } else{
                //else make the plane invisible
                fadeBackgroundEl.setAttribute("visible",false);
                titleEl.setAttribute("visible",true)
                cursorEl.setAttribute("position",{x:0,y:0,z:0})
                cursorEl.setAttribute("geometry",{
                    radiusInner:0.08,
                    radiusOuter:0.12
                })
            }
        })
    },

    createCards:function(){
        const bannerRef = [
            {
                id:"spiderman",
                title:"SpiderMan (1962)",
                url:"./assets/images/spiderman.jpg",
                description:"Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy (Aug. 1962) in the silver age of comic books."
            },
            {
                id:"superman",
                title:"Superman (1978)",
                url:"./assets/images/superman.jpg",
                description:"Superman is a superhero who appears in American comic books published by DC Comics. The character was created by writer Jerry Siegel and artist Joe Shuster, and debuted in the comic book Action Comics #1 (cover-dated June 1938 and published April 18, 1938). Superman has been adapted to a number of other media which includes radio serials, novels, movies, television shows and theatre."
            },
            {
                id:"outer-space",
                title:"Outer Space (1953)",
                url:"./assets/images/outer_space.jpg",
                description:"Outer-space is a fictional comic by the writer Arnold Mostowicz."
            },
            {
                id:"captain-aero",
                title:"Captain Aero (2019)",
                url:"./assets/images/captain_aero.jpg",
                description:"Captain Aero Comics is a comic book from the Golden Age of Comics, originally published by Helnit Publishing and acquired by Holyoke Publishing in 1942. Issue was published in December 1941, and it ran through issue (August 1946)."
            }
        ]
        let previousXPosition = -60
        for(var item of thumbnailRef){
            const posX = previousXPosition + 25
            const posY = 10
            const posZ = -40
            const position = {x:posX,y:posY,z:posZ}
            previousXPosition = posX
            const borderEl = this.createBorder(position,item.id)
            const poster = this.createPoster(item)
            borderEl.appendChild(poster)
            const titleEl = this.createTitleEl(position,item)
            borderEl.appendChild(titleEl)
            this.placesContainer.appendChild(borderEl)
        }
    },

    createBanner:function(){
        const entityEl = document.querySelector("a-entity")
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{
            primitive:"plane",
            width:20,
            height:10
        })
    },
    createBannerTitle:function(position,item){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("text",{
            font:"exo2bold",
            align:"center",
            width:70,
            color:"#e65100",
            value:item.title
        })
        const elPosition = position;
        elPosition.y=-20
        entityEl.setAttribute("position",elPosition)
        entityEl.setAttribute("visible",true)
        return entityEl
    },
    createDescription:function(){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("text",{
            font:"exo2bold",
            align:"center",
            width:60,
            color:"#e65100",
            value:item.description
        })
        const elPosition = position;
        elPosition.y=-20
        entityEl.setAttribute("position",elPosition)
        entityEl.setAttribute("visible",true)
        return entityEl
    },
})