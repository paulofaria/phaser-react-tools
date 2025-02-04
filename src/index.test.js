import {
  GameComponent,
  GameContext,
  GameProvider,
  useEventEmitter,
  useEventListener,
  usePhaser
} from './index.ts'

describe('The phaser-react-tools module', () => {
  it('should export GameComponent.', () => {
    expect(GameComponent).toBeTruthy()
  })

  it('should export GameContext.', () => {
    expect(GameContext).toBeTruthy()
  })

  it('should export GameProvider.', () => {
    expect(GameProvider).toBeTruthy()
  })

  it('should export useEventEmitter.', () => {
    expect(useEventEmitter).toBeTruthy()
  })

  it('should export useEventListener.', () => {
    expect(useEventListener).toBeTruthy()
  })

  it('should export usePhaser.', () => {
    expect(usePhaser).toBeTruthy()
  })
})
