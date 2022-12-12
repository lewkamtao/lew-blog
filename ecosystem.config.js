module.exports = {
    apps: [{
        name: "lew_blog",
        exec_mode: "cluster",
        instances: "max", // Or a number of instances
        script: "./output/server/index.mjs",
        args: "start",
        env: {
            NODE_ENV: "production",
            PORT: 3909, // 修改之后 注意反向代理也要改!
        },
    }, ],
};