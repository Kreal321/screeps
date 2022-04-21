## Set up
1. Set up spawn
2. Set up containers for each sources/controller

## Design

creep memory data
{
    role: "harvester", "builder", "repairer", "mover", "upgrader"
    body: {"work": num, "move": num}
    task: actions[{
        target: id
        targetType:
        type: "build", "pickup",
        number: 
    }]
}

room memory data
container
{
    target: id
    targetType:
}

each thing[id].tasks[creep.id]{
    type: "build", "transfer", "harvest", "upgrade", "repair"
    task: {
        actions:[],
        timeleft: number of ticks to finish,
        capability: used/free store
    }
    changes: +/- number
}





### Manager
1. Overall checking
- Controller Level
- Container, Extensions, (Ramparts, Walls)
2. Assign works

#### harvester
1. serach for container(underconstruction) of sources
2. move to target
3. start harvest

#### upgrader
1. serach for container(underconstruction) of controller
2. move to target
3. start upgrade if have energy
3. or pickup energy from container/ground
requirement: never move far than 5 blocks

#### mover
1. search for container(underconstruction) of sources if empty
1. search for dropped energy not near container(underconstruction) of controller
2. move to target
3. pickup energy
-
1. search for spawn if spawn is not full
1. spawn is full, search for extensions not full
1. spawn is full, search for container(underconstruction) of controller not full
2. move to target
3. transfer energy
3. drop energy

#### builder / repairer
1. search for underconstructions if have energy
2. move to target
3. build
-
1. search for container(underconstruction) of sources
2. move to target
3. pickup energy

#### tasks
- harvest
- moveTo
- upgrade
- build
- pickup
- withdraw


### Creep
#### roles
- harvester
- mover
- upgrader
- builder

