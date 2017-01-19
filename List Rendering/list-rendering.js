//Basic Usage

var app1 = new Vue({
    el : '#app-1',
    data: {
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
})

//Template v-for

var app2 = new Vue({
    el : '#app-2',
    data: {
        items: [
            { msg: 'Foo' },
            { msg: 'Bar' }
        ]
    }
})

//Object v-for

var app3 = new Vue({
    el: '#app-3',
    data: {
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        }
    }
})

//Range v-for

var app4 = new Vue({
    el : '#app-4'
})

//Components and v-for

Vue.component('todo-item', {
    template: ' <li>{{ title }} <button v-on:click="$emit(\'remove\')">X</button> </li>',
    props: ['title']
})
var app5 = new Vue({
    el: '#app-5',
    data: {
        newTodoText: '',
        todos: [
            'Do the dishes',
            'Take out the trash',
            'Mow the lawn'
        ]
    },
    methods: {
        addNewTodo: function () {
            this.todos.push(this.newTodoText)
            this.newTodoText = ''
        }
    }
})

//key

var app6 = new Vue({
    el : '#app-6',
    data : {
        items : [
            {id : 1},
            {id : 2},
            {id : 3}
        ]
    }
})