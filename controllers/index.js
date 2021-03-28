// require model
const { result } = require('../models')

// define class controller
class Controller {
    // define static method to get odd numbers list
    static getOddNumbers(req, res) {
        // require child process for run python script
        const { spawn } = require('child_process')
        const pyProg = spawn('python', ['script.py'])

        pyProg.stdout.on('data', (data) => {
            const oddNumbers = []

            // build db inserted input
            JSON.parse(data.toString()).map(number => {
                oddNumbers.push({
                    number
                })
            })

            // insert using bulk create data into database
            result.bulkCreate(oddNumbers, {
                fields: ["id", "number"],
                updateOnDuplicate: ["number"]
            })
                .then(resp => {
                    res.status(200).json({ result: JSON.parse(data.toString()) })
                })
                .catch(err => {
                    res.status(500).json({message: 'Internal Server Error'})
                })
        })
    }
}

module.exports = Controller