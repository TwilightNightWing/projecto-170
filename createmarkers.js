FRAME.gegisterComponent("createmarkers", {
    init:async function(){
        var mainScene = document.querySelector("#main-scene");
        var toys = await this.getAllToys();
        toys.map(toy => {
            var marker = document.createElement("a-marker");
            maker.setAttribute("id", toy.id);
            maker.setAttribute("type", "pattern");
            maker.setAttribute("url", toy.maker_pattern_url);
            maker.setAttribute("curser", {
                rayOrigin: "mouse"
            });

            marker.setAttribute("markerHandler", {});
            mainScene.appendChild(marker);

            var model = document.createElement("a-entity");
            model.setAttribure("id", `model-${toy.id}`);
            model.setAttribure("position", toy.model.geometry.position);
            model.setAttribure("rotation", toy.model.geometry.rotation);
            model.setAttribure("scale", toy.model.geometry.scale);
            model.setAttribure("gltf-model", `url (${toy.model}`);
            model.setAttribure("gesture-handler", {});
            model.setAttribure("animation-mixer", {});
            marker.appendChild(model);



        })
    }
})