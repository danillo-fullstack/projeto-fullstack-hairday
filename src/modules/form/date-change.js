import { schedulesDay } from "../schedules/load"

// Seleciona o input de data
const seleectedDate = document.getElementById("date")

// Recarrega a lista de horarios quando o input de data mudar
seleectedDate.addEventListener('change', () => {
    schedulesDay();
})