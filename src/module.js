console.log('module.js');

async function name() {
    return await Promise.resolve('async working')
}
name().then(console.log)