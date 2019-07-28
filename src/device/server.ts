import http from 'http'
import express from "express"
import { Game } from "./Game"

new Game()

export const app = express()

const server = http.createServer( app )
export function start():Promise<void>{
  return new Promise((res:()=>any, rej:()=>void)=>{  
    server.listen(
      80,
      '0.0.0.0',
      res
    )
  })
}

export function stop(){
  server.close()
}