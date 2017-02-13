//Basics
//an example without a render function

Vue.component('anchored-heading-one', {
    template: '#anchored-heading-template',
    props: {
        level: {
            type: Number,
            required: true
        }
    }
})

var app1 = new Vue({
    el : '#app-1'
})

//an example with a render function

Vue.component('anchored-heading-two', {
    render: function (createElement) {
        return createElement(
            'h' + this.level,
            this.$slots.default
        )
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
})

var app2 = new Vue({
    el : '#app-2'
})

//Complete Example

var getChildrenTextContent = function (children) {
    return children.map(function (node) {
        return node.children
            ? getChildrenTextContent(node.children)
            : node.text
    }).join('')
}

Vue.component('anchored-heading-three', {
    render: function (createElement) {
        var headingId = getChildrenTextContent(this.$slots.default)
            .toLowerCase()
            .replace(/\W+/g, '-')
            .replace(/(^\-|\-$)/g, '')
        return createElement(
            'h' + this.level,
            [
                createElement('a', {
                    attrs: {
                        name: headingId,
                        href: '#' + headingId
                    }
                }, this.$slots.default)
            ]
        )
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
})

var app3 = new Vue({
    el : '#app-3'
})

//duplicate the same element/component many times with a factory function

Vue.component('anchored-heading-four',{
    render: function (createElement) {
        return createElement('div',
            Array.apply(null, { length: 20 }).map(function () {
                return createElement('p', 'hi')
            })
        )
    }
})

var app4 = new Vue({
    el : '#app-4'
})

//v-if and v-for

Vue.component('anchored-heading-five', {
    render: function (createElement) {
        if (this.items.length) {
            return createElement('ul', this.items.map(function (item) {
                return createElement('li', item.name)
            }))
        } else {
            return createElement('p', 'No items found.')
        }
    },
data : function () {
    return {
        items : [
            {name : 'name1'},
            {name : 'name2'},
            {name : 'name3'}
        ]
    }
}
})

var app5 = new Vue({
    el : '#app-5'
})

