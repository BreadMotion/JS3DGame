class RenderComponent extends IComponent{
    /**constructor*/
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
}//class RenderComponent