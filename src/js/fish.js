import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
export class Fish extends Actor {

    onInitialize() {
        let xspeed = Math.random() * 200 - 100
        let yspeed = Math.random() * 200 - 100
        const sprite = Resources.Fish.toSprite()
        this.vel = new Vector(xspeed, yspeed)
        this.pos = new Vector(Math.random() * 800, Math.random() * 600)
        this.graphics.use(sprite)
        console.log(this.pos)
        if (xspeed > 0) {
            this.graphics.flipHorizontal = true
        }

        this.on("pointerup", () => this.kill())
    }

    onPostKill() {
        this.scene.engine.addScore()
    }
}
