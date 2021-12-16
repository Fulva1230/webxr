import {Directive, ElementRef, OnInit} from '@angular/core';
import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

@Directive({
  selector: '[appBall]'
})
export class BallDirective implements OnInit{

  constructor(private el: ElementRef) {

  }

  ngOnInit(): void {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, this.el.nativeElement.clientWidth / this.el.nativeElement.clientHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    console.log(`width ${this.el.nativeElement.clientWidth}`)
    console.log(`height ${this.el.nativeElement.clientHeight}`)
    renderer.setSize(this.el.nativeElement.clientWidth, this.el.nativeElement.clientHeight);
    this.el.nativeElement.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const controls = new OrbitControls(camera, renderer.domElement)

    camera.position.z = 5;

    function animate() {
      renderer.render(scene, camera);
      controls.update()
    }
    renderer.setAnimationLoop(animate)
    }

}
