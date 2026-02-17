/**
 * SISTEMA DE COMPUERTAS LÓGICAS Y CIRCUITOS COMBINACIONALES
 * 
 * Propósito: Simular un sistema de control de acceso a una puerta de seguridad
 * que requiere validar: autenticación, permisos y que no esté en emergencia
 * 
 * Fórmula del circuito: Salida = (A AND B) AND (NOT C)
 * - A = Autenticación correcta (1=sí, 0=no)
 * - B = Permisos válidos (1=sí, 0=no)
 * - C = Alarma de emergencia (1=activada, 0=desactivada)
 * 
 * Acceso permitido solo si: está autenticado Y tiene permisos Y NO hay emergencia
 */

// ============================================
// DEFINICIÓN DE COMPUERTAS LÓGICAS
// ============================================

/**
 * Compuerta AND (Y lógico)
 * Retorna 1 solo si AMBAS entradas son 1
 * @param {number} a - Primera entrada (0 o 1)
 * @param {number} b - Segunda entrada (0 o 1)
 * @return {number} Resultado de la operación AND
 */
function AND(a, b) {
  return (a === 1 && b === 1) ? 1 : 0;
}

/**
 * Compuerta OR (O lógico)
 * Retorna 1 si ALGUNA entrada es 1
 * @param {number} a - Primera entrada (0 o 1)
 * @param {number} b - Segunda entrada (0 o 1)
 * @return {number} Resultado de la operación OR
 */
function OR(a, b) {
  return (a === 1 || b === 1) ? 1 : 0;
}

/**
 * Compuerta NOT (Negación lógica)
 * Invierte el valor de entrada
 * @param {number} a - Entrada (0 o 1)
 * @return {number} Inverso de la entrada
 */
function NOT(a) {
  return a === 1 ? 0 : 1;
}

/**
 * Compuerta NAND (NOT AND)
 * Retorna 0 solo si AMBAS entradas son 1
 * @param {number} a - Primera entrada (0 o 1)
 * @param {number} b - Segunda entrada (0 o 1)
 * @return {number} Resultado de la operación NAND
 */
function NAND(a, b) {
  return NOT(AND(a, b));
}

/**
 * Compuerta NOR (NOT OR)
 * Retorna 1 solo si AMBAS entradas son 0
 * @param {number} a - Primera entrada (0 o 1)
 * @param {number} b - Segunda entrada (0 o 1)
 * @return {number} Resultado de la operación NOR
 */
function NOR(a, b) {
  return NOT(OR(a, b));
}

/**
 * Compuerta XOR (OR Exclusivo)
 * Retorna 1 si las entradas son DIFERENTES
 * @param {number} a - Primera entrada (0 o 1)
 * @param {number} b - Segunda entrada (0 o 1)
 * @return {number} Resultado de la operación XOR
 */
function XOR(a, b) {
  return (a !== b) ? 1 : 0;
}

// ============================================
// CIRCUITO COMBINACIONAL - SISTEMA DE ACCESO
// ============================================

/**
 * Circuito combinacional para control de acceso
 * Fórmula: Salida = (A AND B) AND (NOT C)
 * 
 * @param {number} A - Autenticación (1=válida, 0=inválida)
 * @param {number} B - Permisos (1=válidos, 0=inválidos)
 * @param {number} C - Alarma emergencia (1=activa, 0=inactiva)
 * @return {number} Acceso permitido (1=sí, 0=no)
 */
function circuitoAcceso(A, B, C) {
  // Primero: Validar autenticación Y permisos
  const autenticacionYpermisos = AND(A, B);
  
  // Segundo: Verificar que NO haya emergencia
  const sinEmergencia = NOT(C);
  
  // Tercero: Combinación final
  return AND(autenticacionYpermisos, sinEmergencia);
}

// ============================================
// FUNCIONES PARA MOSTRAR TABLAS DE VERDAD
// ============================================

/**
 * Muestra la tabla de verdad de una compuerta de dos entradas
 * @param {string} nombreCompuerta - Nombre de la compuerta
 * @param {function} funcion - Función lógica a ejecutar
 */
function mostrarTablaVerdadDosEntradas(nombreCompuerta, funcion) {
  console.log(`\n${'='.repeat(50)}`);
  console.log(`TABLA DE VERDAD - COMPUERTA ${nombreCompuerta}`);
  console.log(`${'='.repeat(50)}`);
  console.log('│  A  │  B  │ Salida │');
  console.log('├─────┼─────┼────────┤');
  
  for (let a = 0; a <= 1; a++) {
    for (let b = 0; b <= 1; b++) {
      const resultado = funcion(a, b);
      console.log(`│  ${a}  │  ${b}  │   ${resultado}    │`);
    }
  }
  console.log(`${'='.repeat(50)}`);
}

/**
 * Muestra la tabla de verdad de una compuerta de una entrada
 * @param {string} nombreCompuerta - Nombre de la compuerta
 * @param {function} funcion - Función lógica a ejecutar
 */
function mostrarTablaVerdadUnaEntrada(nombreCompuerta, funcion) {
  console.log(`\n${'='.repeat(40)}`);
  console.log(`TABLA DE VERDAD - COMPUERTA ${nombreCompuerta}`);
  console.log(`${'='.repeat(40)}`);
  console.log('│  A  │ Salida │');
  console.log('├─────┼────────┤');
  
  for (let a = 0; a <= 1; a++) {
    const resultado = funcion(a);
    console.log(`│  ${a}  │   ${resultado}    │`);
  }
  console.log(`${'='.repeat(40)}`);
}

/**
 * Muestra la tabla de verdad del circuito de acceso
 */
function mostrarTablaVerdadCircuito() {
  console.log(`\n${'='.repeat(80)}`);
  console.log(`TABLA DE VERDAD - CIRCUITO DE CONTROL DE ACCESO`);
  console.log(`Fórmula: Salida = (A AND B) AND (NOT C)`);
  console.log(`A = Autenticación | B = Permisos | C = Alarma Emergencia`);
  console.log(`${'='.repeat(80)}`);
  console.log('│ Auth │ Perm │ Emer │ A AND B │ NOT C │ Salida │ Estado              │');
  console.log('├──────┼──────┼──────┼─────────┼───────┼────────┼─────────────────────┤');
  
  for (let A = 0; A <= 1; A++) {
    for (let B = 0; B <= 1; B++) {
      for (let C = 0; C <= 1; C++) {
        const andAB = AND(A, B);
        const notC = NOT(C);
        const salida = circuitoAcceso(A, B, C);
        
        let estado = '';
        if (salida === 1) {
          estado = '✓ ACCESO PERMITIDO';
        } else {
          if (A === 0) estado = '✗ No autenticado';
          else if (B === 0) estado = '✗ Sin permisos';
          else if (C === 1) estado = '✗ EMERGENCIA ACTIVA';
        }
        
        console.log(`│  ${A}   │  ${B}   │  ${C}   │    ${andAB}    │   ${notC}   │   ${salida}   │ ${estado.padEnd(19)} │`);
      }
    }
  }
  console.log(`${'='.repeat(80)}`);
}

/**
 * Simula escenarios prácticos del sistema de acceso
 */
function simularEscenarios() {
  console.log(`\n${'='.repeat(80)}`);
  console.log(`SIMULACIÓN DE ESCENARIOS PRÁCTICOS`);
  console.log(`${'='.repeat(80)}`);
  
  const escenarios = [
    { 
      A: 1, B: 1, C: 0, 
      descripcion: 'Usuario autenticado, con permisos, sin emergencia (caso ideal)' 
    },
    { 
      A: 1, B: 1, C: 1, 
      descripcion: 'Usuario válido pero hay ALARMA DE EMERGENCIA (acceso denegado)' 
    },
    { 
      A: 1, B: 0, C: 0, 
      descripcion: 'Usuario autenticado pero SIN PERMISOS (acceso denegado)' 
    },
    { 
      A: 0, B: 1, C: 0, 
      descripcion: 'NO autenticado aunque tiene permisos (acceso denegado)' 
    },
    { 
      A: 0, B: 0, C: 0, 
      descripcion: 'Sin autenticación y sin permisos (acceso denegado)' 
    }
  ];
  
  escenarios.forEach((escenario, index) => {
    const resultado = circuitoAcceso(escenario.A, escenario.B, escenario.C);
    const estado = resultado === 1 ? '✓ PERMITIDO' : '✗ DENEGADO';
    
    console.log(`\nEscenario ${index + 1}: ${escenario.descripcion}`);
    console.log(`  Entrada: A=${escenario.A}, B=${escenario.B}, C=${escenario.C}`);
    console.log(`  Resultado: ${estado}`);
  });
  console.log(`\n${'='.repeat(80)}`);
}

// ============================================
// PROGRAMA PRINCIPAL
// ============================================

console.log(`
╔════════════════════════════════════════════════════════════════════════════╗
║                    SISTEMA DE COMPUERTAS LÓGICAS                          ║
║                   Simulador de Control de Acceso                          ║
║                                                                            ║
║  Propósito: Controlar acceso a una puerta de seguridad mediante           ║
║  combinación de validaciones (autenticación, permisos y alarma)           ║
╚════════════════════════════════════════════════════════════════════════════╝
`);

// Mostrar tablas de verdad de todas las compuertas
mostrarTablaVerdadDosEntradas('AND', AND);
mostrarTablaVerdadDosEntradas('OR', OR);
mostrarTablaVerdadUnaEntrada('NOT', NOT);
mostrarTablaVerdadDosEntradas('NAND', NAND);
mostrarTablaVerdadDosEntradas('NOR', NOR);
mostrarTablaVerdadDosEntradas('XOR', XOR);

// Mostrar tabla de verdad del circuito combinacional
mostrarTablaVerdadCircuito();

// Simular escenarios prácticos
simularEscenarios();

// Exportar para uso en módulos (si se usa con Node.js)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    AND, OR, NOT, NAND, NOR, XOR,
    circuitoAcceso,
    mostrarTablaVerdadDosEntradas,
    mostrarTablaVerdadUnaEntrada,
    mostrarTablaVerdadCircuito,
    simularEscenarios
  };
}
