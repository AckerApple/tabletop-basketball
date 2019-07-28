import { GameSensors } from "./GameSensors"
import { Subject, Subscription } from "rxjs"

export class Game{
  score:number = 0
  GameSensors = new GameSensors()
  subs:Subscription = new Subscription()
  scoreUp:Subject<void> = new Subject()

  start(){
    this.subs.add(
      this.GameSensors.switch0.subscribe(()=>this.scoreLow())
    )
    this.subs.add(
      this.GameSensors.switch1.subscribe(()=>this.scoreMid())
    )
    this.subs.add(
      this.GameSensors.switch2.subscribe(()=>this.scoreHigh())
    )
  }

  stop(){
    this.subs.unsubscribe()
  }

  scoreLow(){
    this.score = this.score + 5
    this.scoreUp.next()
  }

  scoreMid(){
    this.score = this.score + 10
    this.scoreUp.next()    
  }

  scoreHigh(){
    this.score = this.score + 20
    this.scoreUp.next()    
  }

  reset(){
    this.score = 0
  }
}

new Game()