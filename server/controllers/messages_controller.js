let messages = [];
let id = 0;

module.exports = {
    create: (req, res)=> {
        const {text, time, username} = req.body;
        messages.push({id, text, time, username});
        id++;
        res.status(200).send(messages);
    },
    read: (req, res)=> {
        res.status(200).send(messages);
    },
    update: (req, res)=> {
        const {text} = req.body;
        const updateID = req.params.id;
        const messageIndex = messages.findIndex(message => message.id == updateID);
        let message = messages[messageIndex];

        messages[messageIndex] = {
            id: message.id,
            text: req.body.text || message.text,
            time: req.body.time 
        }
        res.status(200).send(messages);
    },
    delete: (req, res)=> {
        const deleteID = req.params.id;
        const deleteIndex = messages.findIndex(message => message.id == deleteID);
        messages.splice(deleteIndex, 1);
        res.status(200).send(messages);
    }
}