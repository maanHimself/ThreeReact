import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as shader from "./Shaders/Shader";

function ThreeApp(container) {
  this.scene = new THREE.Scene();
  this.container = container;
  this.width = this.container.offsetWidth;
  this.height = this.container.offsetHeight;
  this.renderer = new THREE.WebGLRenderer();
  this.renderer.setPixelRatio(window.devicePixelRatio);
  this.renderer.setSize(this.width, this.height);
  this.renderer.setClearColor(0xeeeeee, 1);
  this.renderer.outputEncoding = THREE.sRGBEncoding;
  this.container.appendChild(this.renderer.domElement);
  this.camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.001,
    1000
  );
  this.camera.position.set(0, 0, 2);
  this.controls = new OrbitControls(this.camera, this.renderer.domElement);
  this.time = 0;
  this.isPlaying = true;
  this.addObjects();
  this.resize();
  this.render();
  this.addEventListenerResize();
}

let ThreeAppMethods = {
  addObjects() {
    this.material = new THREE.ShaderMaterial({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives : enable",
      },
      side: THREE.DoubleSide,
      uniforms: {
        time: { type: "f", value: 0 },
        resolution: { type: "v4", value: new THREE.Vector4() },
        uvRate1: {
          value: new THREE.Vector2(1, 1),
        },
      },
      vertexShader: shader.vertex,
      fragmentShader: shader.fragment,
    });
    this.geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.plane);
  },
  settings() {
    this.settings = {
      progress: 0,
    };
    this.gui = new dat.GUI();
    this.gui.add(this.settings, "progress", 0, 1, 0.01);
  },
  addEventListenerResize() {
    window.addEventListener("resize", this.resize.bind(this));
  },
  resize() {
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
  },
  stop() {
    this.isPlaying = false;
  },
  play() {
    if (this.isPlaying) return;
    this.render();
    this.isPlaying = true;
  },
  render() {
    if (!this.isPlaying) return;
    this.time += 0.05;
    this.material.uniforms.time.value = this.time;
    requestAnimationFrame(this.render.bind(this));
    this.renderer.render(this.scene, this.camera);
  },
};

ThreeApp.prototype = { ...ThreeApp.prototype, ...ThreeAppMethods };

export default ThreeApp;
