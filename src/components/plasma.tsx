import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

export default function PlasmaHero() {
  return (
    <div
      className="w-screen h-screen"
    >
      <ShaderGradientCanvas style={{ width: "100%", height: "100%" }} pointerEvents="none">
        <ShaderGradient
          type="waterPlane"            // Plasma preset equivalent
          animate="on"
          color1="#000000"
          color2="#EB0028"             // TED red
          color3="#000000"
          brightness={1}
          uSpeed={0.57}
          grain="off"
          control="props"
          enableCameraUpdate={false}
          cameraZoom={1}
          zoomOut={false}
        />
      </ShaderGradientCanvas>
    </div>
  );
}
