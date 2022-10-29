import {
  Scene,
  AxesHelper,
  AmbientLight,
  DirectionalLight,
  Mesh,
  SphereGeometry,
  MeshToonMaterial,
  PlaneGeometry,
  Color,
  PlaneGeometry,
  CylinderGeometry,
} from "three"
import { renderer, updateRenderer } from "../core/renderer"

import { gui } from "../core/gui"

export const scene = new Scene()

// Axes Helper
const axesHelper = new AxesHelper(0.5)
scene.add(axesHelper)

gui.addInput(axesHelper, "visible", {
  label: "AxesHelper",
})

const ambientLight = new AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const directionalLight = new DirectionalLight("#ffffff", 2)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 500
directionalLight.shadow.normalBias = 0.5
directionalLight.position.set(0.25, 2, 2.25)

scene.add(directionalLight)

const PARAMS = {
  color: "#af0e10",
  color1: "#ffffff", 
  color2: "#66dcf2",
  color3: "d8d8d8"
}

const sphere = new Mesh(
  new SphereGeometry(0.75, 32, 32),
  new MeshToonMaterial({
    color: new Color(PARAMS.color1),
    wireframe: false,
  })
)

sphere.position.set(0, 2 , 0)
sphere.scale.set(3,1,1)
sphere.castShadow = true 

const plane2 = new Mesh(
  new PlaneGeometry(0.5, 50, 32),
  new MeshToonMaterial({
    color: new Color(PARAMS.color),
    wireframe: false,
  })
)

plane2.position.set(1.9, 2.5 , 0)
plane2.scale.set(1,0.01,1)
plane2.rotation.set(0,0 , -4)
plane2.castShadow = true

const plane3 = new Mesh(
  new PlaneGeometry(1, 32, 32),
  new MeshToonMaterial({
    color: new Color(PARAMS.color),
    wireframe: false,
  })
)


plane3.position.set(1.75, 2 , 0.4)
plane3.scale.set(1,0.02,1)
plane3.rotation.set(-Math.PI / 2,0 , -Math.PI /6)
plane3.castShadow = true

const plane4 = new Mesh(
  new PlaneGeometry(1, 32, 32),
  new MeshToonMaterial({
    color: new Color(PARAMS.color),
    wireframe: false,
  })
)

plane4.position.set(1.75, 2 , -0.4)
plane4.scale.set(1,0.02,1)
plane4.rotation.set(-Math.PI / 2,0 , Math.PI /6)
plane4.castShadow = true

const sphereCtrls = gui.addFolder({
  title: "Sphere",
})

const plane5 = new Mesh(
  new PlaneGeometry(0.5, 50, 32),
  new MeshToonMaterial({
    color: new Color(PARAMS.color),
    wireframe: false,
  })
)

plane5.position.set(1.9, 1.5 , 0)
plane5.scale.set(1,0.01,1)
plane5.rotation.set(0,0 , 4)
plane5.castShadow = true

const cylinder = new Mesh(
  new CylinderGeometry(1, 0.4, 2),
  new MeshToonMaterial({
    color: new Color(PARAMS.color),
    wireframe: false,
  })
)

cylinder.position.set(-0.4, 1.2 , 0)
cylinder.scale.set(0.4,0.2,0.75)
cylinder.rotation.set(0,-Math.PI / 2,0)
cylinder.castShadow = true

const plane6 = new Mesh(
  new PlaneGeometry(0.15, 10, 32),
  new MeshToonMaterial({
    color: new Color(PARAMS.color2),
    wireframe: false,
  })
)

plane6.position.set(-0.6, 1.2 , 0.5)
plane6.scale.set(1,0.01,1)
plane6.rotation.set(-Math.PI / 1,0,0)

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

const plane = new Mesh(
  new PlaneGeometry(10, 10, 10, 10),
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
