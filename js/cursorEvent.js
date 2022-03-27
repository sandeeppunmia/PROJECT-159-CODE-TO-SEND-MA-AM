AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemId:{default:"",type:"string"}
    },
    init:function(){
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
    },
    handleMouseEnterEvents:function(){
        this.el.addEventListener("mouseenter",()=>{
            const id = this.el.getAttribute("id");
            const postersId=[
                "superman",
                "spiderman",
                "captain-aero",
                "outer-space"
            ];
            if(postersId.includes(id)){
                const postersContainer = document.querySelector("#posters-container");
                postersContainer.setAttribute("cursor-listener",{
                    selectedItemId:id,
                });
                this.el.setAttribute("material",{color:"#1565c0"})
            }
        });
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

    handleMouseLeaveEvents:function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selectedItemId} = this.data;
            if(selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`)
                const id = el.getAttribute("id")
                if(id == selectedItemId){
                    el.setAttribute("material",{
                        color:"#fff",
                        
                    })
                }
            }
        })
    },

    update:function(){
        const fadeBackgroundEl = document.querySelector("#fadeBackground")
        c = fadeBackgroundEl.children;
        if(c.length > 0){
            var i;
            for(i=0; i<=c.length; i++){
                fadeBackgroundEl.removeChild(c[i])
            }
        } else{
            this.handleMouseClickEvents
        }
    }

})