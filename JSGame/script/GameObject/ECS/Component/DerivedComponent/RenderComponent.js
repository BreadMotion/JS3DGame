class GeometryComponent extends IComponent{
    /**constructor
     * @param {THREE.Geometry} geometry
     * @param {THREE.Material} material*/
    constructor(geometry, material){
        super();

        /** @type {THREE.Geometry}*/
        this.geometry = geometry;

        /** @type {THREE.Material}*/
        this.material = material;
        
        /** @type {THREE.Mesh}*/
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }//constructor

    /**PreInitialize*/
    PreInitialize(){
        SystemManager.GetSystem(RenderSystem).GetSceneEntity().scene.add(this.mesh);
    }//function PreInitialize
}//class GeometryComponent

class AmbientLightComponent extends IComponent{
    /**constructor
     * @param {ColorCode} color
     * @param {Number} intencity*/
    constructor(color, intencity){
        super();

        /** @type {THREE.AmbientLight}*/
        this.light = new THREE.AmbientLight(color,intencity);
    }//constructor

    /**PreInitialize*/
    PreInitialize(){
        SystemManager.GetSystem(RenderSystem).GetSceneEntity().scene.add(this.light);
    }//function PreInitialize
}//class AmbientLightComponent

class DirectionalLightComponent extends IComponent{
    /**constructor
     * @param {ColorCode} color,
     * @param {Number} intencity*/
    constructor(color, intencity){
        super();
        
        /** @type {THREE.DirectionalLight}*/
        this.light = new THREE.DirectionalLight(color,intencity);
    }//constructor

    /**PreInitialize*/
    PreInitialize(){
        SystemManager.GetSystem(RenderSystem).GetSceneEntity().scene.add(this.light);
    }//function PreInitialize
}//class DirectionalLightComponent

class HemisphereLightComponent extends IComponent{
    /**constructor
     * @param {ColorCode} skyColor,
     * @param {ColorCode} groundColor,
     * @param {Number} intencity*/
    constructor(skyColor, groundColor, intencity){
        super();
        
        /** @type {THREE.HemispereLight}*/
        this.light = new THREE.HemispereLight(skyColor,groundColor,intencity);
    }//constructor

    /**PreInitialize*/
    PreInitialize(){
        SystemManager.GetSystem(RenderSystem).GetSceneEntity().scene.add(this.light);
    }//function PreInitialize
}//class HemisphereLightComponent

class PointLightComponent extends IComponent{
    /**constructor
     * @param {ColorCode} color,
     * @param {Number} intencity,
     * @param {Number} distance,
     * @param {Number} subIntencity*/
    constructor(color,intencity,distance,subIntencity){
        super();
        
        /** @type {THREE.PointLight}*/
        this.light = new THREE.PointLight(color,intencity,distance,subIntencity);
    }//constructor

    /**PreInitialize*/
    PreInitialize(){
        SystemManager.GetSystem(RenderSystem).GetSceneEntity().scene.add(this.light);
    }//function PreInitialize
}//class PointLightComponent

class SpotLightComponent extends IComponent{
    /**constructor
     * @param {ColorCode} color
     * @param {Number} intencity
     * @param {Number} distance
     * @param {number} angle
     * @param {Number} penumbra
     * @param {Number} decay*/
    constructor(color, intencity,distance,angle,penumbra,decay){
        super();
        
        /** @type {THREE.SpotLight}*/
        this.light = new THREE.SpotLight(color,intencity,distance,angle,penumbra,decay);
        
        //恐らくこうなる
        //this.owner.group(this.light);
    }//constructor

    /**PreInitialize*/
    PreInitialize(){
        SystemManager.GetSystem(RenderSystem).GetSceneEntity().scene.add(this.light);
    }//function PreInitialize
}//class SpotLightComponent

class RectLightComponent extends IComponent{
    /**constructor
     * @param {ColorCode} color
     * @param {Number} intencity
     * @param {Number} width,
     * @param {Number} height*/
    constructor(color,intencity,width,height){
        super();
        
        /** @type {THREE.RectAreaLight}*/
        this.light = new THREE.RectAreaLight(color,intencity,width,height);
    }//constructor

    /**PreInitialize*/
    PreInitialize(){
        SystemManager.GetSystem(RenderSystem).GetSceneEntity().scene.add(this.light);
    }//function PreInitialize
}//class RectLightComponent