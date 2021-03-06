Vue.component('stat', {
    props: ['data'],
    template: `
    <div class="stat bordered"
    v-bind:class="[data.increase ? 'increase' : '', data.decrease ? 'decrease' : '']"
    >
        <div class="stat-name">
            {{ data.name }}
        </div>
        <div class="stat-amount">
            {{ data.amount }}
        </div>
    </div>
    `
})

Vue.component('item', {
    props: ['data'],
    template: `
    <div class="item">
        {{ data.name }}
    </div>
    `
})

Vue.component('choice', {
    props: ['data'],
    template: `
    <div class="choice">
        {{ data.text }}
    </div>
    `
})

Vue.component('item', {
    props: ['data'],
    template: `
    <div class="item">
        {{ data.name }}
    </div>
    `
})

  
var app = new Vue({
    el: '#app',
    delimiters: ['[[', ']]'],
    data: {
        stats: [
            {
                "id":0,
                "name":"Mental Health",
                "amount":100
            },
            {
                "id":1,
                "name":"Strength",
                "amount":0
            },
            {
                "id":2,
                "name":"Money",
                "amount":23
            },
            {
                "id":3,
                "name":"Poison Resistance",
                "amount":0
            },
            {
                "id":4,
                "name":"Accent",
                "amount":0
            },
            {
                "id":5,
                "name":"Swearing",
                "amount":0
            },
            {
                "id":6,
                "name":"Ute",
                "amount":0
            }
        ],
        items: [
            {
                "id":0,
                "name":"Phone"
            }
        ],
        "scenario": null,
        "scenarioText":"",
        "choices": [],
        "textspeed":"slow"
    },
    methods: {
        loadScenario: function(s) {
            app.scenario = s;
            app.choices = [];

            app.animateText(0);
        },
        animateText: function(char) {
            if (app.textspeed === "instant") {
                app.scenarioText = app.scenario.text.substring(0, app.scenario.text.length);
                app.loadChoices();
                return;
            }

            app.scenarioText = app.scenario.text.substring(0, char);

            speeds = {
                "slow":45,
                "fast":10,
                "instant":1
            }

            
            if (char < app.scenario.text.length) {
                setTimeout(function() {app.animateText(char+1)}, speeds[app.textspeed]);
            } else {
                app.loadChoices();
            }
        },
        statsInDict: function() {
            d = {};
            for (stat of app.stats) {
                d[stat.name] = stat;
            }
            return d;
        },
        loadChoices: function() {
            for (choice of app.scenario.choices) {
                if (choice.condition == null) {
                    app.choices.push(choice);
                } else if (choice.condition(app.statsInDict(), app.items)) {
                    app.choices.push(choice);
                }
            }
        },
        hoverChoice: function(choice) {
            for (stat of app.stats) {

                stat.increase = false;
                stat.decrease = false;

                if (choice.stats != null) {
                    for (s in choice.stats) {
                        if (stat.name === s) {
                            stat.id += 10;
                            if (choice.stats[s] > 0) {
                                stat.increase = true;
                            }
                            if (choice.stats[s] < 0) {
                                stat.decrease = true;
                            }
                        }
                    }
                }
            }
        },
        unhoverChoice: function(choice) {
            for (stat of app.stats) {
                stat.increase = false;
                stat.decrease = false;
                stat.id += 10;
            }
        },
        clickChoice: function(choice) {

            app.unhoverChoice(choice);
            for (stat of app.stats) {
                if (choice.stats != null) {
                    for (s in choice.stats) {
                        if (stat.name === s) {
                            stat.id += 10;
                            stat.amount += choice.stats[s];
                        }
                    }
                }
            }

            if (choice.items != null) {
                for (i of choice.items) {
                    app.items.add(i);
                }
            }

            if (app.statsInDict()['Mental Health'].amount <= 0) {
                app.loadScenario(gameovermental);
                return;
            }

            app.loadScenario(choice.next(app.statsInDict(), app.items));
        },
        changeTextSpeed: function() {
            if (app.textspeed === "slow") {
                app.textspeed = "fast";
                return;
            }
            if (app.textspeed === "fast") {
                app.textspeed = "instant";
                return;
            }
            if (app.textspeed === "instant") {
                app.textspeed = "slow";
                return;
            }
        }
    }
})

app.loadScenario(start)