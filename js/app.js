let scene, camera, renderer, WIDTH, HEIGHT, mouseX, mouseY, container, 
aspectRatio, fieldOfView, nearPlane, 
farPlane, windowHalfX, windowHalfY, 
geometry, starStuff, 
materialOptions, stars;


const init = () => {
    container = document.createElement('div');
    document.body.appendChild(container);

    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    aspectRatio = WIDTH / HEIGHT;
    fieldOfView = 75;
    nearPlane = 0.1;
    farPlane = 1000;
    mouseX = 0;
    mouseY = 0;
    windowHalfX = WIDTH / 2;
    windowHalfY = HEIGHT / 2;
    
    camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
    camera.position.z = farPlane / 2;
    
    scene = new THREE.Scene({ antialias: true });
    scene.fog = new THREE.FogExp2( 0x000000, 0.0003 );

    starForge();
    renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setClearColor( 0x000011, 1 );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( WIDTH, HEIGHT );
    container.appendChild( renderer.domElement );

}

const animate = () => {
    requestAnimationFrame( animate );
    render( );
}

const render = () => {
    camera.position.x += ( mouseX - camera.position.x ) * 0.005;
    camera.position.y += ( mouseY - camera.position.y ) * 0.005;
    camera.lookAt( scene.position );
    renderer.render( scene, camera );
}

const starForge = () => {
    let starQty = 3000;
    geometry = new THREE.SphereGeometry(10000, 100, 50);

    materialOptions = {
        size: 0.5,
        opacity: 0.7,
    }

    starStuff = new THREE.PointsMaterial( materialOptions );

    for(let i = 0; i < starQty; i++){
        let starVertex = new THREE.Vector3();
        starVertex.x = Math.random() * 2000 - 1000;
        starVertex.y = Math.random() * 2000 - 1000;
        starVertex.z = Math.random() * 2000 - 1000;

        geometry.vertices.push(starVertex);
    }

    stars = new THREE.Points( geometry, starStuff );
    scene.add( stars );

    starQty = 700;
    geometry1 = new THREE.SphereGeometry(10000, 100, 50);
    materialOptions = {
        size: 1.2,
        opacity: 0.7,
        color: 0x000055
    }
    starStuff = new THREE.PointsMaterial( materialOptions );
    for(let i = 0; i < starQty; i++){
        let starVertex = new THREE.Vector3();
        starVertex.x = Math.random() * 2000 - 1000;
        starVertex.y = Math.random() * 2000 - 1000;
        starVertex.z = Math.random() * 2000 - 1000;
        geometry1.vertices.push(starVertex);
    }

    let blueStars = new THREE.Points( geometry1, starStuff );
    scene.add( blueStars );

    starQty = 200;
    geometry2 = new THREE.SphereGeometry(10000, 100, 50);
    materialOptions = {
        size: 1.5,
        opacity: 0.7,
        color: 0xaa0000
    }
    starStuff = new THREE.PointsMaterial( materialOptions );
    for(let i = 0; i < starQty; i++){
        let starVertex = new THREE.Vector3();
        starVertex.x = Math.random() * 2000 - 1000;
        starVertex.y = Math.random() * 2000 - 1000;
        starVertex.z = Math.random() * 2000 - 1000;
        geometry2.vertices.push(starVertex);
    }

    let redStars = new THREE.Points( geometry2, starStuff );
    scene.add( redStars );

    starQty = 400;
    geometry3 = new THREE.SphereGeometry(10000, 100, 50);
    materialOptions = {
        size: .9,
        opacity: 0.7,
        color: 0xffff00
    }
    starStuff = new THREE.PointsMaterial( materialOptions );
    for(let i = 0; i < starQty; i++){
        let starVertex = new THREE.Vector3();
        starVertex.x = Math.random() * 2000 - 1000;
        starVertex.y = Math.random() * 2000 - 1000;
        starVertex.z = Math.random() * 2000 - 1000;
        geometry3.vertices.push(starVertex);
    }

    let yellowStars = new THREE.Points( geometry3, starStuff );
    scene.add( yellowStars );

}

const webGLSupport = () => {

}

window.addEventListener('resize', () => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    renderer.setSize( width, height );
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

window.addEventListener('mousemove', e => {
    mouseX = e.clientX - windowHalfX;
    mouseY = e.clientY - windowHalfY;
});

init();
animate();