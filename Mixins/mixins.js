var Vue = require('vue')

//Basics

{
    let myMixin = {
        created: function () {
            this.hello()
        },
        methods: {
            hello: function () {
                console.log('hello from mixin!')
            }
        }
    }

    let Component = Vue.extend({
        mixins: [myMixin]
    })
    let component = new Component()
}

//mixin hooks will be called before the component’s own hooks

{
    let mixin = {
        created: function () {
            console.log('mixin hook called')
        }
    }
    new Vue({
        mixins: [mixin],
        created: function () {
            console.log('component hook called')
        }
    })
}

//The component’s options will take priority when there are conflicting keys in these objects

{
    let mixin = {
        methods: {
            foo: function () {
                console.log('foo')
            },
            conflicting: function () {
                console.log('from mixin')
            }
        }
    }
    let vm = new Vue({
        created: function () {
          this.foo()
          this.bar()
          this.conflicting()
        },
        mixins: [mixin],
        methods: {
            bar: function () {
                console.log('bar')
            },
            conflicting: function () {
                console.log('from self')
            }
        }
    })
}

//Global Mixin

{
    Vue.mixin({
        created: function () {
            let myOption = this.$options.myOption
            if (myOption) {
                console.log(myOption)
            }
        }
    })
    new Vue({
        myOption: 'hello!'
    })

}

