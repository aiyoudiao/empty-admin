const { mockDir } = require('./config')
const Mock = require('mockjs')
const mockSet = require('./api/index')


exports.registerRoutes = function registerRoutes(app) {
    console.log('mockSet', mockSet)
    let mockLastIndex
    let mocks = []
    for (const mocKey in mockSet) {

        const cloneMockList = mockSet[mocKey]

        if(Array.isArray(cloneMockList)) {
            mocks = [...mocks, ...cloneMockList.flat(true)]
        } else {
            mocks = [...mocks, ...Object.values(cloneMockList).flat(true)]
        }

    }

    const mocksForServer = mocks.map(route => {
        return responseFake(route.url, route.type, route.response)
    })
    for (const mock of mocksForServer) {
        app[mock.type](mock.url, mock.response)
        mockLastIndex = app._router.stack.length
    }
    const mockRoutesLength = Object.keys(mocksForServer).length
    return {
        mockRoutesLength: mockRoutesLength,
        mockStartIndex: mockLastIndex - mockRoutesLength
    }
}

exports.unregisterRoutes = function unregisterRoutes() {
    Object.keys(require.cache).forEach(i => {
        if (i.includes(mockDir)) {
            delete require.cache[require.resolve(i)]
        }
    })
}


// for mock server
const responseFake = (url, type, respond) => {
    return {
        // url: new RegExp(`${process.env.VUE_APP_BASE_API}${url}`),
        url: url,
        type: type || 'get',
        response(req, res) {
            console.log('request invoke:' + req.path)
            res.json(Mock.mock(respond instanceof Function ? respond(req, res) : respond))
        }
    }
}
