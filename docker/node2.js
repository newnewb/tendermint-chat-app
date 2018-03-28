require('dotenv').config({path: ".env-node2"});

let shea = require('shea')
let app = require('lotion')({
    genesis: './genesis.json',
    initialState: { messages: [] },
    p2pPort: 46661,
    tendermintPort: 46658,
    logTendermint: true,
    peers: ['localhost:46660','localhost:46660'],
    keys: 'privkey1.json',
  })
  app.use((state, tx) => {
    if (typeof tx.sender === 'string' && typeof tx.message === 'string') {
      state.messages.push({ sender: tx.sender, message: tx.message })
    }
  })

  app.listen(3001).then(({ GCI }) => {
    console.log(GCI)
  })