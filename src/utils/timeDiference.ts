function diferencaEmHoras(data1: any, data2: any) {
  const diferencaEmMilissegundos = Math.abs(data2 - data1);
  const horas = diferencaEmMilissegundos / (1000 * 60 * 60);
  return horas;
}

function diferencaEmSemanas(data1: any, data2: any) {
  const diferencaEmMilissegundos = Math.abs(data2 - data1);
  const semanas = diferencaEmMilissegundos / (1000 * 60 * 60 * 24 * 7);
  return semanas;
}

function diferencaEmMeses(data1: any, data2: any) {
  const ano1 = data1.getFullYear();
  const mes1 = data1.getMonth();
  const ano2 = data2.getFullYear();
  const mes2 = data2.getMonth();

  const diferencaEmMeses = (ano2 - ano1) * 12 + (mes2 - mes1);
  return diferencaEmMeses;
}

export { diferencaEmHoras, diferencaEmMeses, diferencaEmSemanas }

