const ladoPoligono = 6;  // Hexágono
const somaAnguloInterno = (ladoPoligno - 2) * 180;

console.log(`A soma dos ângulos internos é ${somaAnguloInterno}°`);

const polignoRegular = somaAnguloInterno / ladoPoligno;

console.log(`Cada ângulo interno tem o valor de ${polignoRegular}°`);
