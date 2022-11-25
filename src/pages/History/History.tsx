import { HistoryContainer, HistoryLists, Status } from "./styles";

export function History() {
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
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td><Status statusColor='green' >Concluido</Status> </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td><Status statusColor='green' >Concluido</Status> </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td><Status statusColor='green' >Concluido</Status> </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td><Status statusColor='red' >Interrompido</Status> </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td><Status statusColor='yellow' >Em andamento</Status> </td>
            </tr>
          </tbody>
        </table>
      </HistoryLists>
    </HistoryContainer> 
  )
}
