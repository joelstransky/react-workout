import React, { useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Box, Cylinder, Sphere, CameraControls } from '@react-three/drei';
import ReactMarkdown from 'react-markdown';
import { X } from 'lucide-react';
import readmeContent from '../README.md?raw';

// -------------------------------------------------------------
// UI Types & Fetching
// -------------------------------------------------------------
type StationResult = {
  passed: number;
  failed: number;
  total: number;
};
type TestResults = Record<string, StationResult>;

const STATIONS = [
  { id: '01-filter-sprint', name: 'Filter Sprint', color: '#FF6B6B', position: [-8, 0, -4] as [number, number, number] },
  { id: '02-async-interval', name: 'Async Interval', color: '#4ECDC4', position: [-4, 0, -8] as [number, number, number] },
  { id: '03-form-validation', name: 'Form Validation', color: '#45B7D1', position: [4, 0, -8] as [number, number, number] },
  { id: '04-reducer-pattern', name: 'Reducer Pattern', color: '#FDCB6E', position: [8, 0, -4] as [number, number, number] },
  { id: '05-context-theme', name: 'Context Theme', color: '#6C5CE7', position: [8, 0, 4] as [number, number, number] },
  { id: '06-custom-hook', name: 'Custom Hook', color: '#A8E6CF', position: [4, 0, 8] as [number, number, number] },
  { id: '07-rn-basics', name: 'React Native', color: '#FF8ED4', position: [-4, 0, 8] as [number, number, number] },
];

function TitleScreenModal({ onClose }: { onClose: () => void }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      backdropFilter: 'blur(4px)',
      fontFamily: '"Courier New", Courier, monospace'
    }}>
      <div style={{
        backgroundColor: '#2d3436',
        color: '#dfe6e9',
        borderRadius: '0px',
        padding: '30px',
        width: '80vmin', /* Use viewport min to enforce a max size that stays square-ish */
        maxWidth: '600px',
        height: '80vmin',
        maxHeight: '600px',
        overflowY: 'auto',
        boxShadow: '10px 10px 0px rgba(0, 0, 0, 0.5)', /* Solid drop shadow for 8-bit feel */
        position: 'relative',
        border: '6px solid #55efc4' /* Thick border */
      }}>
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'none',
            border: '4px solid #ff7675',
            color: '#ff7675',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '0',
            backgroundColor: '#2d3436'
          }}
        >
          <X size={20} strokeWidth={3} />
        </button>
        
        {/* Markdown Styling wrapper - reduced font scale by ~15% */}
        <div style={{ lineHeight: '1.4', fontSize: '13.6px' }}>
          <ReactMarkdown
            components={{
              h1: ({node, ...props}) => <h1 style={{ color: '#55efc4', textAlign: 'center', fontSize: '2.1rem', marginBottom: '8px', textTransform: 'uppercase' }} {...props} />,
              h2: ({node, ...props}) => <h2 style={{ color: '#81ecec', borderBottom: '4px solid #636e72', paddingBottom: '4px', marginTop: '20px', textTransform: 'uppercase' }} {...props} />,
              a: ({node, ...props}) => <a style={{ color: '#74b9ff', textDecoration: 'none', borderBottom: '2px solid #74b9ff' }} {...props} />,
              strong: ({node, ...props}) => <strong style={{ color: '#fab1a0' }} {...props} />,
              hr: ({node, ...props}) => <hr style={{ border: 'none', borderTop: '4px dashed #636e72', margin: '15px 0' }} {...props} />
            }}
          >
            {readmeContent}
          </ReactMarkdown>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '25px', marginBottom: '15px' }}>
          <button 
            onClick={onClose}
            style={{
              backgroundColor: '#00b894',
              color: 'white',
              border: '4px solid #fff',
              padding: '10px 24px',
              fontSize: '15.3px',
              fontWeight: 'bold',
              borderRadius: '0',
              cursor: 'pointer',
              fontFamily: '"Courier New", Courier, monospace',
              textTransform: 'uppercase',
              boxShadow: '4px 4px 0px rgba(0,0,0,0.3)',
              transition: 'transform 0.1s, box-shadow 0.1s'
            }}
            onMouseDown={e => {
              e.currentTarget.style.transform = 'translate(4px, 4px)';
              e.currentTarget.style.boxShadow = '0px 0px 0px rgba(0,0,0,0.3)';
            }}
            onMouseUp={e => {
              e.currentTarget.style.transform = 'translate(0px, 0px)';
              e.currentTarget.style.boxShadow = '4px 4px 0px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translate(0px, 0px)';
              e.currentTarget.style.boxShadow = '4px 4px 0px rgba(0,0,0,0.3)';
            }}
          >
            Start the Circuit
          </button>
        </div>
      </div>
    </div>
  );
}

function AthleticTracker({ results, onSelectStation, selectedStationId }: { results: TestResults | null, onSelectStation: (id: string) => void, selectedStationId: string | null }) {

  return (
    <div style={{ height: '100%', overflowY: 'auto', padding: '20px', boxSizing: 'border-box', backgroundColor: '#2d3436' }}>
      <h1 style={{ margin: '0 0 20px 0', textAlign: 'center', color: '#fff' }}>🏃‍♂️ Athletic Tracker</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {STATIONS.map((station) => {
          const res = results?.[station.id] || { passed: 0, failed: 0, total: 0 };
          const progress = res.total > 0 ? Math.round((res.passed / res.total) * 100) : 0;
          const isSelected = selectedStationId === station.id;

          return (
            <div 
              key={station.id} 
              onClick={() => onSelectStation(station.id)}
              style={{
                backgroundColor: '#dfe6e9',
                color: '#2d3436',
                borderRadius: '12px',
                padding: '16px',
                cursor: 'pointer',
                border: `4px solid ${isSelected ? station.color : 'transparent'}`,
                transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.2s ease-in-out'
              }}
            >
              <h3 style={{ margin: '0 0 10px 0' }}>{station.name}</h3>
              <div style={{ backgroundColor: '#b2bec3', height: '12px', borderRadius: '6px', overflow: 'hidden' }}>
                <div style={{ 
                  backgroundColor: progress === 100 ? '#00b894' : station.color, 
                  height: '100%', 
                  width: `${progress}%`,
                  transition: 'width 0.5s ease-in-out'
                }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '14px', fontWeight: 'bold' }}>
                <span>{progress}%</span>
                <span>{res.passed} / {res.total} Passed</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 3D Scene Components
// -------------------------------------------------------------
function ParkStation({ station, results, isSelected, onClick }: { station: typeof STATIONS[0], results: StationResult | undefined, isSelected: boolean, onClick: () => void }) {
  const isComplete = results && results.total > 0 && results.passed === results.total;
  const isStarted = results && results.passed > 0 && !isComplete;

  let baseColor = station.color;
  if (isComplete) baseColor = '#00b894';
  
  // Animate selection hover
  const scale = isSelected ? 1.2 : 1;

  return (
    <group position={station.position} onClick={(e) => { e.stopPropagation(); onClick(); }} scale={scale}>
      {/* Platform - Chunky Base */}
      <Cylinder args={[2.5, 3, 1, 8]} position={[0, -0.5, 0]}>
        <meshToonMaterial color={isSelected ? '#fff' : '#636e72'} />
      </Cylinder>
      
      {/* Central Object - Varies by completion status to make it more dynamic */}
      <group position={[0, 1.5, 0]}>
        {isComplete ? (
          // Completed: Big bouncing star/diamond shape
          <Sphere args={[1.5, 8, 8]} scale={[1, 1.5, 1]}>
             <meshToonMaterial color={baseColor} />
          </Sphere>
        ) : isStarted ? (
          // In Progress: Cylinder
           <Cylinder args={[1.5, 1.5, 2.5, 6]}>
             <meshToonMaterial color={baseColor} />
           </Cylinder>
        ) : (
          // Not Started: Chunky Box
          <Box args={[2, 2.5, 2]}>
            <meshToonMaterial color={baseColor} />
          </Box>
        )}
      </group>
      
      {/* Floating indicator for selection */}
      {isSelected && (
        <Box args={[0.8, 0.8, 0.8]} position={[0, 4, 0]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <meshToonMaterial color="#ffeaa7" />
        </Box>
      )}
    </group>
  );
}

function Scene({ results, selectedStationId, onSelectStation }: { results: TestResults | null, selectedStationId: string | null, onSelectStation: (id: string) => void }) {
  const cameraControlsRef = React.useRef<CameraControls>(null);

  useEffect(() => {
    if (selectedStationId && cameraControlsRef.current) {
      const station = STATIONS.find(s => s.id === selectedStationId);
      if (station) {
        // Fly to a closer, more dramatic angle
        const [sx, sy, sz] = station.position;
        cameraControlsRef.current.setLookAt(sx + 8, sy + 10, sz + 12, sx, sy + 2, sz, true);
      }
    } else if (cameraControlsRef.current) {
      // Overview
      cameraControlsRef.current.setLookAt(0, 30, 40, 0, 0, 0, true);
    }
  }, [selectedStationId]);

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[20, 40, 20]} intensity={1.5} castShadow shadow-mapSize={[1024, 1024]} />
      <pointLight position={[-20, 20, -20]} intensity={0.5} color="#ffeaa7" />
      
      {/* Ground - Low Poly */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow onClick={() => onSelectStation('')}>
        <planeGeometry args={[200, 200, 10, 10]} />
        <meshToonMaterial color="#55efc4" />
      </mesh>

      {/* Running Track - Chunky */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.8, 0]} receiveShadow castShadow>
        <torusGeometry args={[10, 2.5, 8, 30]} />
        <meshToonMaterial color="#fab1a0" />
      </mesh>

      {STATIONS.map((station) => (
        <ParkStation 
          key={station.id} 
          station={station} 
          results={results?.[station.id]} 
          isSelected={selectedStationId === station.id}
          onClick={() => onSelectStation(station.id)}
        />
      ))}

      <CameraControls ref={cameraControlsRef} makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2 - 0.1} />
    </>
  );
}

// -------------------------------------------------------------
// Main App Layout
// -------------------------------------------------------------
export default function App() {
  const [results, setResults] = useState<TestResults | null>(null);
  const [selectedStationId, setSelectedStationId] = useState<string | null>(null);
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);

  // Poll for test results
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch('/test-results.json?t=' + Date.now());
        if (res.ok) {
          const data = await res.json();
          setResults(data);
        }
      } catch (err) {
        // Silent fail if not ready
      }
    };

    fetchResults();
    const interval = setInterval(fetchResults, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {showWelcomeModal && <TitleScreenModal onClose={() => setShowWelcomeModal(false)} />}
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Top Half: UI */}
        <div style={{ height: '40%', flexShrink: 0, zIndex: 10, boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }}>
          <AthleticTracker 
            results={results} 
            onSelectStation={(id) => setSelectedStationId(id === selectedStationId ? null : id)}
            selectedStationId={selectedStationId}
          />
        </div>

        {/* Bottom Half: 3D Scene */}
        <div style={{ flex: 1, backgroundColor: '#81ecec' }}>
          <Canvas shadows camera={{ position: [0, 20, 25], fov: 45 }}>
            <Suspense fallback={null}>
              <Scene 
                results={results} 
                selectedStationId={selectedStationId} 
                onSelectStation={(id) => setSelectedStationId(id ? id : null)} 
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </>
  );
}
