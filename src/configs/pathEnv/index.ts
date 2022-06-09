const pathEnv = (): string => {
    let file
    switch (process.env.NODE_ENV) {
        case 'test':
            file = '.env.test'
            break
        case 'dev':
            file = '.env'
            break
        case 'prod':
            file = '.env.prod'
            break
        default:
            file = '.env'
            break
    }
    return file
}

export default pathEnv
