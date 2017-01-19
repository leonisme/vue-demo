//v-if

var app1 = new Vue({
    el : '#app-1',
    data : {
        ok : true
    }
})

//Conditional Groups with v-if on <template>

var app2 = new Vue({
    el : '#app-2',
    data : {
        ok : true
    }
})

//v-else

var app3 = new Vue({
    el : '#app-3'
})

//v-else-if

var app4 = new Vue({
    el : '#app-4',
    data : {
        type : 'D'
    }
})

//Controlling Reusable Elements with key

var app5 = new Vue({
    el : '#app-5',
    data : {
        loginType : 'username'
    },
    methods : {
toggle : function () {
    this.loginType = this.loginType==='username' ? 'email':'username';
}
    }
})

//v-show

var app6 = new Vue({
    el : '#app-6',
    data : {
        ok : true
    }
})