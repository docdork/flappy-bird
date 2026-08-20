const Physics = (entities, {touches, time}) => {
    let engine = entities.physics.engine;
    let world = entities.physics.world;
    Matter.Engine.update(engine, time.delta);
    return entities;
}

export default Physics;