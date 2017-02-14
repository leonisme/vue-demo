//Intro
//register a directive globally

Vue.directive('focus', {
    inserted: function (el) {
        el.focus()
    }
})

var app1 = new Vue({
    el : '#app-1'
})

//register a directive locally

Vue.component('anchored',{
    template : '<input type="radio" v-checked>',
    directives : {
        checked : {
            inserted : function (el) {
                el.setAttribute('checked','')
            }
        }
    }
})

var app2 = new Vue({
    el : '#app-2'
})

//Directive Hook Arguments

Vue.directive('demo', {
    bind: function (el, binding, vnode) {
        var s = JSON.stringify
        el.innerHTML =
            'name: '       + s(binding.name) + '<br>' +
            'value: '      + s(binding.value) + '<br>' +
            'expression: ' + s(binding.expression) + '<br>' +
            'argument: '   + s(binding.arg) + '<br>' +
            'modifiers: '  + s(binding.modifiers) + '<br>' +
            'vnode keys: ' + Object.keys(vnode).join(', ')
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        message: 'hello!'
    }
})

//Function Shorthand

Vue.directive('color-swatch', function (el, binding) {
    el.style.backgroundColor = binding.value
})

var app4 = new Vue({
    el : '#app-4',
    data : {
        color : 'green'
    }
})

//Object Literals

Vue.directive('demo', function (el, binding) {
    console.log(binding.value.color) // => "white"
    console.log(binding.value.text)  // => "hello!"
})

var app5 = new Vue({
    el : '#app-5'
})
