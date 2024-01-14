import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const canvas = document.querySelector('canvas.webgl')

console.log(OrbitControls)

// Sizes
const sizes = {
  width: 800,
  height: 600,
}

// 1. Scene
const scene = new THREE.Scene()

// Axes helper, ejes de coordenadas de ayuda
const axesHelper = new THREE.AxesHelper(1)
scene.add(axesHelper)

// Object
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
)
scene.add(mesh)

// 2. Camera
const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  0.1,
  100
)

camera.position.z = 3

scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)

// controls.target.y = 1
// controls.update()

controls.enableDamping = true
// controls.enableZoom = false

// 3. Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)

const tick = () => {
  // 1er. TIPO
  // camera.position.x = cursor.x * 4
  // camera.position.y = cursor.y * 4

  // 2do. TIPO
  // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
  // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3

  // camera.position.y = cursor.y * 5

  // 3er. TIPO

  // camera.lookAt(mesh.position)

  controls.update() // no olvidar esta linea para que se aplique el damping/amotiguamiento

  // Render
  renderer.render(scene, camera)

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
}

tick()
