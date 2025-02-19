import React from "react";
import { ShieldCheck, Lock, Award } from "lucide-react"; // Usa Lucide Icons o reemplaza por imágenes

const features = [
  { icon: <ShieldCheck size={40} className="text-red-600" />, title: "Objetivo", desc: "Cazamos todo el universo de Jurassic Park para ti" },
  { icon: <Lock size={40} className="text-red-600" />, title: "Seguridad", desc: "Buscamos la satisfacción 100% de todos nuestros clientes" },
  { icon: <Award size={40} className="text-red-600" />, title: "Original", desc: "Todos nuestros productos son con licencia" },
];

const Features = () => {
  return (
    <section>
      <div className="features">
        {features.map((feature, index) => (
          <div key={index}>
            <div className="item">{feature.icon}</div>
            <h3 className="tit">{feature.title}</h3>
            <p className="text">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
