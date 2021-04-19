const { mockDir } = require('./config')


// for mock server
const responseFake =  (url, type, respond) => {
    return {
        // url: new RegExp(`${process.env.VUE_APP_BASE_API}${url}`),
        url: url,
        type: type || 'get',
        response(req, res) {
            console.log('请求调用:' + req.path)
            res.json(respond instanceof Function ? respond(req, res) : respond)
        }
    }
}

exports.registerRoutes = function registerRoutes(app) {

    function cloneObj (obj) {
        function clone() {
            var pattern = this.valueOf();
            var flags = '';
            flags += pattern.global ? 'g' : '';
            flags += pattern.ignoreCase ? 'i' : '';
            flags += pattern.multiline ? 'm' : '';
            return new RegExp(pattern.source, flags);
        };

        const url = clone.call(obj.url)
        const type = obj.type;
        const response = obj.response

        return {
            url,
            type,
            response
        }
    }
    const mockSet = require('./api/index')
    let mockLastIndex
    let mocks = []
    for (const mocKey in mockSet) {
        console.log('mockSet[mocKey]', mockSet[mocKey])
        const cloneMockList = Object.values(mockSet[mocKey]).flat(true).map(item => item)
        mocks = [...mocks, ...cloneMockList]
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
        //   console.log('mockDir', mockDir)
        //   console.log('i', i)
          delete require.cache[require.resolve(i)]
        }
      })
}
