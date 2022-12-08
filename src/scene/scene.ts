import {
  Scene,
  AxesHelper,
  AmbientLight,
  Mesh,
  SphereGeometry,
  MeshToonMaterial,
  PlaneGeometry,
  Color,
  CylinderGeometry,
  PointLight,
  MeshMatcapMaterial,
  MeshLambertMaterial,
  MeshNormalMaterial,
  MeshPhongMaterial,
  Texture
} from "three"
import { renderer, updateRenderer } from "../core/renderer"

import { gui } from "../core/gui"

renderer.setClearColor(0x8f6926, 0.4)
export const scene = new Scene()

// Axes Helper
const axesHelper = new AxesHelper(0.5)
scene.add(axesHelper)

gui.addInput(axesHelper, "visible", {
  label: "AxesHelper",
})

const ambientLight = new AmbientLight(0xffff00, 1)
scene.add(ambientLight)

const pointlight = new PointLight( 0xfffff, 100, 100 );
pointlight.position.set( -14.5, 15.0, -11.0 );
scene.add(pointlight);

const PARAMS = {
  color: "#af0e10",
  color1: "#ffffff", 
  color2: "#66dcf2",
  color3: "d8d8d8",
  color4: "#ffffff"
}

const sol = new Mesh(
  new SphereGeometry(3, 32, 32),
  new MeshNormalMaterial({
    bumpMap: new Texture 
  })
)
 

sol.position.set(-14.5, 15.0, -11.0)
sol.castShadow = true

const solCtrls = gui.addFolder({
  title: "Sphere",
})

const pointlightCtrls = gui.addFolder({
  title: "Luz Direcional",
})

pointlightCtrls.addInput(pointlight.position, "x", {
  label: "dir x",
  min: -15,
  max: 15,
  step: 0.1,
})

pointlightCtrls.addInput(pointlight.position, "y", {
  label: "dir y",
  min: -16,
  max: 16,
  step: 0.1,
})

pointlightCtrls.addInput(pointlight.position, "z", {
  label: "dir z",
  min: -15,
  max: 15,
  step: 0.1,
})

solCtrls.addInput(sol.position, "x", {
  label: "pos x",
  min: -15,
  max: 15,
  step: 0.1,
})
solCtrls.addInput(sol.position, "y", {
  label: "pos y",
  min: -15,
  max: 15,
  step: 0.1,
})
solCtrls.addInput(sol.position, "z", {
  label: "pos z",
  min: -15,
  max: 0,
  step: 0.1,
})
solCtrls.addInput(PARAMS, "color").on("change", (e) => {
  sphere.material.color = new Color(e.value)
})

solCtrls.addInput(sol.material, "wireframe")

scene.add(sol)




const sphere = new Mesh(
  new SphereGeometry(0.75, 32, 32),
  new MeshLambertMaterial({
    color: new Color(PARAMS.color1),
    wireframe: false,
  })
)

sphere.position.set(6, 7 , 2)
sphere.scale.set(3,1,1)
sphere.castShadow = true 

const plane2 = new Mesh(
  new PlaneGeometry(0.5, 50, 32),
  new MeshMatcapMaterial({
    color: new Color(PARAMS.color),
  })
)

plane2.position.set(7.9, 7.5 , 2)
plane2.scale.set(1,0.01,1)
plane2.rotation.set(0,0 , -4)
plane2.castShadow = true

const plane3 = new Mesh(
  new PlaneGeometry(1, 32, 32),
  new MeshPhongMaterial({
    color: new Color(PARAMS.color),
  })
)


plane3.position.set(7.75, 7 , 2.4)
plane3.scale.set(1,0.02,1)
plane3.rotation.set(-Math.PI / 2,0 , -Math.PI /6)
plane3.castShadow = true

const plane4 = new Mesh(
  new PlaneGeometry(1, 32, 32),
  new MeshPhongMaterial({
    color: new Color(PARAMS.color),
  })
)

plane4.position.set(7.75, 7 , 1.6)
plane4.scale.set(1,0.02,1)
plane4.rotation.set(-Math.PI / 2,0 , Math.PI /6)
plane4.castShadow = true

const sphereCtrls = gui.addFolder({
  title: "Sphere",
})

const plane5 = new Mesh(
  new PlaneGeometry(0.5, 50, 32),
  new MeshMatcapMaterial({
    color: new Color(PARAMS.color),
  })
)

plane5.position.set(7.9, 6.5 , 2)
plane5.scale.set(1,0.01,1)
plane5.rotation.set(0,0 , 4)
plane5.castShadow = true

const cylinder = new Mesh(
  new CylinderGeometry(1, 0.4, 2),
  new MeshLambertMaterial({
    color: new Color(PARAMS.color),
  })
)

cylinder.position.set(5.6, 6.15 , 2)
cylinder.scale.set(0.4,0.2,0.75)
cylinder.rotation.set(0,-Math.PI / 2,0)
cylinder.castShadow = true

const plane6 = new Mesh(
  new PlaneGeometry(0.15, 10, 32),
  new MeshNormalMaterial({
    bumpScale: 2,
    wireframe: false,
  })
)

plane6.position.set(5.4, 6.2 , 2.5)
plane6.scale.set(1,0.01,1)
plane6.rotation.set(-Math.PI / 1,0,0)

//cloud1//////////////////


const cloudCenter = new Mesh(
  new SphereGeometry(0.75, 32, 32),
  new MeshNormalMaterial({
    bumpMap: new Texture 
  })
)

cloudCenter.position.set(0.6, 9.96 , 2)
cloudCenter.scale.set(1,1,1)
cloudCenter.castShadow = true

const cloudLeft = new Mesh(
  new SphereGeometry(0.5, 50, 32),
  new MeshNormalMaterial({
    bumpMap: new Texture 
  })
)

cloudLeft.position.set(-0.1, 10 , 2)
cloudLeft.scale.set(1,1,1)
cloudLeft.castShadow = true
cloudLeft.rotation.set(0,0 , -4)

const cloudRight = new Mesh(
  new SphereGeometry(0.5, 50, 32),
  new MeshNormalMaterial({
    bumpMap: new Texture 
  })
)

cloudRight.position.set(1.2, 10 , 2)
cloudRight.scale.set(1,1,1)
cloudRight.castShadow = true
cloudRight.rotation.set(0,0 , -4)

//////cloud2////////////////
const cloudCenter2 = new Mesh(
  new SphereGeometry(0.75, 32, 32),
  new MeshNormalMaterial({
    bumpMap: new Texture 
  })
)

cloudCenter2.position.set(-1.7, 12 , -2)
cloudCenter2.scale.set(1,1,1)
cloudCenter2.castShadow = true

const cloudLeft2 = new Mesh(
  new SphereGeometry(0.5, 50, 32),
  new MeshNormalMaterial({
    bumpMap: new Texture 
  })
)

cloudLeft2.position.set(-1.0, 12 , -2)
cloudLeft2.scale.set(1,1,1)
cloudLeft2.castShadow = true
cloudLeft2.rotation.set(0,0 , -4)

const cloudRight2 = new Mesh(
  new SphereGeometry(0.5, 50, 32),
  new MeshNormalMaterial({
    bumpMap: new Texture 
  })
)

cloudRight2.position.set(-2.3, 12 , -2)
cloudRight2.scale.set(1,1,1)
cloudRight2.castShadow = true
cloudRight2.rotation.set(0,0 , -4)
/////////////////////


const cloudCenter3 = new Mesh(
  new SphereGeometry(0.75, 32, 32),
  new MeshNormalMaterial({
    bumpMap: new Texture 
  })
)

cloudCenter3.position.set(0.6, 5.96 , -0.5)
cloudCenter3.scale.set(1,1,1)
cloudCenter3.castShadow = true

const cloudLeft3 = new Mesh(
  new SphereGeometry(0.5, 50, 32),
  new MeshNormalMaterial({
    bumpMap: new Texture 
  })
)

cloudLeft3.position.set(-0.1, 6 , -0.5)
cloudLeft3.scale.set(1,1,1)
cloudLeft3.castShadow = true
cloudLeft3.rotation.set(0,0 , -4)

const cloudRight3 = new Mesh(
  new SphereGeometry(0.5, 50, 32),
  new MeshNormalMaterial({
    bumpMap: new Texture 
  })
)

cloudRight3.position.set(1.2, 6 , -0.5)
cloudRight3.scale.set(1,1,1)
cloudRight3.castShadow = true
cloudRight3.rotation.set(0,0 , -4)


sphereCtrls.addInput(sphere.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})
sphereCtrls.addInput(sphere.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})
sphereCtrls.addInput(sphere.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})
sphereCtrls.addInput(PARAMS, "color").on("change", (e) => {
  sphere.material.color = new Color(e.value)
})

sphereCtrls.addInput(sphere.material, "wireframe")

scene.add(sphere)
scene.add(plane2)
scene.add(plane3)
scene.add(plane4)
scene.add(plane5)
scene.add(cylinder)
scene.add(plane6)

scene.add(cloudCenter)
scene.add(cloudLeft)
scene.add(cloudRight)

scene.add(cloudCenter2)
scene.add(cloudLeft2)
scene.add(cloudRight2)


scene.add(cloudCenter3)
scene.add(cloudLeft3)
scene.add(cloudRight3)


const plane = new Mesh(
  new PlaneGeometry(50, 50, 50, 50),
  new MeshToonMaterial({
    color: new Color("#444"),
  })
)

plane.receiveShadow = true
plane.rotation.set(-Math.PI / 2, 0, 0)
scene.add(plane)

export function updateScene() {
  updateRenderer()
}
