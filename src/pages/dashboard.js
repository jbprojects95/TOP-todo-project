import "../styles/dashboard-styles.css";

export function loadDashboard(container) {
  container.innerHTML = `
    <div class="wrapper">
      <div class="dashboard">
        <div class="shape"></div>
        <div class="shape"></div>
        <div class="shape"></div>
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
  </div>
  
  `;
}
