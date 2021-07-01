import { Engine } from './Engine'
import { MusicPlayer } from './MusicPlayer'

 export class Car {
    //it is convention to start property names in TypeScript with an underscore.
    // If you want to known why, remove the underscore and see if your compiler is throwing you an error!
    private _miles : number = 0;
    private _engine : Engine
    private _musicPlayer: MusicPlayer

    constructor(engine: Engine, musicPlayer: MusicPlayer) {
        this._engine = engine;
        this._musicPlayer  = musicPlayer
    }

    get miles(): number {
        return this._miles;
    }

    get engine(): Engine{
        return this._engine
    }
    
    get musicPlayer(): MusicPlayer{
        return this._musicPlayer
    }

    drive() {
        if(this._engine.status === false || this._engine.fuel.fuelLevel <= 0) {
            //what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }
        
        this._engine.fuel.useFuel = 1;
        this._miles += this._engine.fuelMileage;
    }
}