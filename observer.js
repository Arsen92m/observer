class MyObservable {
    constructor() {
        this.observers = []
    }
    subscribe(observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(subscriber => subscriber !== observer)
    }

    next(data) {
        this.observers.forEach(subscriber => subscriber.onNext(data));
    }
}

class MyObserver {
        onNext(val) {
            console.log('onNext:' + val);
        }
        onError(err) {
            console.log(`onError: ${err} `);
        }
        onCompleted() {
            console.log(`onCompleted`);
        }
}

const observer1 = new MyObserver();
const observer2 = new MyObserver();
const observer3 = new MyObserver();

const observable = new MyObservable;
observable.subscribe(observer1);
observable.subscribe(observer2);
observable.subscribe(observer3);

observable.next(2);
observable.next(3);
observable.next(4);