const grafico = document.getElementById('grafico');

let graficoFinanciero;

export const createGrafico = (data) => {
  if (graficoFinanciero) {
    graficoFinanciero.destroy();
  }

  graficoFinanciero = new Chart(grafico, {
    type: 'line',
    data: {
      labels: data.map((item) => item.fecha),
      datasets: [
        {
          label: 'Valor',
          data: data.map((item) => item.valor),
        },
      ],
    },
  });
};