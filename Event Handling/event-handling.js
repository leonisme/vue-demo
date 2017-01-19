//Listening to Events

var app1 = new Vue({
    el: '#app-1',
    data: {
        counter: 0
    }
})

//Method Event Handlers

var app2 = new Vue({
    el : '#app-2',
    data: {
        name: 'Vue.js'
    },
    methods: {
        greet: function (event) {
            alert('Hello ' + this.name + '!')
            if (event) {
                alert(event.target.tagName)
            }
        }
    }
})

//Methods in Inline Handlers
//1st example

var app3 = new Vue({
    el: '#app-3',
    methods: {
        say: function (message) {
            alert(message)
        }
    }
})

//$event example

var app4 = new Vue({
    el : '#app-4',
    methods: {
        warn: function (message, event) {
            // 现在我们可以访问原生事件对象
            if (event) event.preventDefault()
            alert(message)
        }
    }
})