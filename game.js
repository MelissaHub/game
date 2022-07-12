const textElement = documnet.getElementById('text')

const optionButtons =  document.getElementById('option-buttons')


let state = {}

function startGame(){ 

    state ={}
    showTextNode(1)

}


function showTextNode(textNodeIndex) { 

const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)

textElement.innerText = textNode.text
 
while (optionButtonsElement.firstchild){ 
    optionbuttonsElement.removechild(optionButtonselement.firstchild)
}

textNode.options.forEach(option => {
    if (showOption(option)){ 
        const button = document.createElement('button')
        button.innerText = option.text
        button.classlist.add('btn')
        button.addEventListener('click',() => selectOption(option))
        optionsButtonsElement.appenchild(button)
    }
})

}
function showOption(option){ 
    return option.requiredState == null || option.requiredState(state)
}


function selectOption(option){ 

    const nextTextNodeId = option.nextText
    if(nextTextNodeId <= 0){ 
        return startGame()
    }

    state = object.assign(state, option.setState)

    showTextNode(nextTextNodeId)

}

const textNodes = [ 
    { 
        id: 1,
        text: " Howdy im the arena's mechanic! Looks like you need a new reactor seat for your battle robot, but you don't have any cash on you. Want go and see what you can trade?",
        options:  [ 
            {
                text: 'Lets start trading!',
                setState: {trade: true},
                nextText: 2
            },
            { 
            text: "How do I trade",
            nextText: 2
            }
        ]
    },
    { 
        id:2,
        text: 'Well, whatdayagot? Maybe I can help. ',
        options: [ 
            { 
                text: 'Offer a bitten sandwhich',
                requiredState: (currentState) => currentState.trade,
                setState: { trade: true, sandwhich: true },
                nextText: 3
            },
            { 
                text: 'Offer a Old rusty wrench',
                requiredState: (currentState) => currentState.trade,
                setState: { trade: true, wrench: true },
                nextText: 3
            },
            { 
                text: 'Walk away',
                nextText: 3
            }           

        ]
    },
    { 
        id:3,
        text: 'The mechanic walks away laughing and you look at the clock realizing you might be out of luck. You then notice a competitor rolling a sheet covered hunk of metal tot he trash. ',
        options: [ 
            { 
                text: 'Hey you! Stop for a second!',
                nextText: 4
            },
            { 
                text: 'Wait for them to through it away.',
                nextText: 5
            },
            { 
                text: 'Give up',
                nextText: 6
            }           

        ]
    },
    { 
        id: 6,
        text: 'Hopefully next year you will be ready',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }

        ]
    }

]

startGame()