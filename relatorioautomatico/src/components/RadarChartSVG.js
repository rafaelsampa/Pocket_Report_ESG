import React from 'react';
import { View } from 'react-native';
import Svg, { Polygon, Line, Circle, Text as SvgText } from 'react-native-svg';

const categories = ['Social', 'Ambiental', 'Governança'];
const colors = ['#4fc3f7', '#81c784', '#ffd54f'];

export default function RadarChartSVG({ scores, size = 240, max = 5 }) {
  const center = size / 2;
  const radius = size / 2 - 30;
  const angleStep = (2 * Math.PI) / categories.length;

  // Calcula os pontos do polígono do score
  const points = categories.map((cat, i) => {
    const value = Math.max(0, Math.min(scores[cat] || 0, max));
    const angle = i * angleStep - Math.PI / 2;
    const r = (value / max) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return `${x},${y}`;
  }).join(' ');

  // Eixos
  const axisLines = categories.map((cat, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);
    return (
      <Line
        key={cat}
        x1={center}
        y1={center}
        x2={x}
        y2={y}
        stroke="#bbb"
        strokeWidth={1}
      />
    );
  });

  // Labels
  const labels = categories.map((cat, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const x = center + (radius + 18) * Math.cos(angle);
    const y = center + (radius + 18) * Math.sin(angle);
    return (
      <SvgText
        key={cat}
        x={x}
        y={y}
        fontSize="14"
        fill="#333"
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        {cat}
      </SvgText>
    );
  });

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Svg width={size} height={size}>
        {/* Eixos */}
        {axisLines}
        {/* Círculos de referência */}
        <Circle cx={center} cy={center} r={radius} stroke="#eee" strokeWidth={1} fill="none" />
        <Circle cx={center} cy={center} r={radius * 0.66} stroke="#eee" strokeWidth={1} fill="none" />
        <Circle cx={center} cy={center} r={radius * 0.33} stroke="#eee" strokeWidth={1} fill="none" />
        {/* Polígono do score */}
        <Polygon
          points={points}
          fill="#4fc3f7AA"
          stroke="#0288d1"
          strokeWidth={2}
        />
        {/* Labels */}
        {labels}
      </Svg>
    </View>
  );
}