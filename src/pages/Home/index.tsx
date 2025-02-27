import { Play } from "phosphor-react";
import { CountDown, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCoutdownButton, TaskInput } from "./style";
import { useState } from "react";

export function Home() {
  const [task, setTask] = useState('');

  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput id="task" list="task-suggestions" placeholder="De um nome para o seu projeto"
          onChange={e => setTask(e.target.value)}
          value={task}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1"/>
            <option value="Projeto 2"/>
            <option value="Projeto 3"/>
            <option value="Projeto 4"/>
          </datalist>

          <label htmlFor="">durante</label>
          <MinutesAmountInput type="number" id="minutesAmount" placeholder="00" step={5} min={5} max={60}/>
          <span>minutos.</span>
        </FormContainer>

        <CountDown>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDown>

        <StartCoutdownButton disabled={!task} type="submit">
            <Play size={24}/>
            Começar
            </StartCoutdownButton>
      </form>
    </HomeContainer>
  );
}
