const ladoPoligono = 6;  // Hexágono
const somaAnguloInterno = (ladoPoligono - 2) * 180;

console.log(`A soma dos ângulos internos é ${somaAnguloInterno}°`);

const poligonoRegular = somaAnguloInterno / ladoPoligono;

console.log(`Cada ângulo interno tem o valor de ${poligonoRegular}°`);
