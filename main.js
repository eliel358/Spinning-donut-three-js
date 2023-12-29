import './style.css'
import { setupCounter } from './counter.js'
import * as THREE from 'three'

const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer()
const camera = new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,0.01,1000)
renderer.setSize(window.innerWidth,window.innerHeight)
camera.position.z = 5
document.body.appendChild(renderer.domElement)

const geometry = new THREE.TorusGeometry()
const material = new THREE.MeshStandardMaterial({color:0xFF6347})
const cube = new THREE.Mesh(geometry,material)

const light = new THREE.PointLight(0xffffff,50)

light.position.set(2,5,5)

scene.add(cube)
scene.add(light)

function animate(){
 
  requestAnimationFrame(animate)
  renderer.render(scene,camera)
  cube.rotation.z += 0.01
  cube.rotation.x += 0.01
  cube.rotation.y += 0.02
}
animate() 