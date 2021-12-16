import {Directive, ElementRef, OnInit} from '@angular/core'
import * as THREE from 'three'
import {ARButton} from 'three/examples/jsm/webxr/ARButton.js'
import {XRFrame, XRHitTestSource} from "three";

@Directive({
  selector: '[appBuscard]'
})
export class BuscardDirective implements OnInit {

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    const container = document.createElement('div')
    this.el.nativeElement.appendChild(container)

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(70, this.el.nativeElement.clientWidth / this.el.nativeElement.clientHeight, 0.01, 20)
    const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1)
    light.position.set(0.5, 1, 0.25)
    scene.add(light)

    const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true})
    renderer.setSize(this.el.nativeElement.clientWidth, this.el.nativeElement.clientHeight)
    renderer.xr.enabled = true
    container.appendChild(renderer.domElement)
    this.el.nativeElement.appendChild(ARButton.createButton(renderer, {requiredFeatures: ['hit-test']}))

    const geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.2, 32).translate(0, 0.1, 0)
    const reticle = new THREE.Mesh(new THREE.RingGeometry(0.15, 0.2, 32).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial())
    reticle.matrixAutoUpdate = false;
    reticle.visible = false;
    scene.add(reticle);

    var onSelect = () => {
      if (reticle.visible) {
        const material = new THREE.MeshPhongMaterial({color: 0xffffff * Math.random()});
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.setFromMatrixPosition(reticle.matrix);
        mesh.scale.y = Math.random() * 2 + 1;
        scene.add(mesh);
      }
    }

    const controller = renderer.xr.getController(0)
    controller.addEventListener('select', onSelect)
    scene.add(controller)

    let hitTestSourceRequested = false;
    let hitTestSource: XRHitTestSource | undefined

    const render = (timestamp: number, frame?: XRFrame) => {
      if (frame) {
        const referenceSpace = renderer.xr.getReferenceSpace();
        const session = renderer.xr.getSession();

        if (!hitTestSourceRequested) {
          session?.requestReferenceSpace('viewer').then(function (referenceSpace) {
            session?.requestHitTestSource({space: referenceSpace}).then(function (source) {
              hitTestSource = source;
            });
          });

          session?.addEventListener('end', function () {
            hitTestSourceRequested = false;
            hitTestSource = undefined;
          });

          hitTestSourceRequested = true
        }

        if (hitTestSource && referenceSpace) {
          const hitTestResults = frame.getHitTestResults(hitTestSource);
          if (hitTestResults.length) {
            const hit = hitTestResults[0]
            reticle.visible = true
            const reticle_matrix_array = hit.getPose(referenceSpace)?.transform?.matrix
            if (reticle_matrix_array)
              reticle.matrix.fromArray(reticle_matrix_array)
          } else {
            reticle.visible = false
          }
        }
      }
      renderer.render(scene, camera)
    }

    renderer.setAnimationLoop(render)
  }


}
