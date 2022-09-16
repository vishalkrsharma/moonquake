import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
function Wireframe() {
  const fbx = useLoader(FBXLoader, '/wireframe.fbx');
  return <primitive object={fbx} scale={0.01003} />;
}

export default Wireframe;
