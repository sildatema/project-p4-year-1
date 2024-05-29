import '../css/style.css'
import { Actor, Engine, Vector, Color, Label, FontUnit, Font, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './fish.js'
import { specialFish } from './specialFish.js'

export class Game extends Engine {

    constructor() {
        super({
            width: 1280,
            height: 720,
            displayMode: DisplayMode.FitScreen
        })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.score = 0
        let background = new Actor()
        background.graphics.use(Resources.Background.toSprite())
        background.pos = new Vector(0, 0)
        background.scale = new Vector(2.4, 2.2)
        this.add(background)

        this.label = new Label({
            // text: 'Score: 0',
            pos: new Vector(10, 10),
            font: new Font({
                family: 'Impact',
                size: 24,
                unit: FontUnit.Px
            })
        })
        this.add(this.label)

        for (let i = 0; i < 10; i++) {
            let fish = new Fish()
            this.add(fish)
        }
    }

    addScore() {
        this.score++
        let special = Math.random() * 100
        special = Math.round(special)
        if (special === 1) {
            let fish = new specialFish()
            this.add(fish)
            console.log("A special fish has Spawned!")
        }
    }

    addScoreExtra() {
        this.score = this.score + 20
        console.log("you killed a special fish worth 20 points")
    }
    onPostUpdate() {
        this.label.text = `score: ${this.score}`
    }
}

new Game()
