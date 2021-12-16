import {Directive, ElementRef, OnInit} from '@angular/core';
import * as THREE from 'three';
import {TubePainter} from 'three/examples/jsm/misc/TubePainter.js';
import {ARButton} from 'three/examples/jsm/webxr/ARButton.js';

@Directive({
  selector: '[appBuscard]'
})
export class BuscardDirective implements OnInit {

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    let container;
    let camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: THREE.WebGLRenderer;
    let controller: THREE.Group, painter: any;

    const cursor = new THREE.Vector3();

    const init = () => {
      container = document.createElement('div');
      this.el.nativeElement.appendChild(container);

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(70, this.el.nativeElement.clientWidth / this.el.nativeElement.clientHeight, 0.01, 20);

      renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(this.el.nativeElement.clientWidth, this.el.nativeElement.clientHeight);
      renderer.xr.enabled = true;
      container.appendChild(renderer.domElement);
      this.el.nativeElement.appendChild(ARButton.createButton(renderer));

      // model

      const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
      light.position.set(0, 1, 0);
      scene.add(light);

      //

      painter = new TubePainter();
      painter.setSize(0.4);
      painter.mesh.material.side = THREE.DoubleSide;
      scene.add(painter.mesh);

      function onSelectStart(this: THREE.Group) {
        this.userData["isSelecting"] = true;
        this.userData["skipFrames"] = 2;
      }

      function onSelectEnd(this: THREE.Group) {
        this.userData["isSelecting"] = false;
      }

      controller = renderer.xr.getController(0);
      controller.addEventListener('selectstart', onSelectStart);
      controller.addEventListener('selectend', onSelectEnd);
      controller.userData["skipFrames"] = 0;
      scene.add(controller);

      window.addEventListener('resize', onWindowResize);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    //

    function handleController(controller: THREE.Group) {

      const userData = controller.userData;

      cursor.set(0, 0, -0.2).applyMatrix4(controller.matrixWorld);

      if (userData['isSelecting'] === true) {

        if (userData['skipFrames'] >= 0) {

          // TODO(mrdoob) Revisit this

          // TODO(mrdoob) Revisit this
          userData['skipFrames']--;
          painter.moveTo(cursor);

        } else {
          painter.lineTo(cursor);
          painter.update();
        }

      }

    }

    function animate() {
      renderer.setAnimationLoop(render);
    }

    function render() {
      handleController(controller);
      renderer.render(scene, camera);
    }

    init();
    animate();
  }

}
