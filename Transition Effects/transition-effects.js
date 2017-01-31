//1st example

var app1 = new Vue({
    el: '#app-1',
    data: {
        show: true
    }
})

//CSS Transitions

var app2 = new Vue({
    el: '#app-2',
    data: {
        show: true
    }
})

//CSS Animations

var app3 = new Vue({
    el: '#app-3',
    data: {
        show: true
    }
})

//Custom Transition Classes

var app4 = new Vue({
    el: '#app-4',
    data: {
        show: true
    }
})

//JavaScript Hooks

var app5 = new Vue({
    el: '#app-5',
    data: {
        show: false
    },
    methods: {
        beforeEnter: function (el) {
            el.style.opacity = 0
        },
        enter: function (el, done) {
            Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
            Velocity(el, { fontSize: '1em' }, { complete: done })
        },
        leave: function (el, done) {
            Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
            Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
            Velocity(el, {
                rotateZ: '45deg',
                translateY: '30px',
                translateX: '30px',
                opacity: 0
            }, { complete: done })
        }
    }
})

//Transition Modes

var app6 = new Vue({
    el : '#app-6',
    data: {
        on: false
    }
})

//Transitioning Between Components

var app7 = new Vue({
    el : '#app-7',
    data: {
        view: 'v-a'
    },
    components: {
        'v-a': {
            template: '<div>Component A</div>'
        },
        'v-b': {
            template: '<div>Component B</div>'
        }
    }
})

//List Entering/Leaving Transitions

var app8 = new Vue({
    el : '#app-8',
    data: {
        items: [1,2,3,4,5,6,7,8,9],
        nextNum: 10
    },
    methods: {
        randomIndex: function () {
            return Math.floor(Math.random() * this.items.length)
        },
        add: function () {
            this.items.splice(this.randomIndex(), 0, this.nextNum++)
        },
        remove: function () {
            this.items.splice(this.randomIndex(), 1)
        },
    }
})