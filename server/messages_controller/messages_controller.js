let messages = []
let id = 0

let ctrl = {
    create: (req,res) =>{
        const {text, time} = req.body
        messages.push({ id, text, time });
        id++
        res.status(200).send(messages)
    },
    read: (req,res) =>{
        res.status(200).send(messages)
    },
    update: (req,res) =>{
        const {text, time} = req.body
        const {id} = req.params
        const index = messages.findIndex( m => m.id == id)
        if (!messages[index]) {
            res.sendStatus(404)
        } else { 
            messages[index] = {
                id: messages[index],
                text: (text) ? text : messages[index].text,
                time: messages[index].time,
                lastUpdated: time
            }
            res.status(200).send(messages)
        }
    },
    delete: (req,res) =>{
        const deleteID =req.params.id
        messageIndex = messages.findIndex(m => m.id == deleteID)
        messages.splice(messageIndex,1)
        res.status(200).send(messages)
    },
}

module.exports = ctrl