/*global $, jQuery, TweenMax, THREE*/

window.onload = () => {
  var webgl = new Webgl();
  window.onresize = () => {
    webgl.resize();
  };
};

class Webgl {
  constructor() {
    this.vertShader = document.getElementById("vs").textContent;
    this.fragShader = document.getElementById("fs").textContent;


    this.setProps();

    this.init();
  }

  init() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.props.width / this.props.height,
      this.props.near,
      this.props.far
    );
    this.camera.position.set(10, 14, -10);
    this.camera.lookAt(this.scene.position);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });

    this.renderer.setPixelRatio(1.5);

    this.renderer.setClearColor(0xffffff, 0);
    this.renderer.setSize(this.props.width, this.props.height);

    this.div = document.getElementById("wrapper");
    this.div.appendChild(this.renderer.domElement);

    this.obj = new Obj(this);

    this.render();

    var control = new THREE.OrbitControls(
      this.camera,
      this.renderer.domElement
    );
  }

  setProps() {
    var width = document.body.clientWidth;
    var height = window.innerHeight;
    var aspect = width / height;

    this.props = {
      width: width,
      height: height,
      aspect: aspect,
      left: -width / 2,
      right: width / 2,
      top: height / 2,
      bottom: -height / 2,
      near: 0.1,
      far: 10000
    };
  }

  resize() {
    this.setProps();
    this.renderer.setSize(this.props.width, this.props.height);

    this.camera.aspect = this.props.width / this.props.height;
    this.camera.updateProjectionMatrix();
  }

  render() {
    this.obj.uniforms.uTick.value += 1;
    this.renderer.render(this.scene, this.camera);

    requestAnimationFrame(this.render.bind(this));
  }
}

class Obj {
  constructor(webgl) {
    this.webgl = webgl;
    this.init();
  }

  paramFunc() {
    return new THREE.Vector3(0, 0, 0);
  }

  init() {
    var g = new THREE.ParametricBufferGeometry(this.paramFunc, 100, 100);

    this.uniforms = {
      uTick: {
        type: "f",
        value: 0
      }
    };

    var m = new THREE.ShaderMaterial({
      vertexShader: this.webgl.vertShader,
      fragmentShader: this.webgl.fragShader,
      uniforms: this.uniforms,
      side: THREE.DoubleSide,
      shading: THREE.FlatShading
      // wireframe: true
    });

    var mesh = new THREE.Mesh(g, m);
    this.webgl.scene.add(mesh);
  }
}



$(function () {
  "use strict";

  /* ================= MENU ECPANDED ================= */
  $(".menu-collapsed").click(function () {
    $(this).toggleClass("menu-expanded");
  });
  
  });