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

//List Move Transitions
//1st example

var app9 = new Vue({
    el: '#app-9',
    data: {
        items: [1,2,3,4,5,6,7,8,9]
    },
    methods: {
        shuffle: function () {
            this.items = _.shuffle(this.items)
        }
    }
})

//2nd example

var app10 = new Vue({
    el: '#app-10',
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
        shuffle: function () {
            this.items = _.shuffle(this.items)
        }
    }
})

//Staggering List Transitions

var app11 = new Vue({
    el: '#app-11',
    data: {
        query: '',
        list: [
            { msg: 'Bruce Lee' },
            { msg: 'Jackie Chan' },
            { msg: 'Chuck Norris' },
            { msg: 'Jet Li' },
            { msg: 'Kung Fury' }
        ]
    },
    computed: {
        computedList: function () {
            var vm = this
            return this.list.filter(function (item) {
                return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
            })
        }
    },
    methods: {
        beforeEnter: function (el) {
            el.style.opacity = 0
            el.style.height = 0
        },
        enter: function (el, done) {
            var delay = el.dataset.index * 150
            setTimeout(function () {
                Velocity(
                    el,
                    { opacity: 1, height: '1.6em' },
                    { complete: done }
                )
            }, delay)
        },
        leave: function (el, done) {
            var delay = el.dataset.index * 150
            setTimeout(function () {
                Velocity(
                    el,
                    { opacity: 0, height: 0 },
                    { complete: done }
                )
            }, delay)
        }
    }
})

//Dynamic Transitions

var app12 = new Vue({
    el: '#app-12',
    data: {
        show: true,
        fadeInDuration: 1000,
        fadeOutDuration: 1000,
        maxFadeDuration: 1500,
        stop: false
    },
    mounted: function () {
        this.show = false
    },
    methods: {
        beforeEnter: function (el) {
            el.style.opacity = 0
        },
        enter: function (el, done) {
            var vm = this
            Velocity(el,
                { opacity: 1 },
                {
                    duration: this.fadeInDuration,
                    complete: function () {
                        done()
                        if (!vm.stop) vm.show = false
                    }
                }
            )
        },
        leave: function (el, done) {
            var vm = this
            Velocity(el,
                { opacity: 0 },
                {
                    duration: this.fadeOutDuration,
                    complete: function () {
                        done()
                        vm.show = true
                    }
                }
            )
        }
    }
})