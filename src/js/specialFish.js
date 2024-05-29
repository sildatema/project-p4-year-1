import { Actor, Engine, Vector, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class specialFish extends Actor {

    onInitialize() {
        let xspeed = Math.random() * 200 - 100
        let yspeed = Math.random() * 200 - 100
        const sprite = Resources.zealot.toSprite()
        sprite.tint = new Color(Math.random() * 255, Math.random() * 255, Math.random() * 255)
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
        this.scene.engine.addScoreExtra()
    }
}
