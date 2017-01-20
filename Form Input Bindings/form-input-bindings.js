//Text

var app1 = new Vue({
    el : '#app-1',
    data : {
        message : ''
    }
})

//Multiline text

var app2 = new Vue({
    el : '#app-2',
    data : {
        message : ''
    }
})

//Checkbox

var app3 = new Vue({
    el : '#app-3',
    data: {
        checkedNames: []
    }
})

//Radio

var app4 = new Vue({
    el : '#app-4',
    data : {
        picked : ''
    }
})

//Selected
//Single select example

var app5 = new Vue({
    el : '#app-5',
    data : {
        selected : ''
    }
})

//Multiple select (bound to Array) example

var app6 = new Vue({
    el : '#app-6',
    data : {
        selected : []
    }
})

//Dynamic options rendered with v-for example

var app7 = new Vue({
    el: '#app-7',
    data: {
        selected: 'A',
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' }
        ]
    }
})

//Checkbox

var app8 = new Vue({
    el : '#app-8',
data : {
        toggle : '',
    a : 'a',
    b : 'b'
}
})

//Radio

var app9 = new Vue({
    el : '#app-9',
    data : {
        pick : '',
        a : 'a'
    }
})

//Select Options

var app10 = new Vue({
    el : '#app-10',
    data : {
        selected : {}
    }
})

//.lazy

var app11 = new Vue({
    el : '#app-11',
    data : {
        msg : ''
    }
})
