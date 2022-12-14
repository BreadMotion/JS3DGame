class GeometryComponent extends IComponent{
    /**constructor
     * @param {RenderSystem} renderSystem
     * @param {THREE.Geometry} geometry
     * @param {THREE.Material} material*/
    constructor(renderSystem, geometry, material){
        super();

        /** @type {THREE.Geometry}*/
        this.geometry = geometry;

        /** @type {THREE.Material}*/
        this.material = material;
        
        /** @type {THREE.Mesh}*/
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        renderSystem.GetSceneEntity().scene.add(this.mesh);
    }//constructor
}//class GeometryComponent

class AmbientLightComponent extends IComponent{
    /**constructor
     * @param {RenderSystem} renderSystem
     * @param {ColorCode} color
     * @param {Number} intencity*/
    constructor(renderSystem, color, intencity){
        super();

        /** @type {THREE.AmbientLight}*/
        this.light = new THREE.AmbientLight(color,intencity);
    }//constructor
}//class AmbientLightComponent

class DirectionalLightComponent extends IComponent{
    /**constructor
     * @param {RenderSystem} renderSystem
     * @param {ColorCode} color,
     * @param {Number} intencity*/
    constructor(renderSystem, color, intencity){
        super();
        
        /** @type {THREE.DirectionalLight}*/
        this.light = new THREE.DirectionalLight(color,intencity);
        renderSystem.GetSceneEntity().scene.add(this.light);
    }//constructor
}//class DirectionalLightComponent

class HemisphereLightComponent extends IComponent{
    /**constructor
     * @param {RenderSystem} renderSystem
     * @param {ColorCode} skyColor,
     * @param {ColorCode} groundColor,
     * @param {Number} intencity*/
    constructor(renderSystem, skyColor, groundColor, intencity){
        super();
        
        /** @type {THREE.HemispereLight}*/
        this.light = new THREE.HemispereLight(skyColor,groundColor,intencity);
        renderSystem.GetSceneEntity().scene.add(this.light);
    }//constructor
}//class HemisphereLightComponent

class PointLightComponent extends IComponent{
    /**constructor
     * @param {RenderSystem} renderSystem
     * @param {ColorCode} color,
     * @param {Number} intencity,
     * @param {Number} distance,
     * @param {Number} subIntencity*/
    constructor(renderSystem, color,intencity,distance,subIntencity){
        super();
        
        /** @type {THREE.PointLight}*/
        this.light = new THREE.PointLight(color,intencity,distance,subIntencity);
        renderSystem.GetSceneEntity().scene.add(this.light);
    }//constructor
}//class PointLightComponent

class SpotLightComponent extends IComponent{
    /**constructor
     * @param {RenderSystem} renderSystem
     * @param {ColorCode} color
     * @param {Number} intencity
     * @param {Number} distance
     * @param {number} angle
     * @param {Number} penumbra
     * @param {Number} decay*/
    constructor(renderSystem, color, intencity,distance,angle,penumbra,decay){
        super();
        
        /** @type {THREE.SpotLight}*/
        this.light = new THREE.SpotLight(color,intencity,distance,angle,penumbra,decay);
        renderSystem.GetSceneEntity().scene.add(this.light);
    }//constructor
}//class SpotLightComponent

class RectLightComponent extends IComponent{
    /**constructor
     * @param {RenderSystem} renderSystem
     * @param {ColorCode} color
     * @param {Number} intencity
     * @param {Number} width,
     * @param {Number} height*/
    constructor(renderSystem, color,intencity,width,height){
        super();
        
        /** @type {THREE.RectAreaLight}*/
        this.light = new THREE.RectAreaLight(color,intencity,width,height);
        renderSystem.GetSceneEntity().scene.add(this.light);
    }//constructor
}//class RectLightComponent