function contains(list, element) {
    for (l of list) {
        if (l["name"] === element) {
            return true;
        }
    }
    return false;
}

gameovermental = {
    "text":`
    Actually, I'm starting to like it here
    <br> ... <br>
    The people, the culture
    <br> ... <br>
    Thanks for your help, but I'll stay here now
    <br> ... <br>
    <br> ..... <br>
    <br> ............ <br>
    <b> Game Over: Went Insane </b>
    `,
    "choices": [
    ]
}

start = {
    "text":`
    Hello? <br>
    Is anyone there?
    `,
    "choices": [
        {
            "text":"Hello?",
            "stats": {
            },
            next: function(stats, items) {return start2}
        }
    ]
}

start2 = {
    "text":`
    I don't know who you are
    <br> ... <br>
    but you have to help me!
    `,
    "choices": [
        {
            "text":"Okay?",
            "stats": {
            },
            next: function(stats, items) {return start3},
        },
        {
            "text":"How can I help?",
            "stats": {
                "Mental Health":1,
            },
            next: function(stats, items) {return start3}
        }
    ]
}

start3 = {
    "text":`
    Alright so
    <br> ... <br>
    I was planning on going to Japan, right
    <br> ... <br>
    Manga and Stuff, I hope you get it
    <br> ... <br>
    but then the pilot says there's going to be a storm and I thought \"Oh we're gonna be fine\"
    <br>
    next second I know we're in free fall towards the ocean! Well I thought there was like Ocean below Japan
    <br>
    but then we crashed into this desert! It was horrible I almost threw up
    `,
    "choices": [
        {
            "text":"And *why* are you calling me exactly?",
            "stats": {
                "Mental Health":-1
            },
            next: function(stats, items) {return start4},
        },
        {
            "text":"Oh that sounds terrible",
            "stats": {
            },
            next: function(stats, items) {return start4},
        },
    ]
}

start4 = {
    "text":`
    So then I took the phone of some old lady and just dialled random numbers
    <br> ... <br>
    and called you
    <br> ... <br>
    Please Help me!
    <br> ... <br>
    This place is terrible, there's just sand everywhere and I have no idea how to continue
    `,
    "choices": [
        {
            "text":"Have you considered calling your mother?",
            "stats": {
                "Mental Health":-5
            },
            next: function(stats, items) {return mom},
        },
        {
            "text":"Alright, where are you right now?",
            "stats": {
            },
            next: function(stats, items) {return start5},
        },
    ]
}

mom = {
    "text":`
    I'm not going to tell my mom I'm stranded in the middle of nowhere!
    <br> ... <br>
    She doesn't think much of me anyway at the moment... Just gonna say 'it's your fault for flying cheap'
    `,
    "choices": [
        {
            "text":"*Sigh* Fine I'll help you",
            "stats": {
                "Mental Health":5
            },
            next: function(stats, items) {return start5},
        }
    ]
}

start5 = {
    "text":`
    Thank you so much! 
    <br> ... <br>
    As said, I'm currently in a massive dirty hot desert and sweating so much
    <br> ... <br>
    Any idea what to do?
    `,
    "choices": [
        {
            "text":"Where is the crashed plane right now?",
            "stats": {
            },
            next: function(stats, items) {return plane1},
        },
        {
            "text":"Are there any settlements nearby?",
            "stats": {
            },
            next: function(stats, items) {return hub},
        }
    ]
}

plane1 = {
    "text":`
    Yeah, it stopped burning a few hours ago
    <br> ... <br>
    I don't think anyone else is alive
    <br> ... <br>
    Let me get a closer look
    `,
    "choices": [
        {
            "text":"...",
            "stats": {
            },
            next: function(stats, items) {return plane2},
        }
    ]
}

plane2 = {
    "text":`
    There's still the old lady I took the phone from
    <br> ... <br>
    There's also like a business guy
    <br> ... <br>
    And I think I could get to the pilot
    `,
    "choices": [
        {
            "text":"Check on the old lady",
            "stats": {
            },
            next: function(stats, items) {return lady},
        },
        {
            "text":"Check on the business guy",
            "stats": {
            },
            next: function(stats, items) {return business},
        },
        {
            "text":"Check on the pilot",
            "stats": {
            },
            next: function(stats, items) {return pilot},
        },
        {
            "text":"I think we're done here, let's leave",
            "stats": {
            },
            next: function(stats, items) {return hub},
        }
    ]
}

lady = {
    "text":`
    Wow she has a lot of stuff in her bag
    <br> ... <br>
    Why do people carry so much?
    Deodorant? like really?
    <br> ... <br>
    Huh, there's a dictionary here
    <br> ... <br>
    "English to Australian"
    `,
    "choices": [
        {
            "text":"Maybe read a bit?",
            "stats": {
                "Mental Health":-1,
                "Accent":2
            },
            next: function(stats, items) {return dictionary},
        },
        {
            "text":"Check on the others",
            "stats": {
            },
            next: function(stats, items) {return plane2},
        }
    ]
}

dictionary = {
    "text":`
    Sure I guess?
    <br> ... <br>
    Huh, did you know that you can say "Mate" to your friends in Australia?
    <br>
    Is that like the n-word for Australians?
    `,
    "choices": [
        {
            "text":"Continue reading",
            "stats": {
                "Mental Health":-5,
                "Accent":2
            },
            next: function(stats, items) {return dictionary2},
        },
        {
            "text":"Check on the others",
            "stats": {
            },
            next: function(stats, items) {return plane2},
        }
    ]
}

dictionary2 = {
    "text":`
    Apparently if you want to kill someone
    <br>
    You tend to just say "You alright Mate, yeah you alright Mate"
    <br> ... <br>
    `,
    "choices": [
        {
            "text":"Continue reading",
            "stats": {
                "Mental Health":-5,
                "Accent":2
            },
            next: function(stats, items) {return dictionary3},
        },
        {
            "text":"Check on the others",
            "stats": {
            },
            next: function(stats, items) {return plane2},
        }
    ]
}

dictionary3 = {
    "text":`
    Oh there's a section on cultural traditions
    <br> ... <br>
    Apparently they make their own wine?
    <br> ... <br>
    And drive around in cars called 'Utes'?
    `,
    "choices": [
        {
            "text":"Continue reading",
            "stats": {
                "Mental Health":-20,
                "Accent":2
            },
            next: function(stats, items) {return dictionary4},
        },
        {
            "text":"Check on the others, this is getting dangerous",
            "stats": {
            },
            next: function(stats, items) {return plane2},
        }
    ]
}

dictionary4 = {
    "text":`
    Oh a section on politics
    <br> ... <br>
    did you know Australia has a two-party system?
    <br> ... <br>
    despite having proportional voting
    <br> ... <br>
    `,
    "choices": [
        {
            "text":"Continue reading",
            "stats": {
                "Mental Health":-70,
                "Accent":2
            },
            next: function(stats, items) {return dictionary5},
        },
        {
            "text":"Check on the others, this is getting dangerous",
            "stats": {
            },
            next: function(stats, items) {return plane2},
        }
    ]
}

business = {
    "text":`
    He's carrying like a big suitcase
    <br> ... <br>
    Hmmm it's locked with a combination lock
    `,
    "choices": [
        {
            "text":"Break open the lock",
            "stats": {
            },
            next: function(stats, items) {
                if (stats["Strength"].amount > 9) {
                    return opensuccess;
                } else {
                    return openfail;
                }
            },
        },
        {
            "text":"Check on the others",
            "stats": {
            },
            next: function(stats, items) {return plane2},
        }
    ]
}

opensuccess = {
    "text":`
    Ow... that hurt...
    <br> ... <br>
    I did open it tho
    <br> ... <br>
    Huh, there are some banknotes in here
    <br>
    Looks like Monopoly Money
    <br> ... <br>
    'Australian Dollars'? Whatever
    `,
    "choices": [
        {
            "text":"Take the money and check on the others",
            "stats": {
                "Money":500
            },
            next: function(stats, items) {return plane2},
        }
    ]
}

openfail = {
    "text":`
    Ow... that hurt...
    <br> ... <br>
    I think I'm too weak to open that
    <br> ... <br>
    `,
    "choices": [
        {
            "text":"Check on the others",
            "stats": {
            },
            next: function(stats, items) {return plane2},
        }
    ]
}

pilot = {
    "text":`
    Huh, there's a small scorpion in the way
    <br> ... <br>
    `,
    "choices": [
        {
            "text":"Continue walking",
            "stats": {
                "Poison Resistance":3
            },
            next: function(stats, items) {
                if (stats["Poison Resistance"].amount > 5) {
                    return pilot2;
                }
                return gameoverpoison;
            },
        },
        {
            "text":"Check on the others",
            "stats": {
            },
            next: function(stats, items) {return plane2},
        }
    ]
}

// TODO
pilot2 = {
    "text":`
    Looks like he's some coal representative...
    <br> ... <br>
    has a company card
    `,
    "choices": [
        {
            "text":"Take the card and check on the others",
            "stats": {
            },
            next: function(stats, items) {
                items.push({
                    "id":1,
                    "name":"Coal Company Card",
                });
                return plane2;
            },
        }
    ]
}

gameoverpoison = {
    "text":`
    Owww, it stung me! it stung me!
    <br> ... <br>
    What do I
    <br> ... <br>
    The ground seems very comfortable
    <br> ... <br>
    <br> ... <br>
    <br> ..... <br>
    <br> ............ <br>
    <b> Game Over </b>
    `,
    "choices": [
    ]
}

hub = {
    "text":`
    To the left there's the crashed plane
    <br> ... <br>
    To the right there's a town
    <br> ... <br>
    The town sign says 'Fucking' apparently
    `,
    "choices": [
        {
            "text":"Check on the crashed plane",
            "stats": {},
            next: function(stats, items) {return plane1},
        },
        {
            "text":"Go to the town",
            "stats": {
                "Mental Health":-3
            },
            next: function(stats, items) {return town},
        }
    ]
}

town = {
    "text":`
    There are only two buildings...
    <br> ... <br>
    There's a large one named 'Ulbrichts Utes'
    <br> ... <br>
    And a smaller one which looks like a bar
    `,
    "choices": [
        {
            "text":"Leave in your Ute",
            condition: function(stats, items) {
                return stats['Ute'].amount > 0;
            },
            "stats": {},
            next: function(stats, items) {return ute}
        },
        {
            "text":"Visit the Ute Store",
            "stats": {},
            next: function(stats, items) {return utestore},
        },
        {
            "text":"Visit the Bar",
            "stats": {
            },
            next: function(stats, items) {return bar},
        },
        {
            "text":"Leave the Town",
            "stats": {
                "Mental Health":3
            },
            next: function(stats, items) {return hub}
        }
    ]
}

utestore = {
    "text":`
    Uhh there's a scary Australian guy in there behind the counter
    <br> ... <br>
    What should I tell him?
    `,
    "choices": [
        {
            "text":"Ask to buy a Ute",
            "stats": {},
            next: function(stats, items) {
                if (stats["Accent"].amount < 3) {
                    return buyaccentfail;
                }
                if (stats["Money"].amount < 500) {
                    return buymoneyfail;
                }
                buysuccess;
            },
        },
        {
            "text":"Ask to work at the store",
            "stats": {
            },
            next: function(stats, items) {return utework},
        },
        {
            "text":"Leave the store",
            "stats": {
            },
            next: function(stats, items) {return town},
        }
    ]
}

buyaccentfail = {
    "text":`
    He was so mean!
    <br> ... <br>
    He said something like <br>
    'Ain't nobody gonna sell you a Ute with an accent like that, talk like an Australian, mate'
    <br> ... <br>
    `,
    "choices": [
        {
            "text":"Ask to work at the store",
            "stats": {
            },
            next: function(stats, items) {return utework},
        },
        {
            "text":"Leave the store",
            "stats": {
            },
            next: function(stats, items) {return town},
        }
    ]
}

buymoneyfail = {
    "text":`
    Ugh... <br>
    He says I need at least 500 of their 'Australian Dollars'
    <br>
    `,
    "choices": [
        {
            "text":"Ask to work at the store",
            "stats": {
            },
            next: function(stats, items) {return utework},
        },
        {
            "text":"Leave the store",
            "stats": {
            },
            next: function(stats, items) {return town},
        }
    ]
}

buysuccess = {
    "text":`
    I have it! I've got the accent and the money
    <br> ... <br>
    Time to buy a Ute
    `,
    "choices": [
        {
            "text":"...",
            "stats": {
                "Ute":1
            },
            next: function(stats, items) {return buysuccess2},
        }
    ]
}

buysuccess2 = {
    "text":`
    I did it! <br>
    I got one of those ugly utes
    `,
    "choices": [
        {
            "text":"Go back to the town",
            "stats": {
            },
            next: function(stats, items) {return utework},
        },
        {
            "text":"Leave in your Ute",
            "condition": function(stats, items) {
                return stats['Ute'].amount > 0;
            },
            "stats": {},
            next: function(stats, items) {return ute}
        }
    ]
}

utework = {
    "text":`
    Alright so he said he's gonna give 5 dollars an hour
    <br> ... <br>
    I suppose I have to do this?
    `,
    "choices": [
        {
            "text":"Yes, I'll see you in an hour",
            "stats": {
                "Money":5,
                "Mental Health":-1,
                "Accent":1
            },
            next: function(stats, items) {return utework2},
        },
        {
            "text":"Nope, leave",
            "stats": {
            },
            next: function(stats, items) {return town},
        }
    ]
}

utework2 = {
    "text":`
    Ugh I'm so tired, all these idiots just come in
    <br> ... <br>
    and want to talk about stupid cars
    <br> ... <br>
    one of them ranted to me about how electric cars are going to destroy the roads for 20 minutes
    `,
    "choices": [
        {
            "text":"Continue Working",
            "stats": {
                "Money":5,
                "Mental Health":-5,
                "Accent":1
            },
            next: function(stats, items) {return utework2},
        },
        {
            "text":"Enough work for now",
            "stats": {
            },
            next: function(stats, items) {return town},
        }
    ]
}

utework3 = {
    "text":`
    More work...
    <br> ... <br>
    More work...
    `,
    "choices": [
        {
            "text":"Continue Working",
            "stats": {
                "Money":5,
                "Mental Health":-10,
                "Accent":1
            },
            next: function(stats, items) {return utework3},
        },
        {
            "text":"Enough work for now",
            "stats": {
            },
            next: function(stats, items) {return town},
        }
    ]
}

bar = {
    "text":`
    Ugh it's so stinky in here
    <br> ... <br>
    there are some people playing poker
    <br> ... <br>
    and two scary dudes doing armwrestling
    <br> ... <br>
    the barman seems nice though
    <br> ... <br>
    seems like I need money for basically all activities in here
    `,
    "choices": [
        {
            "text":"Play some Poker",
            "stats": {
                "Swearing":1,
                "Accent":1
            },
            condition: function(stats, items) {
                return stats['Money'].amount >= 10;
            },
            next: function(stats, items) {
                if (Math.random() > 0.5) {
                    return pokerwin;
                }
                return pokerlose;
            }
        },
        {
            "text":"Challenge someone in armwrestling",
            "stats": {
                "Strength":1,
                "Swearing":1,
                "Accent":1
            },
            condition: function(stats, items) {
                return stats['Money'].amount >= 5;
            },
            next: function(stats, items) {
                if (stats["Strength"].amount > 10) {
                    return wrestewin;
                }
                return wrestelose;
            },
        },
        {
            "text":"Get a drink",
            "stats": {
                "Money":-3,
                "Mental Health":2,
                "Poison Resistance":1
            },
            condition: function(stats, items) {
                return stats['Money'].amount >= 3;
            },
            next: function(stats, items) {return drink},
        },
        {
            "text":"Leave the bar",
            "stats": {
                "Mental Health":3
            },
            next: function(stats, items) {return hub}
        }
    ]
}

pokerlose = {
    "text":`
    Uhhh... I lost some money
    `,
    "choices": [
        {
            "text":"...",
            "stats": {
                "Money":-10
            },
            next: function(stats, items) {
                return bar;
            }
        },
    ]
}

pokerwin = {
    "text":`
    I got it! <br>
    I won <br> ... <br>
    Not much but it was like in one of those gambling animes
    <br> I looked really cool when I laid down my hand
    <br> ... <br>
    `,
    "choices": [
        {
            "text":"...",
            "stats": {
                "Money":10
            },
            next: function(stats, items) {
                return bar;
            }
        },
    ]
}

wrestelose = {
    "text":`
    Ow... those guys are really strong
    `,
    "choices": [
        {
            "text":"...",
            "stats": {
                "Money":-5
            },
            next: function(stats, items) {
                return bar;
            }
        },
    ]
}

wrestlewin = {
    "text":`
    Oh my god... <br> ... <br>
    I destroyed that guy! I won!
    <br> ... <br>
    my arm still hurts though
    `,
    "choices": [
        {
            "text":"...",
            "stats": {
                "Mental Health":10,
                "Money":5
            },
            next: function(stats, items) {
                return bar;
            }
        },
    ]
}

drink = {
    "text":`
    Bleh... that tastes disgusting
    `,
    "choices": [
        {
            "text":"Get another drink",
            "stats": {
                "Money":-3,
                "Mental Health":2,
                "Poison Resistance":1
            },
            condition: function(stats, items) {
                return stats['Money'].amount >= 3;
            },
            next: function(stats, items) {return drink2},
        },
        {
            "text":"Enough drinking for now",
            "stats": {
                "Mental Health":-1
            },
            next: function(stats, items) {return bar},
        }
    ]
}

drink2 = {
    "text":`
    Their beer is really terrible...
    `,
    "choices": [
        {
            "text":"Get another drink",
            "stats": {
                "Money":-3,
                "Mental Health":4,
                "Poison Resistance":1
            },
            condition: function(stats, items) {
                return stats['Money'].amount >= 3;
            },
            next: function(stats, items) {return drink3},
        },
        {
            "text":"Enough drinking for now",
            "stats": {
                "Mental Health":-2
            },
            next: function(stats, items) {return bar},
        }
    ]
}

drink3 = {
    "text":`
    I suppooose drinking is kind of nicee...
    <br> ... <br>
    <br> ... <br>
    bleh
    `,
    "choices": [
        {
            "text":"Get another drink",
            "stats": {
                "Money":-3,
                "Mental Health":-3,
                "Poison Resistance":1
            },
            condition: function(stats, items) {
                return stats['Money'].amount >= 3;
            },
            next: function(stats, items) {return drink3},
        },
        {
            "text":"Enough drinking for now",
            "stats": {
                "Mental Health":-5
            },
            next: function(stats, items) {return bar},
        }
    ]
}

ute = {
    "text":`
    I checked the GPS and the closest airport is
    <br> ... <br>
    7 hours away
    <br> ... <br>
    Uhh any ideas?
    `,
    "choices": [
        {
            "text":"Good luck driving, see you in 7 hours",
            "stats": {
                "Mental Health":-3
            },
            next: function(stats, items) {
                return airport
            }
        }
    ]
}

airport = {
    "text":`
    That was a long drive
    <br> ... <br>
    I hope it was worth it
    <br> ... <br>
    I just have to catch the next plane to Japan
    `,
    "choices": [
        {
            "text":"...",
            "stats": {
            },
            next: function(stats, items) {
                return airport2
            }
        }
    ]
}

airport2 = {
    "text":`
    There's a terminal right in front of me
    <br> ... <br>
    Next to it there is some fast food place
    `,
    "choices": [
        {
            "text":"Go to the terminal",
            "stats": {
            },
            next: function(stats, items) {
                return terminal
            }
        },
        {
            "text":"Go to fast food place",
            "stats": {
            },
            next: function(stats, items) {
                return fastfood
            }
        }
    ]
}

fastfood = {
    "text":`
    There is a middle-aged man eating at a table
    <br> ... <br>
    seemingly all by himself
    `,
    "choices": [
        {
            "text":"Talk to the man",
            "stats": {
            },
            next: function(stats, items) {
                return man
            }
        },
        {
            "text":"Go back",
            "stats": {
            },
            next: function(stats, items) {
                return airport2
            }
        }
    ]
}

man = {
    "text":`
    He says he's the Prime Minister of Australia
    `,
    "choices": [
        {
            "text":"Ask him if he lets you travel to Japan",
            "stats": {
            },
            next: function(stats, items) {
                return man2
            }
        },
        {
            "text":"Go back",
            "stats": {
            },
            next: function(stats, items) {
                return airport2
            }
        }
    ]
}

man2 = {
    "text":`
    He says No
    <br> ... <br>
    `,
    "choices": [
        {
            "text":"Punch him",
            "stats": {
            },
            condition: function(stats, items) {
                return stats['Strength'].amount > 6;
            },
            next: function(stats, items) {
                return punch;
            }
        },
        {
            "text":"Swear at him",
            "stats": {
            },
            condition: function(stats, items) {
                return stats['Swearing'].amount > 6;
            },
            next: function(stats, items) {
                return swear;
            }
        },
        {
            "text":"Pretend to be a coal representative",
            "stats": {
                "Money":5000
            },
            condition: function(stats, items) {
                return contains(items, "Coal Company Card");
            },
            next: function(stats, items) {
                return pretend;
            }
        },
        {
            "text":"Go back",
            "stats": {
            },
            next: function(stats, items) {
                return airport2
            }
        }
    ]
}

punch = {
    "text":`
    Uhhh... okay... I suppose, give me a minute
    <br> ... <br>
    <br> ... <br>
    <br> ... <br>
    Oh wow
    <br> ... <br>
    he's lying on the ground in pain
    <br> ... <br>
    and uhhh...
    <br> ... <br>
    pretty sure he pooped his pants
    <br> ... <br>
    oh he's saying I'm allowed to go to Japan now, sweet
    `,
    "choices": [
        {
            "text":"...",
            "stats": {
            },
            next: function(stats, items) {
                items.push(
                    {
                    "id":42,
                    "name":"Prime Minister soiled himself"
                    }
                    );
                return airport2;
            },
        }
    ]
}


swear = {
    "text":`
    Oh that's fun, I can use all the new ones I learned
    <br> ... <br>
    <br> ... <br>
    <br> ... <br>
    Oh wow
    <br> ... <br>
    pretty sure he pooped his pants
    <br> ... <br>
    oh he's saying I'm allowed to go to Japan now, sweet
    `,
    "choices": [
        {
            "text":"...",
            "stats": {
            },
            next: function(stats, items) {
                items.push(
                    {
                    "id":42,
                    "name":"Prime Minister soiled himself"
                    }
                    );
                return airport2;
            },
        }
    ]
}

pretend = {
    "text":`
    this guy is really weird
    <br> ... <br>
    He was like overjoyed to see me
    <br> ... <br>
    He instantly took some bank notes out of his pocket and handed them to me
    <br> ... <br>
    He also said I was allowed to go to Japan this instant
    <br> ... <br>
    Oh now he's running to the bathroom
    <br> ... <br>
    Pretty sure he pooped his pants
    `,
    "choices": [
        {
            "text":"...",
            "stats": {
            },
            next: function(stats, items) {
                items.push(
                    {
                    "id":42,
                    "name":"Prime Minister soiled himself"
                    }
                    );
                return airport2;
            },
        }
    ]
}

terminal = {
    "text":`
    What should I ask?
    `,
    "choices": [
        {
            "text":"Next plane to Japan",
            "stats": {
            },
            next: function(stats, items) {
                if (contains(items, "Prime Minister soiled himself")) {
                    return japan;
                }
                return japanfail;
            },
        },
        {
            "text":"Next plane to England",
            "stats": {
            },
            next: function(stats, items) {
                return england
            }
        },
        {
            "text":"Step away from the terminal",
            "stats": {
            },
            next: function(stats, items) {
                return airport2;
            }
        }
    ]
}

japanfail = {
    "text":`
    They told me that I could not go to Japan
    <br> ... <br>
    Something about Australia's migration policy
    <br> ... <br>
    Funnily enough the prime minister responsible for this policy is currently also in this airport
    `,
    "choices": [
        {
            "text":"Step away from the terminal",
            "stats": {
            },
            next: function(stats, items) {
                return airport2;
            }
        }
    ]
}

japan = {
    "text":`
    Finally! I'm so glad I was able to get out of this hellhole
    <br> ... <br>
    alright I can go on a private plane in a few hours
    <br> ... <br>
    Thank you so much for all your help!
    <br>
    <br>
    <b> The End </b>
    `,
    "choices": [
    ]
}

england = {
    "text":`
    I suppose that's the only option
    <br> ... <br>
    alright I can go in a few hours
    <br> ... <br>
    I do wonder how it would've been to go to Japan
    <br>
    Maybe there was still some option
    <br> ... <br>
    Thanks for all your help
    <br>
    <br>
    <b> The Bad Ending: England </b>
    `,
    "choices": [
    ]
}