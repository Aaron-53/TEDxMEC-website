import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

export default function PlasmaHero() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0
      }}
    >
      <ShaderGradientCanvas style={{ width: "100%", height: "100%" }}>
        <ShaderGradient
          type="waterPlane"            // Plasma preset equivalent
          animate="on"
          color1="#000000"
          color2="#EB0028"             // TED red
          color3="#000000"
          brightness={1}
          uSpeed={0.57}                // Framer speed 57 ≈ 0.57
          grain="off"                  // Noise disabled
        />
      </ShaderGradientCanvas>
    </div>
  );
}
