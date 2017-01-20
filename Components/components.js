//Registration

Vue.component('my-component', {
    template: '<div>A custom component!</div>'
})

var app1 = new Vue({
    el: '#app-1'
})

//Local Registration

var Child = {
    template: '<div>A custom component!</div>'
}
var app2 = new Vue({
    el : '#app-2',
    components: {
        'my-component': Child
    }
})

//data Must Be a Function

Vue.component('simple-counter', {
    template: '<button v-on:click="counter += 1">{{ counter }}</button>',
    data: function () {
        return {
            counter : 0
        }
    }
})
var app3 = new Vue({
    el: '#app-3'
})

//Passing Data with Props

Vue.component('child', {
    props: ['message'],
    template: '<span>{{ message }}</span>'
})

var app4 = new Vue({
    el : '#app-4'
})

//Dynamic Props

var app5 = new Vue({
    el: '#app-5',
    data: {
        parentMsg: 'Message from parent'
    },
    components: {
        'child': {
            props: ['myMessage'],
            template: '<span>{{myMessage}}</span>'
        }
    }
})

//Using v-on with Custom Events

Vue.component('button-counter', {
    template: '<button v-on:click="increment">{{ counter }}</button>',
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        increment: function () {
            this.counter += 1
            this.$emit('increment')
        }
    },
})
new Vue({
    el: '#app-6',
    data: {
        total: 0
    },
    methods: {
        incrementTotal: function () {
            this.total += 1
        }
    }
})
