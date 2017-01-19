//Object Syntax
//1st example

var app1 = new Vue({
    el : '#app-1',
    data: {
        isActive: true,
        hasError: false
    }
})

//2nd example

var app2 = new Vue({
    el : '#app-2',
    data: {
        isActive: true,
        error: null
    },
    computed: {
        classObject: function () {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal',
            }
        }
    }
})

//Array Syntax
//1st example

var app3 = new Vue({
    el : '#app-3',
    data: {
        isActive : true,
        activeClass: 'active',
        errorClass: 'text-danger'
    }
})

//With Components

Vue.component('my-component', {
    template: '<p class="foo bar">Hi</p>',
})

var app4 = new Vue({
    el : '#app-4',
    data : {
        isActive : true
    }
})

//Object Syntax

var app5 = new Vue({
    el : '#app-5',
    data : {
        styleObject: {
            color: 'red',
            fontSize: '13px'
        }
    }
})

//Array Syntax

var app6 = new Vue({
    el : '#app-6',
    data : {
        color: {color : 'red'},
        fontSize:{fontSize : '13px'}
    }
})
