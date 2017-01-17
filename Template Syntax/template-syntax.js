//Text
//v-on example

var app1 = new Vue({
    el : '#app-1',
    data : {
        msg : 'Never Change!'
    }
})

//Raw HTML
//v-html example

var app2 = new Vue({
    el : '#app-2',
    data : {
        rawHtml : '<p>Raw HTML</p>'
    }
})

//Using JavaScript Expressions

var app3 = new Vue({
    el : '#app-3',
    data : {
        id : 'idname'
    }
})

//Modifiers
//v-on:submit.prevent example

var app4 = new Vue({
    el : '#app-4',
    data : {
        msg : 'Click submit button.'
    },
    methods : {
        onSubmit : function () {
            this.msg = 'Default event has been prevented.'
        }
}
})

//Filters

var app5 = new Vue({
    el : '#app-5',
    data : {
        message : 'capitalize'
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
})

//Shorthands
//v-bind Shorthand example

var app6 = new Vue({
    el : '#app-6',
    data : {
        url : 'https://vuejs.org'
    },
    methods : {
        doSomething : function () {
            location.href = 'https://vuejs.org';
        }
    }
})