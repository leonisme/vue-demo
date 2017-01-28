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
var app6 = new Vue({
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


//Form Input Components using Custom Events

Vue.component('currency-input', {
    template: '\
    <div>\
      <label v-if="label">{{ label }}</label>\
      $\
      <input\
        ref="input"\
        v-bind:value="value"\
        v-on:input="updateValue($event.target.value)"\
        v-on:focus="selectAll"\
        v-on:blur="formatValue"\
      >\
    </div>\
  ',
    props: {
        value: {
            type: Number,
            default: 0
        },
        label: {
            type: String,
            default: ''
        }
    },
    mounted: function () {
        this.formatValue()
    },
    methods: {
        updateValue: function (value) {
            var result = currencyValidator.parse(value, this.value)
            if (result.warning) {
                this.$refs.input.value = result.value
            }
            this.$emit('input', result.value)
        },
        formatValue: function () {
            this.$refs.input.value = currencyValidator.format(this.value)
        },
        selectAll: function (event) {
            // Workaround for Safari bug
            // http://stackoverflow.com/questions/1269722/selecting-text-on-focus-using-jquery-not-working-in-safari-and-chrome
            setTimeout(function () {
                event.target.select()
            }, 0)
        }
    }
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        price: 0,
        shipping: 0,
        handling: 0,
        discount: 0
    },
    computed: {
        total: function () {
            return ((
                this.price * 100 +
                this.shipping * 100 +
                this.handling * 100 -
                this.discount * 100
            ) / 100).toFixed(2)
        }
    }
})

//Single Slot

Vue.component('my-component',{
    template : '\
    <div>\
    <h2>I\'m the child title</h2>\
    <slot>\
    This will only be displayed if there is no content\
to be distributed.\
</slot>\
</div>\
'
})

var app8 = new Vue({
    el : '#app-8'
})

//Named Slots

Vue.component('app-layout',{
    template : '<div class="container">\
    <header>\
    <slot name="header"></slot>\
    </header>\
    <main>\
    <slot></slot>\
    </main>\
    <footer>\
    <slot name="footer"></slot>\
    </footer>\
    </div>\
    '
    }
)

var app9 = new Vue({
    el : '#app-9'
})

//Scoped Slots
//1st example

Vue.component('child',{
    template : '<div class="child">\
    <slot text="hello from child"></slot>\
    </div>\
    '
})

var app10 = new Vue({
    el : '#app-10'
})

//2nd example

Vue.component('my-awesome-list',{
    props : ['items'],
    template : '<ul>\
    <slot name="item"\
v-for="item in items"\
    :text="item.text">\
</slot>\
</ul>\
'
})

var app11 = new Vue({
    el : '#app-11',
    data : {
        items : [
            {text : 'text1'},
            {text : 'text2'},
            {text : 'text3'}
        ]
    }
})

//is

var app12 = new Vue({
    el: '#app-12',
    data: {
        currentView: 'home'
    },
    methods : {
        changeComponent : function () {
            if(this.currentView === 'home'){
                this.currentView = 'posts';
            }else if(this.currentView === 'posts'){
                this.currentView = 'archive';
            }else {
                this.currentView = 'home';
            }
        }
    },
    components: {
        home: { template : '<p>home</p>' },
        posts: { template : '<p>posts</p>' },
        archive: { template : '<p>archive</p>' }
    }
})

//Async Components

Vue.component('async-example', function (resolve, reject) {
    setTimeout(function () {
        resolve({
            template: '<div>I am async!</div>'
        })
    }, 1000)
})

var app13 = new Vue({
    el : '#app-13'
})