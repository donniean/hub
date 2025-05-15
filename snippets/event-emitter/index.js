class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, listener) {
    if (this.events[eventName]) {
      this.events[eventName].push(listener);
    } else {
      this.events[eventName] = [listener];
    }
  }

  off(eventName, listener) {
    if (this.events[eventName]) {
      const index = this.events[eventName].indexOf(listener);
      if (index !== -1) {
        this.events[eventName].splice(index, 1);
      }
    }
  }

  once(eventName, listener) {
    // eslint-disable-next-line unicorn/no-this-assignment
    const self = this;

    function func(...args) {
      listener.call(this, ...args);
      self.off(eventName, func);
    }

    self.on(eventName, func);
  }

  emit(eventName, ...args) {
    if (this.events[eventName]) {
      for (const listener of this.events[eventName])
        listener.call(this, ...args);
    }
  }
}

export { EventEmitter };
