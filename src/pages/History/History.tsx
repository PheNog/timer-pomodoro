import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useContext } from "react";
import { CycleContext } from "../../contexts/CycleContext";
import { HistoryContainer, HistoryLists, Status } from "./styles";

export function History() {
  const { cycles } = useContext(CycleContext)
  return (
    <HistoryContainer>
      <h1>Meu historico</h1>

      <HistoryLists>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duraçãp</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map(cycle => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>{formatDistanceToNow(cycle.startDate, {
                    addSuffix: true,
                    locale: ptBR
                  })}</td>
                  <td>
                    {cycle.finishedDate && (
                    <Status statusColor='green' >Concluído</Status>
                    )}
                    
                    {cycle.interruptedDate && (
                    <Status statusColor='red' >Interrompido</Status>
                    )}

                    {!cycle.finishedDate && !cycle.interruptedDate && (
                    <Status statusColor='yellow' >Em andamento</Status>
                    )}

                  </td>
                </tr>
              )
            })}

          </tbody>
        </table>
      </HistoryLists>
    </HistoryContainer>
  )
}
