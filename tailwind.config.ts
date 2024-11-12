import type { Config } from 'tailwindcss'
import gameConfig from './game.config'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                ...gameConfig.tailwindColors
            }
        }
    }
}