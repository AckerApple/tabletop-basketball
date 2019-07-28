import { Subject } from "rxjs"

export class GameSensors{
  switch0:Subject<void> = new Subject()
  switch1:Subject<void> = new Subject()
  switch2:Subject<void> = new Subject()
}