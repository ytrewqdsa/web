let eventBus = {

    listeners : {},
    storage: {
        key: "value",
        cats: [
            {
                name: "Шпротик",
                color: "Желтый"
            }
        ]
    },
    
    register (listener, eventType) {
        if (!this.listeners[eventType]) {
            this.listeners[eventType] = [];
        }
        this.listeners[eventType].push(listener);
    },

    event (eventType, arg) {
        this.listeners[eventType].forEach((item) => {
            item(arg)
        });
    }
}

function test_bus() {
    eventBus.register(() => {
        console.log(eventBus.storage.cats[0].name, ' ', eventBus.storage.cats[0].color)
    }, "event1")

    eventBus.register((arg) => {console.log("arg: ", arg)}, "event2")
        
    eventBus.event("event1", "Cat")
    eventBus.event("event2", "I'm arg")
}
