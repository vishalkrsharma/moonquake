import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
function Wireframe() {
  const fbx = useLoader(FBXLoader, '/Wireframe.fbx');
  return <primitive object={fbx} scale={0.02005} />;
}

export default Wireframe;
