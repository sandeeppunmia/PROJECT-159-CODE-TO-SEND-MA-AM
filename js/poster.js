AFRAME.registerComponent("poster",{
    init:function(){
        this.placesContainer = this.el
        this.createCards();
    },
    createCards:function(){
        const thumbnailRef = [
            {
                id:"spiderman",
                title:"SpiderMan",
                url:"./assets/images/spiderman.jpg"
            },
            {
                id:"superman",
                title:"Superman",
                url:"./assets/images/superman.jpg"
            },
            {
                id:"outer-space",
                title:"Outer Space",
                url:"./assets/images/outer_space.jpg"
            },
            {
                id:"captain-aero",
                title:"Captain Aero",
                url:"./assets/images/captain_aero.jpg"
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

    createBorder:function(position,id){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("id",id)
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{
            primitive:"plane",
           width:22,
           height:40
        })
        entityEl.setAttribute("position",position)
        entityEl.setAttribute("material",{
            color:"#fff"
    
        })
        entityEl.setAttribute("cursor-listener",{})
        return entityEl
    },
    createPoster: function(item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
          primitive: "plane",
          width: 20,
          height: 28
        });
    
        entityEl.setAttribute("position", { x: 0, y: 5, z: 0.1 });
        entityEl.setAttribute("material", { src: item.url });
    
        return entityEl;
      },
    createTitleEl:function(position,item){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("text",{
            font:"exo2bold",
            align:"center",
            width:70,
            color:"#e65100",
            value:item.title
        })
        const elPosition = position;
        elPosition.y=-50
        entityEl.setAttribute("position",elPosition)
        entityEl.setAttribute("visible",true)
        return entityEl
    },
})